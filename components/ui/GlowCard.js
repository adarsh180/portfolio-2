export default function GlowCard({
  children,
  className = '',
  icon,
  title,
  description,
}) {
  return (
    <div className={`arch-card-interactive p-6 h-full flex flex-col justify-between ${className}`}>
      {icon || title || description ? (
        <div className="flex flex-col h-full">
          {icon && (
            <div className="w-10 h-10 rounded-lg border border-line bg-surface-elevated flex items-center justify-center text-fg mb-5 shrink-0">
              {icon}
            </div>
          )}
          {title && (
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-fg mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-fg-secondary leading-relaxed">
              {description}
            </p>
          )}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
