import { FaPhoneAlt, FaEnvelope, FaTruck, FaClock } from "react-icons/fa";
import Section from "../components/Section";
import QuoteForm from "../components/QuoteForm";
import siteConfig from "../siteConfig";

function Contact() {
  return (
    <Section
      eyebrow="Contact"
      title="Let's Talk About Your Event"
      subtitle="Reach out directly or send a catering request and we'll follow up within one business day."
      className="pt-12"
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <InfoRow icon={FaPhoneAlt} label="Phone">
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="hover:text-brand-gold">
              {siteConfig.phone}
            </a>
          </InfoRow>
          <InfoRow icon={FaEnvelope} label="Email">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-gold">
              {siteConfig.email}
            </a>
          </InfoRow>
          <InfoRow icon={FaTruck} label="Service Area">
            {siteConfig.serviceArea}
          </InfoRow>
          <InfoRow icon={FaClock} label="Hours">
            {siteConfig.hours}
          </InfoRow>
        </div>

        <QuoteForm />
      </div>
    </Section>
  );
}

function InfoRow({ icon: IconComp, label, children }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-brand-gold/15 bg-brand-charcoal p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
        <IconComp />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-brand-gold/80">{label}</p>
        <p className="mt-1 text-sm text-brand-cream/80">{children}</p>
      </div>
    </div>
  );
}

export default Contact;
