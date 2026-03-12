import Link from "next/link";

export default function MethodPage() {
  return (
    <>
      <section style={{ paddingTop: "140px", padding: "140px 24px var(--section-padding)", background: "var(--gradient-dark)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 40% 40%, rgba(0,161,156,0.06) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <span className="section-label">Die Methode</span>
          <h1 style={{ marginBottom: "24px" }}>
            THE <span className="text-gradient">1-2-4</span> METHOD
          </h1>
          <p style={{ color: "var(--color-muted)", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Das bewährte System für maximale Ergebnisse in minimaler Zeit. Entwickelt für Männer, die keine 6 Tage pro Woche im Gym verbringen können – oder wollen.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ padding: "var(--section-padding) 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "64px" }}>
            SO <span className="text-gradient">FUNKTIONIERT&apos;S</span>
          </h2>

          {[
            { num: "01", title: "3 TRAININGSTAGE PRO WOCHE", subtitle: "Push / Pull / Legs oder Upper / Lower Split", description: "Keine unrealistischen 6-Tage-Splits. Du trainierst 3x pro Woche mit einem intelligenten Split, der zu deinem Alltag passt. Jede Session ist durchgeplant und dauert 45-60 Minuten.", color: "var(--color-primary)" },
            { num: "02", title: "2 COMPOUND-ÜBUNGEN PRO SESSION", subtitle: "Die Basis für Kraft und Muskelmasse", description: "Jede Session startet mit 2 schweren Compound-Übungen (Squat, Bench, Deadlift, OHP, Rows). Diese Übungen rekrutieren die meisten Muskelfasern und liefern den größten ROI pro Minute.", color: "var(--color-primary)" },
            { num: "03", title: "4 GEZIELTE ACCESSORY-ÜBUNGEN", subtitle: "Isolation für Definition und Symmetrie", description: "Nach den Compounds folgen 4 gezielte Isolationsübungen für Schwachstellen, Definition und Symmetrie. Progressive Overload sorgt dafür, dass du jede Woche stärker wirst.", color: "var(--color-primary)" },
          ].map((step, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "40px",
                marginBottom: i < 2 ? "64px" : 0,
                alignItems: "start",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 8vw, 80px)",
                  color: step.color,
                  opacity: 0.2,
                  lineHeight: 1,
                }}
              >
                {step.num}
              </div>
              <div>
                <h3 style={{ fontSize: "clamp(18px, 3vw, 28px)", marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ color: "var(--color-primary)", fontSize: "14px", letterSpacing: "1px", marginBottom: "16px", textTransform: "uppercase" }}>{step.subtitle}</p>
                <p style={{ color: "var(--color-muted)", fontSize: "16px", lineHeight: 1.8, maxWidth: "600px" }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why it works */}
      <section style={{ padding: "var(--section-padding) 24px", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span className="section-label">Warum es funktioniert</span>
          <h2 style={{ marginBottom: "48px" }}>SCIENCE-BASED <span className="text-gradient">RESULTS</span></h2>
          <div className="grid-2">
            {[
              { title: "Progressive Overload", desc: "Jede Woche ein bisschen mehr Gewicht oder Wiederholungen. Das zwingt deinen Körper, sich anzupassen und stärker zu werden." },
              { title: "Compound First", desc: "Compound-Übungen aktivieren mehr Muskelfasern und produzieren mehr Wachstumshormon als Isolation allein." },
              { title: "Recovery Focussed", desc: "3 Tage Training, 4 Tage Recovery. Deine Muskeln wachsen in der Ruhe – nicht beim Training." },
              { title: "Habit Stacking", desc: "3 feste Trainingstage pro Woche sind einfacher einzuhalten als 6. Konsistenz schlägt Intensität – immer." },
            ].map((item, i) => (
              <div key={i} className="card">
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "16px", marginBottom: "12px" }}>{item.title}</h4>
                <p style={{ color: "var(--color-muted)", fontSize: "14px", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-padding) 24px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "24px" }}>BEREIT FÜR DIE <span className="text-gradient">124 METHOD</span>?</h2>
        <p style={{ color: "var(--color-muted)", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.7 }}>
          Finde in einem kostenlosen Erstgespräch heraus, welches Programm perfekt zu dir passt.
        </p>
        <Link href="/contact" className="btn btn-primary">
          Erstgespräch buchen →
        </Link>
      </section>
    </>
  );
}
