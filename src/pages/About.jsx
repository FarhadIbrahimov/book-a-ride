import Section from "../components/Section";
import sabzi from "../assets/menu/sabzi-pilav.jpg";

function About() {
  return (
    <div>
      <Section eyebrow="Our Story" title="Bold Flavor. Timeless Tradition." className="pt-12">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-4 text-brand-cream/80">
            <p>
              Happy Skewer was born from a love of Azerbaijani home cooking — smoky charcoal-grilled
              kabobs, fragrant saffron pilav, and recipes passed down through generations.
            </p>
            <p>
              Our signature Koroğlu Kabob takes its name from the legendary Azerbaijani folk hero
              Koroğlu, known for his courage and strength. Just like the legend, our kabob is bold,
              hearty, and made to be remembered.
            </p>
            <p>
              Every dish we cater is prepared with real ingredients, authentic spice blends, and the
              same care you&rsquo;d find at a family table — whether we&rsquo;re feeding twenty guests or
              two hundred.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-brand-gold/15">
            <img src={sabzi} alt="Sabzi Pilav, a signature Happy Skewer dish" className="h-full w-full object-cover" />
          </div>
        </div>
      </Section>

      <Section dark eyebrow="Our Promise" title="Real Ingredients. Real Taste. Real Happiness.">
        <div className="grid gap-8 text-center sm:grid-cols-3">
          <div>
            <h3 className="font-display text-lg text-brand-gold">Fresh Daily</h3>
            <p className="mt-2 text-sm text-brand-cream/60">
              Meat is marinated and herbs are chopped fresh for every event — nothing sits frozen.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-brand-gold">Open-Flame Grilling</h3>
            <p className="mt-2 text-sm text-brand-cream/60">
              Kabobs are charcoal grilled on-site whenever possible, for that unmistakable smoky finish.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-brand-gold">Authentic Recipes</h3>
            <p className="mt-2 text-sm text-brand-cream/60">
              Traditional Azerbaijani spice blends and techniques, honoring where the flavor comes from.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default About;
