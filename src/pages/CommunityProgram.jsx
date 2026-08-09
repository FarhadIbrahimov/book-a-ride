import { Link } from "react-router-dom";
import Section from "../components/Section";
import Icon from "../components/Icon";
import { communityProgram, weeklyMenu, cateringProgramFlyer } from "../data/menu";

function CommunityProgram() {
  return (
    <div>
      <Section eyebrow="Community Catering" title={communityProgram.title} className="pt-12">
        <div className="mx-auto -mt-6 mb-10 flex flex-wrap justify-center gap-3">
          {communityProgram.audiences.map((audience) => (
            <span
              key={audience}
              className="rounded-full border border-brand-gold/30 bg-brand-charcoal px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold"
            >
              {audience}
            </span>
          ))}
        </div>
        <p className="mx-auto -mt-6 mb-10 text-center text-sm font-semibold uppercase tracking-widest text-brand-cream/60">
          {communityProgram.schedule}
        </p>

        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="space-y-4 text-brand-cream/80">
            {communityProgram.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="rounded-2xl border border-brand-gold/20 bg-brand-charcoal p-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Daily Catering Service</p>
            <p className="mt-2 text-xs text-brand-cream/50">(Monday–Friday)</p>
            <p className="mt-4 font-display text-5xl text-brand-cream">
              {communityProgram.pricePerDay}
              <span className="text-lg text-brand-cream/50"> / day</span>
            </p>
            <p className="mt-2 text-sm text-brand-cream/70">{communityProgram.priceNote}</p>
            {communityProgram.deliveryIncluded && (
              <p className="mt-4 inline-block rounded-full bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
                Delivery Included
              </p>
            )}
            <p className="mt-6 rounded-xl border border-brand-red/30 bg-brand-red/10 p-4 text-sm text-brand-cream/80">
              <span className="font-bold text-brand-cream">Important:</span> {communityProgram.prepayNote}
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-goldLight"
            >
              Request This Program
            </Link>
          </div>
        </div>
      </Section>

      <Section dark eyebrow="Why Choose Us" title="Made With Love, Nourished With Care">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {communityProgram.values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-gold/30 text-2xl text-brand-gold">
                <Icon name={v.icon} />
              </div>
              <h3 className="mt-4 font-display text-lg text-brand-cream">{v.title}</h3>
              <p className="mt-1 text-sm text-brand-cream/60">{v.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Monday–Friday Lunch Service" title="Rotating Weekly Menu">
        <div className="grid gap-6 md:grid-cols-5">
          {weeklyMenu.map((day) => (
            <div key={day.day} className="flex flex-col rounded-2xl border border-brand-gold/15 bg-brand-charcoal p-5">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg text-brand-gold">{day.day}</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-cream/40">
                  ~{day.kcal} kcal
                </span>
              </div>
              <h3 className="mt-2 font-display text-base leading-snug text-brand-cream">{day.title}</h3>
              <ul className="mt-3 flex-1 space-y-1.5 text-xs text-brand-cream/60">
                {day.items.map((item) => (
                  <li key={item}>&middot; {item}</li>
                ))}
              </ul>
              {day.optional && (
                <div className="mt-3 rounded-lg border border-brand-gold/15 bg-brand-black p-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-gold">
                    {day.optional.title}
                  </p>
                  <p className="mt-1 text-[11px] text-brand-cream/50">{day.optional.detail}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section dark eyebrow="Every Lunch Includes" title="Balanced, Reliable, Home-Style">
        <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {communityProgram.lunchIncludes.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-brand-gold/10 bg-brand-black p-3">
              <span className="text-brand-gold">&#10003;</span>
              <span className="text-sm text-brand-cream/80">{item}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Nutrition Standards</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {communityProgram.nutritionStandards.map((standard) => (
              <span
                key={standard}
                className="rounded-full border border-brand-gold/20 px-4 py-1.5 text-xs text-brand-cream/70"
              >
                {standard}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Our Promise" title="Why Choose Happy Skewer">
        <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {communityProgram.whyChooseUs.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-brand-gold/10 bg-brand-charcoal p-3">
              <span className="text-brand-gold">&#10003;</span>
              <span className="text-sm text-brand-cream/80">{item}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-md text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">House Specialties Available Upon Request</p>
          <p className="mt-3 text-sm text-brand-cream/70">
            {communityProgram.houseSpecialties.map((s) => s.name).join(" · ")}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-sm overflow-hidden rounded-2xl border border-brand-gold/20">
          <img
            src={cateringProgramFlyer}
            alt="Happy Skewer healthy Mediterranean & Azerbaijani catering program flyer"
            className="w-full"
            loading="lazy"
          />
        </div>
      </Section>
    </div>
  );
}

export default CommunityProgram;
