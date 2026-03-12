import Link from "next/link";

const packages = [
  {
    name: "STARTER",
    duration: "4 Wochen",
    price: "299",
    perWeek: "75",
    features: ["Individueller Trainingsplan", "Wöchentlicher Check-in Call", "Ernährungsleitfaden", "Chat-Support (Mo-Fr)"],
    highlight: false,
    stripeLink: "#",
  },
  {
    name: "TRANSFORMATION",
    duration: "16 Wochen",
    price: "999",
    perWeek: "62",
    features: ["Die vollständige 124 Method", "Wöchentliche Video-Calls", "Individuelle Ernährungspläne", "Täglicher Chat-Support", "Fortschritts-Tracking", "Zugang zum Client-Portal"],
    highlight: true,
    stripeLink: "#",
  },
  {
    name: "ELITE",
    duration: "16 Wochen",
    price: "1.499",
    perWeek: "94",
    features: ["Alles aus Transformation", "2x wöchentliche Video-Calls", "Priority Chat-Support", "Supplement-Beratung", "Lifestyle-Optimierung", "Lebenslanger Zugang zu Updates"],
    highlight: false,
    stripeLink: "#",
  },
];

export default function PricingPage() {
  return (
    <>
      <section style={{ paddingTop: "140px", padding: "140px 24px var(--section-padding)", background: "var(--gradient-dark)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 40%, rgba(0,161,156,0.05) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <span className="section-label">Preise</span>
          <h1 style={{ marginBottom: "24px" }}>INVESTIERE IN <span className="text-gradient">DICH SELBST</span></h1>
          <p style={{ color: "var(--color-muted)", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Flexible Coaching-Pakete für jedes Ziel. Keine versteckten Kosten, keine Verträge – nur Ergebnisse.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section" style={{ padding: "var(--section-padding) 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="grid-3">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="card"
                style={{
                  border: pkg.highlight ? "1px solid var(--color-primary)" : undefined,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {pkg.highlight && (
                  <div style={{
                    position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
                    background: "var(--gradient-primary)", padding: "4px 20px", borderRadius: "999px",
                    fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase",
                  }}>
                    Beliebteste Wahl
                  </div>
                )}
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", marginBottom: "4px" }}>{pkg.name}</h3>
                <p style={{ fontSize: "13px", color: "var(--color-muted-dark)", marginBottom: "24px" }}>{pkg.duration}</p>
                <div style={{ marginBottom: "8px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 48px)", color: pkg.highlight ? "var(--color-primary)" : "var(--color-text)" }}>{pkg.price}€</span>
                </div>
                <p style={{ fontSize: "13px", color: "var(--color-muted-dark)", marginBottom: "32px" }}>
                  {pkg.perWeek}€ / Woche
                </p>
                <ul style={{ flex: 1, marginBottom: "32px" }}>
                  {pkg.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--color-muted)", marginBottom: "12px" }}>
                      <span style={{ color: "var(--color-primary)", fontSize: "16px" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={pkg.stripeLink}
                  className={pkg.highlight ? "btn btn-primary" : "btn btn-outline"}
                  style={{ width: "100%", textAlign: "center" }}
                >
                  Jetzt buchen →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-like */}
      <section style={{ padding: "var(--section-padding) 24px", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "48px" }}>HÄUFIGE <span className="text-gradient">FRAGEN</span></h2>
          {[
            { q: "Brauche ich Gym-Erfahrung?", a: "Nein. Die 124 Method funktioniert für Anfänger und Fortgeschrittene. Jeder Plan wird individuell angepasst." },
            { q: "Was ist im Erstgespräch enthalten?", a: "Ein 15-minütiges Video-Call, in dem wir deine Ziele, deinen Alltag und die beste Strategie für dich besprechen. Kostenlos und unverbindlich." },
            { q: "Kann ich das Paket wechseln?", a: "Ja, du kannst jederzeit upgraden. Downgrade ist nach der aktuellen Laufzeit möglich." },
            { q: "Wie läuft die Zahlung?", a: "Einmalige Zahlung über Stripe. Sicher, verschlüsselt und sofortige Freischaltung." },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--color-border)", padding: "24px 0" }}>
              <h4 style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>{faq.q}</h4>
              <p style={{ color: "var(--color-muted)", fontSize: "14px", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "var(--section-padding) 24px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "24px" }}>NOCH <span className="text-gradient">UNSICHER</span>?</h2>
        <p style={{ color: "var(--color-muted)", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.7 }}>Lass uns reden. Im kostenlosen Erstgespräch finden wir heraus, ob und wie ich dir helfen kann.</p>
        <Link href="/contact" className="btn btn-primary">Kostenloses Erstgespräch →</Link>
      </section>
    </>
  );
}
