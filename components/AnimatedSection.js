import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' // 'up', 'down', 'left', 'right'
}) {
  const getInitialDirection = () => {
    switch (direction) {
      case 'up': return { y: 50, opacity: 0 };
      case 'down': return { y: -50, opacity: 0 };
      case 'left': return { x: 50, opacity: 0 };
      case 'right': return { x: -50, opacity: 0 };
      default: return { y: 50, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialDirection()}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}