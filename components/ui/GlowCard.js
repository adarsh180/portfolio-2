import { GlowingEffect } from './GlowingEffect';

export default function GlowCard({ 
  children, 
  className = '', 
  icon, 
  title, 
  description,
  glowProps = {} 
}) {
  const defaultGlowProps = {
    spread: 40,
    glow: true,
    disabled: false,
    proximity: 64,
    inactiveZone: 0.01,
    borderWidth: 3,
    ...glowProps,
  };

  return (
    <div className={`relative rounded-[1.25rem] border border-white/[0.08] p-2 md:rounded-[1.5rem] md:p-3 ${className}`}>
      <GlowingEffect {...defaultGlowProps} />
      <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-white/[0.06] bg-[hsl(var(--card))] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
        {(icon || title || description) ? (
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {icon && (
              <div className="w-fit rounded-lg border border-white/[0.08] bg-white/[0.05] p-2.5">
                {icon}
              </div>
            )}
            {(title || description) && (
              <div className="space-y-3">
                {title && (
                  <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-display tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                    {description}
                  </p>
                )}
              </div>
            )}
          </div>
        ) : children}
      </div>
    </div>
  );
}
