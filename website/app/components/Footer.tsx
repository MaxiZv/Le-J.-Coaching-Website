"use client";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ borderTop: "1px solid var(--color-border)", padding: "64px 24px 32px", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", marginBottom: "48px" }}>
        {/* Brand */}
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
            LE. J COACHING
          </h3>
          <p style={{ fontSize: "13px", color: "var(--color-muted-dark)", lineHeight: 1.7, maxWidth: "260px" }}>
            Helping busy men go from inconsistent to jacked in 16 weeks using the 124 method.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--color-muted-dark)", marginBottom: "20px", fontFamily: "var(--font-body)" }}>Navigation</h4>
          {[
            { id: "about", label: "Über mich" },
            { id: "method", label: "124 Method" },
            { id: "results", label: "Ergebnisse" },
            { id: "pricing", label: "Preise" },
            { id: "contact", label: "Kontakt" },
          ].map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollTo(link.id); }} style={{ display: "block", fontSize: "13px", color: "var(--color-muted-dark)", marginBottom: "10px", transition: "color 0.3s", textDecoration: "none" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted-dark)"}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* External */}
        <div>
          <h4 style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--color-muted-dark)", marginBottom: "20px", fontFamily: "var(--font-body)" }}>Coaching</h4>
          <a href="https://calendly.com/straightupjacked/new-meeting" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "13px", color: "var(--color-muted-dark)", marginBottom: "10px", transition: "color 0.3s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted-dark)"}
          >Erstgespräch buchen</a>
          <a href="https://tally.so/r/VLE6kJ" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "13px", color: "var(--color-muted-dark)", marginBottom: "10px", transition: "color 0.3s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted-dark)"}
          >Fragebogen</a>
          <a href="https://www.instagram.com/jannikhof" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "13px", color: "var(--color-muted-dark)", marginBottom: "10px", transition: "color 0.3s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted-dark)"}
          >Instagram</a>
        </div>

        {/* CTA */}
        <div>
          <h4 style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--color-muted-dark)", marginBottom: "20px", fontFamily: "var(--font-body)" }}>Bereit?</h4>
          <p style={{ fontSize: "13px", color: "var(--color-muted-dark)", marginBottom: "16px", lineHeight: 1.7 }}>Starte jetzt deine Transformation.</p>
          <a href="https://calendly.com/straightupjacked/new-meeting" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "11px" }}>
            Erstgespräch buchen
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <p style={{ fontSize: "11px", color: "var(--color-muted-dark)" }}>© {new Date().getFullYear()} Le. J Coaching. Alle Rechte vorbehalten.</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/impressum" style={{ fontSize: "11px", color: "var(--color-muted-dark)", transition: "color 0.3s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted-dark)"}
          >Impressum</a>
          <a href="/datenschutz" style={{ fontSize: "11px", color: "var(--color-muted-dark)", transition: "color 0.3s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted-dark)"}
          >Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
