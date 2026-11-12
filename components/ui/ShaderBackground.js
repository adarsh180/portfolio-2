import { useEffect, useRef } from 'react';

export default function MeshBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let time = 0;

    // Floating orbs with organic movement
    const orbs = [
      { x: 0.2, y: 0.3, r: 300, color: [88, 28, 135], speed: 0.0003, phase: 0 },     // deep purple
      { x: 0.8, y: 0.2, r: 250, color: [30, 27, 75], speed: 0.0004, phase: 1.5 },     // deep indigo
      { x: 0.5, y: 0.7, r: 350, color: [55, 20, 90], speed: 0.0002, phase: 3.0 },     // dark violet
      { x: 0.3, y: 0.8, r: 200, color: [20, 20, 60], speed: 0.0005, phase: 4.5 },     // midnight blue
      { x: 0.7, y: 0.5, r: 280, color: [75, 25, 100], speed: 0.00035, phase: 2.0 },   // plum
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      time += 1;
      const w = canvas.width;
      const h = canvas.height;

      // Deep dark base
      ctx.fillStyle = '#08060e';
      ctx.fillRect(0, 0, w, h);

      // Draw each orb with radial gradient
      for (const orb of orbs) {
        const cx = w * (orb.x + 0.12 * Math.sin(time * orb.speed + orb.phase));
        const cy = h * (orb.y + 0.08 * Math.cos(time * orb.speed * 0.8 + orb.phase));
        const scale = Math.min(w, h) / 900;
        const r = orb.r * scale;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        const [cr, cg, cb] = orb.color;
        gradient.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, 0.35)`);
        gradient.addColorStop(0.4, `rgba(${cr}, ${cg}, ${cb}, 0.15)`);
        gradient.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      // Subtle noise grain overlay for texture
      if (time % 3 === 0) {
        const imageData = ctx.getImageData(0, 0, w, h);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 16) {  // Skip pixels for performance
          const noise = (Math.random() - 0.5) * 8;
          data[i] = Math.max(0, Math.min(255, data[i] + noise));
          data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
          data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
        }
        ctx.putImageData(imageData, 0, 0);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ opacity: 1 }}
    />
  );
}
