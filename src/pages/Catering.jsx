import Section from "../components/Section";
import QuoteForm from "../components/QuoteForm";
import Icon from "../components/Icon";
import { cateringServices } from "../data/menu";

function Catering() {
  return (
    <div>
      <Section
        eyebrow="Catering"
        title="Full-Service Catering For Every Occasion"
        subtitle="From intimate gatherings to large celebrations, Happy Skewer brings the charcoal grill to you."
        className="pt-12"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cateringServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-brand-gold/15 bg-brand-charcoal p-6 text-center"
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

      <Section dark eyebrow="How It Works" title="Booking Is Simple">
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            { step: "01", title: "Tell Us About Your Event", detail: "Share your date, guest count and event type." },
            { step: "02", title: "We Build Your Menu", detail: "We'll recommend a menu and send a custom quote." },
            { step: "03", title: "We Grill, You Celebrate", detail: "Our team arrives on time and handles the rest." },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <p className="font-display text-4xl text-brand-gold/40">{s.step}</p>
              <h3 className="mt-2 font-display text-lg text-brand-cream">{s.title}</h3>
              <p className="mt-1 text-sm text-brand-cream/60">{s.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Request a Quote" title="Let's Plan Your Menu">
        <div className="mx-auto max-w-2xl">
          <QuoteForm />
        </div>
      </Section>
    </div>
  );
}

export default Catering;
