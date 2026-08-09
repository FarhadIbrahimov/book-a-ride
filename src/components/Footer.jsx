import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope, FaGlobe, FaTruck } from "react-icons/fa";
import siteConfig from "../siteConfig";

function Footer() {
  return (
    <footer className="border-t border-brand-gold/20 bg-brand-black text-brand-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-brand-cream">
            HAPPY <span className="text-brand-gold">SKEWER</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Fresh, healthy, halal Mediterranean & Azerbaijani catering — grill plates, family
            events and daily meal programs for senior centers and adult day care communities.
          </p>
          {(siteConfig.instagram || siteConfig.facebook) && (
            <div className="mt-4 flex gap-4">
              {siteConfig.instagram && (
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-brand-cream/70 hover:text-brand-gold"
                >
                  <FaInstagram size={18} />
                </a>
              )}
              {siteConfig.facebook && (
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="text-brand-cream/70 hover:text-brand-gold"
                >
                  <FaFacebookF size={18} />
                </a>
              )}
            </div>
          )}
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-widest text-brand-gold">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/menu" className="hover:text-brand-gold">Menu</Link></li>
            <li><Link to="/catering" className="hover:text-brand-gold">Catering Services</Link></li>
            <li><Link to="/community-program" className="hover:text-brand-gold">Senior Care Program</Link></li>
            <li><Link to="/about" className="hover:text-brand-gold">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-widest text-brand-gold">Get In Touch</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-brand-gold" />
              <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="hover:text-brand-gold">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-brand-gold" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-gold">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGlobe className="text-brand-gold" />
              <span>{siteConfig.website}</span>
            </li>
            <li className="flex items-start gap-2">
              <FaTruck className="mt-1 text-brand-gold" />
              <span>{siteConfig.serviceArea}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-gold/10 py-5 text-center text-xs text-brand-cream/50">
        &copy; {new Date().getFullYear()} {siteConfig.name}. {siteConfig.tagline}
      </div>
    </footer>
  );
}

export default Footer;
