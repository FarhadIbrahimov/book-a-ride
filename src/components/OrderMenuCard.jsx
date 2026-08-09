const ACCENTS = {
  orange: "border-orange-500/40 text-orange-400",
  red: "border-brand-red/50 text-red-400",
  green: "border-emerald-600/50 text-emerald-400",
  gold: "border-brand-gold/50 text-brand-gold",
};

function OrderMenuCard({ item }) {
  const accent = ACCENTS[item.accent] || ACCENTS.gold;

  return (
    <div className={`flex flex-col rounded-2xl border bg-brand-charcoal p-6 ${accent.split(" ")[0]}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl text-brand-cream">{item.name}</h3>
          {item.servings && (
            <p className={`mt-1 text-xs font-bold uppercase tracking-wider ${accent.split(" ")[1]}`}>
              {item.servings}
            </p>
          )}
        </div>
        <p className={`font-display text-2xl ${accent.split(" ")[1]}`}>{item.price}</p>
      </div>
      <p className="mt-3 text-sm text-brand-cream/70">{item.description}</p>
      <div className="mt-4 border-t border-brand-gold/10 pt-4">
        <p className="text-[11px] font-bold uppercase tracking-widest text-brand-cream/50">Comes With</p>
        <p className="mt-1 text-sm text-brand-cream/70">{item.comesWith.join(" · ")}</p>
      </div>
    </div>
  );
}

export default OrderMenuCard;
