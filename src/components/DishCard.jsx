import Icon from "./Icon";

function DishCard({ dish }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-brand-gold/15 bg-brand-charcoal shadow-lg shadow-black/40 transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">{dish.tag}</p>
        <h3 className="mt-2 font-display text-2xl text-brand-cream">{dish.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-cream/70">{dish.description}</p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {dish.highlights.map((h) => (
            <div key={h.title} className="flex items-start gap-2">
              <Icon name={h.icon} className="mt-0.5 shrink-0 text-brand-gold" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-cream">{h.title}</p>
                <p className="text-[11px] text-brand-cream/60">{h.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-brand-gold/10 pt-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-gold/80">Served With</p>
          <p className="mt-1 text-sm text-brand-cream/70">{dish.servedWith.join(" · ")}</p>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
