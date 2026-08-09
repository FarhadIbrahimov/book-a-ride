
function Section({ id, eyebrow, title, subtitle, dark = false, children, className = "" }) {
  return (
    <section id={id} className={`${dark ? "bg-brand-charcoal" : "bg-brand-black"} py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(eyebrow || title) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && (
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">{eyebrow}</p>
            )}
            {title && (
              <h2 className="font-display text-3xl text-brand-cream sm:text-4xl">{title}</h2>
            )}
            {subtitle && <p className="mt-4 text-brand-cream/70">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
