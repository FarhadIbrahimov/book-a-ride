import Section from "../components/Section";
import DishCard from "../components/DishCard";
import OrderMenuCard from "../components/OrderMenuCard";
import Icon from "../components/Icon";
import { signatureDishes, fullMenu, orderMenu, orderInfo, orderLogistics, orderMenuFlyer } from "../data/menu";

function Menu() {
  return (
    <div>
      <Section
        eyebrow="Our Menu"
        title="Signature Dishes"
        subtitle="Charcoal-grilled kabobs and traditional pilav, made fresh with authentic Azerbaijani spices."
        className="pt-12"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {signatureDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </Section>

      <Section
        dark
        eyebrow="Order Menu"
        title="From Our Grill To Your Table"
        subtitle="Halal, fresh and made daily. Every plate comes with saffron pilaf, grilled tomato, pita bread and a drink."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {orderMenu.map((item) => (
            <OrderMenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-4">
          {orderLogistics.map((logistic) => (
            <div key={logistic.label} className="rounded-xl border border-brand-gold/15 bg-brand-black p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">{logistic.label}</p>
              <p className="mt-1 text-sm text-brand-cream/70">{logistic.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {orderInfo.map((info) => (
            <div key={info.label} className="flex items-center gap-2 text-sm text-brand-cream/70">
              <Icon name={info.icon} className="text-brand-gold" />
              {info.label}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-sm overflow-hidden rounded-2xl border border-brand-gold/20">
          <img src={orderMenuFlyer} alt="Happy Skewer order menu with pricing" className="w-full" loading="lazy" />
        </div>
      </Section>

      <Section eyebrow="Full Menu" title="Build Your Catering Spread" subtitle="Pricing is customized per event — request a quote for exact pricing.">
        <div className="grid gap-10 md:grid-cols-2">
          {fullMenu.map((section) => (
            <div key={section.category}>
              <h3 className="border-b border-brand-gold/20 pb-2 font-display text-xl text-brand-gold">
                {section.category}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-brand-cream">{item.name}</p>
                      <p className="text-sm text-brand-cream/60">{item.description}</p>
                    </div>
                    <span className="whitespace-nowrap text-xs font-bold uppercase tracking-wider text-brand-gold/80">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Menu;
