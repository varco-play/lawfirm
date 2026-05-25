import { navItems, practiceAreas } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-brand">
        <span className="brand-mark">
          <span>A</span>
          <span>V</span>
        </span>
        <strong>Ashford & Vale</strong>
        <em>Attorneys at Law</em>
      </div>

      <div className="footer-grid">
        <div>
          <h2>Practice Areas</h2>
          {practiceAreas.map((area) => (
            <a href="#practice-areas" key={area.title}>
              {area.title}
            </a>
          ))}
        </div>
        <div>
          <h2>Navigation</h2>
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <h2>Contact</h2>
          <a href="tel:+12155550198">(215) 555-0198</a>
          <a href="mailto:info@ashfordvale.com">info@ashfordvale.com</a>
          <p>
            One Liberty Place
            <br />
            1650 Market Street, Suite 3600
            <br />
            Philadelphia, PA 19103
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          This website is for informational purposes only and does not create an
          attorney-client relationship.
        </p>
        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
        </div>
        <span>Copyright 2026 Ashford & Vale, LLC. All rights reserved.</span>
      </div>
    </footer>
  );
}
