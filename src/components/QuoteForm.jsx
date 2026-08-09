import { useState } from "react";
import siteConfig from "../siteConfig";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  eventType: "Wedding",
  eventDate: "",
  guestCount: "",
  message: "",
};

function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-gold/20 bg-brand-charcoal p-8 text-center">
        <h3 className="font-display text-2xl text-brand-gold">Thank you, {form.name.split(" ")[0] || "friend"}!</h3>
        <p className="mt-3 text-brand-cream/80">
          We received your catering request and will reach out within one business day. For anything
          urgent, call us directly at{" "}
          <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="text-brand-gold underline">
            {siteConfig.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-6 rounded-full border border-brand-gold px-6 py-2 text-sm font-bold uppercase tracking-wider text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl border border-brand-gold/20 bg-brand-charcoal p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
        <div>
          <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-brand-cream/70">
            Event Type
          </label>
          <select
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            className="w-full rounded-lg border border-brand-gold/20 bg-brand-black px-4 py-2.5 text-brand-cream focus:border-brand-gold focus:outline-none"
          >
            <option>Wedding</option>
            <option>Corporate Event</option>
            <option>Private Party</option>
            <option>Holiday Celebration</option>
            <option>Other</option>
          </select>
        </div>
        <Field label="Event Date" name="eventDate" type="date" value={form.eventDate} onChange={handleChange} required />
        <Field
          label="Estimated Guest Count"
          name="guestCount"
          type="number"
          min="1"
          value={form.guestCount}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-brand-cream/70">
          Tell us about your event
        </label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Menu preferences, location, dietary needs..."
          className="w-full rounded-lg border border-brand-gold/20 bg-brand-black px-4 py-2.5 text-brand-cream placeholder:text-brand-cream/30 focus:border-brand-gold focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-goldLight"
      >
        Request Catering Quote
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", value, onChange, required, min }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-brand-cream/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        className="w-full rounded-lg border border-brand-gold/20 bg-brand-black px-4 py-2.5 text-brand-cream placeholder:text-brand-cream/30 focus:border-brand-gold focus:outline-none"
      />
    </div>
  );
}

export default QuoteForm;
