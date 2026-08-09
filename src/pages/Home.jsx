import { Link } from "react-router-dom";
import Section from "../components/Section";
import DishCard from "../components/DishCard";
import Icon from "../components/Icon";
import { signatureDishes, whyChooseUs, cateringServices, communityProgram } from "../data/menu";
import koroglu from "../assets/menu/koroglu-kabob.jpg";

function Home() {
  return (
    <>
      <section
        className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${koroglu})` }}
      >
        <div className="absolute inset-0 bg-brand-black/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold">
            Authentic Azerbaijani Catering
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-brand-cream sm:text-6xl">
            Real Ingredients.<br /> Real Taste. <span className="text-brand-gold">Real Happiness.</span>
          </h1>
          <p className="mt-6 text-lg text-brand-cream/80">
            Charcoal-grilled kabobs and traditional pilav, catered for weddings, corporate events and
            celebrations of every size.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/menu"
              className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-goldLight"
            >
              View Menu
            </Link>
            <Link
              to="/catering"
              className="rounded-full border border-brand-cream/40 px-7 py-3 text-sm font-bold uppercase tracking-wider text-brand-cream transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              Request Catering
            </Link>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Signature Dishes"
        title="Taste the Tradition"
        subtitle="Every dish is grilled over open flame and finished with authentic Azerbaijani spices."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {signatureDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/menu"
            className="inline-block rounded-full border border-brand-gold px-7 py-3 text-sm font-bold uppercase tracking-wider text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
          >
            See Full Menu
          </Link>
        </div>
      </Section>

      <Section dark eyebrow="Why Happy Skewer" title="Made With Love, Grilled With Fire">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-gold/30 text-2xl text-brand-gold">
                <Icon name={item.icon} />
              </div>
              <h3 className="mt-4 font-display text-lg text-brand-cream">{item.title}</h3>
              <p className="mt-1 text-sm text-brand-cream/60">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Catering Services" title="For Every Celebration">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cateringServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-brand-gold/15 bg-brand-charcoal p-6 text-center transition-colors hover:border-brand-gold/40"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10 text-xl text-brand-gold">
                <Icon name={service.icon} />
              </div>
              <h3 className="mt-4 font-display text-lg text-brand-cream">{service.title}</h3>
              <p className="mt-2 text-sm text-brand-cream/60">{service.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark eyebrow="Community Catering" title="Daily Meal Program for Senior Care">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-brand-gold/20 bg-brand-charcoal p-8 text-center">
          <p className="flex flex-wrap justify-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold">
            {communityProgram.audiences.join(" · ")}
          </p>
          <p className="text-brand-cream/70">
            Monday–Friday lunch service with a rotating, nutritionist-friendly menu — delivered.
          </p>
          <p className="font-display text-4xl text-brand-cream">
            {communityProgram.pricePerDay}
            <span className="text-base text-brand-cream/50"> / day, serves 8–10</span>
          </p>
          <Link
            to="/community-program"
            className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-goldLight"
          >
            View Program Details
          </Link>
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl text-brand-cream sm:text-4xl">
            Ready to plan your event?
          </h2>
          <p className="text-brand-cream/70">
            Tell us your date and guest count and we&rsquo;ll build a menu that fits your celebration.
          </p>
          <Link
            to="/contact"
            className="rounded-full bg-brand-gold px-8 py-3 text-sm font-bold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-goldLight"
          >
            Get In Touch
          </Link>
        </div>
      </Section>
    </>
  );
}

export default Home;
