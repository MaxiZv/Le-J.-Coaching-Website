import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "var(--section-padding)",
          padding: "140px 24px var(--section-padding)",
          background: "var(--gradient-dark)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 60% 30%, rgba(0,161,156,0.05) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span className="section-label">Über Jannik</span>
          <h1 style={{ marginBottom: "24px" }}>
            DEIN COACH.<br />
            <span className="text-gradient">JANNIK HOF.</span>
          </h1>
          <p style={{ color: "var(--color-muted)", fontSize: "18px", maxWidth: "600px", lineHeight: 1.8 }}>
            CSCS-zertifizierter Online Fitness Coach mit einer Mission: Vielbeschäftigten Männern zeigen, dass sie mit nur 3 Sessions pro Woche ihren Traumkörper aufbauen können.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ padding: "var(--section-padding) 24px" }}>
        <div className="grid-2" style={{ maxWidth: "1200px", margin: "0 auto", alignItems: "center" }}>
          <div
            style={{
              aspectRatio: "3/4",
              borderRadius: "var(--radius-xl)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-muted-dark)",
              fontSize: "14px",
            }}
          >
            [Foto von Jannik beim Training]
          </div>
          <div>
            <h2 style={{ marginBottom: "24px", fontSize: "clamp(24px, 4vw, 40px)" }}>
              MEINE <span className="text-gradient">STORY</span>
            </h2>
            <p style={{ color: "var(--color-muted)", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              Ich kenne das Gefühl: Voller Terminkalender, keine Zeit fürs Gym, und trotzdem der Wunsch, fit und stark zu sein. Ich habe selbst jahrelang 6-7 Mal pro Woche trainiert – bis ich gemerkt habe, dass mehr nicht gleich besser ist.
            </p>
            <p style={{ color: "var(--color-muted)", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              Also habe ich die 124 Method entwickelt: Nur 3 strukturierte Sessions pro Woche, fokussiert auf progressive Overload mit den richtigen Übungen. Das Ergebnis? Bessere Ergebnisse in weniger Zeit.
            </p>
            <p style={{ color: "var(--color-muted)", fontSize: "16px", lineHeight: 1.8 }}>
              Heute helfe ich Unternehmern, Managern und vielbeschäftigten Männern, den gleichen Weg zu gehen – effizient, nachhaltig, ohne ihr Leben umzukrempeln.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section
        style={{
          padding: "var(--section-padding) 24px",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span className="section-label">Qualifikationen</span>
          <h2 style={{ marginBottom: "48px" }}>
            CREDENTIALS &amp; <span className="text-gradient">EXPERTISE</span>
          </h2>
          <div className="grid-3">
            {[
              { icon: "🏆", title: "CSCS Zertifiziert", desc: "Certified Strength and Conditioning Specialist – die höchste Zertifizierung im Fitness-Coaching." },
              { icon: "📊", title: "50+ Clients", desc: "Über 50 vielbeschäftigte Männer haben mit der 124 Method sichtbare Ergebnisse erzielt." },
              { icon: "🧪", title: "Science-Based", desc: "Alle Programme basieren auf aktueller Sportwissenschaft und werden regelmäßig optimiert." },
              { icon: "🎯", title: "Spezialisiert", desc: "Fokus auf busy professionals – Unternehmer, Manager und Gründer mit wenig Zeit." },
              { icon: "📱", title: "100% Online", desc: "Flexibles Coaching per App, Video-Calls und individuellen Trainingsplänen." },
              { icon: "🔄", title: "Nachhaltig", desc: "Keine Crash-Diäten, kein 6x/Woche Training. Langfristige Gewohnheiten, die bleiben." },
            ].map((q, i) => (
              <div key={i} className="card">
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{q.icon}</div>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "16px", marginBottom: "12px" }}>{q.title}</h4>
                <p style={{ color: "var(--color-muted)", fontSize: "14px", lineHeight: 1.7 }}>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "var(--section-padding) 24px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "24px" }}>BEREIT, DEN <span className="text-gradient">ERSTEN SCHRITT</span> ZU MACHEN?</h2>
        <p style={{ color: "var(--color-muted)", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.7 }}>
          Lass uns in einem kostenlosen Erstgespräch herausfinden, wie die 124 Method für dich funktionieren kann.
        </p>
        <Link href="/contact" className="btn btn-primary">
          Kostenloses Erstgespräch →
        </Link>
      </section>
    </>
  );
}
