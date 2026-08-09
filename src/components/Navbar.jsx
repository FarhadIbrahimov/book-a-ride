import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import siteConfig from "../siteConfig";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/catering", label: "Catering" },
  { to: "/community-program", label: "Senior Care" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-black/95 backdrop-blur border-b border-brand-gold/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl tracking-wide text-brand-cream sm:text-3xl">
            HAPPY <span className="text-brand-gold">SKEWER</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wider transition-colors ${
                  isActive ? "text-brand-gold" : "text-brand-cream/80 hover:text-brand-gold"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/catering"
            className="rounded-full bg-brand-gold px-5 py-2 text-sm font-bold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-goldLight"
          >
            Get a Quote
          </NavLink>
        </nav>

        <button
          type="button"
          className="text-brand-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand-gold/20 bg-brand-black px-4 pb-4 lg:hidden">
          <div className="flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-semibold uppercase tracking-wider ${
                    isActive ? "text-brand-gold" : "text-brand-cream/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="mt-2 inline-block rounded-full bg-brand-gold px-5 py-2 text-center text-sm font-bold uppercase tracking-wider text-brand-black"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
