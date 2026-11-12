export default function SectionHeading({
  indexLabel,
  title,
  subtitle,
  action = null,
  className = '',
}) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 ${className}`}
    >
      <div className="max-w-2xl">
        {indexLabel && (
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-fg-tertiary mb-3">
            <span className="inline-block w-4 h-px bg-line-strong" aria-hidden="true" />
            <span>{indexLabel}</span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-fg leading-[1.15]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-fg-secondary leading-relaxed max-w-[62ch]">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
