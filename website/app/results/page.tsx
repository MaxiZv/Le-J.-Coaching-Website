import Link from "next/link";

const transformations = [
  { name: "Thomas K.", age: 34, job: "Unternehmer", weeks: 16, result: "12 kg Muskelmasse aufgebaut, 8% Körperfett reduziert" },
  { name: "Michael S.", age: 42, job: "CEO", weeks: 16, result: "Stärker als mit 25, trotz 60-Stunden-Woche" },
  { name: "Daniel R.", age: 29, job: "Consultant", weeks: 12, result: "Erste sichtbare Sixpack seit Jahren" },
  { name: "Stefan M.", age: 38, job: "Geschäftsführer", weeks: 16, result: "20 kg Deadlift PR, besserer Schlaf" },
  { name: "Andreas W.", age: 45, job: "Investor", weeks: 16, result: "Vom Couch-Potato zum Morning-Gym-Routine" },
  { name: "Lukas H.", age: 31, job: "Gründer", weeks: 12, result: "15 kg Bank Press Steigerung, mehr Energie" },
];

const testimonials = [
  { name: "Thomas K.", text: "Ich hätte nie gedacht, dass 3x pro Woche reicht. Jannik hat mir gezeigt, dass Qualität über Quantität geht. Meine Frau erkennt mich kaum wieder.", rating: 5 },
  { name: "Michael S.", text: "Als CEO habe ich null Zeit. Die 124 Method passt perfekt in meinen Kalender. Jannik ist professionell, direkt und weiß genau was er tut.", rating: 5 },
  { name: "Daniel R.", text: "Mein Sixpack ist endlich da. Nach 12 Wochen. Ich trainiere weniger als vorher, aber mit System. Absolut empfehlenswert.", rating: 5 },
];

export default function ResultsPage() {
  return (
    <>
      <section style={{ paddingTop: "140px", padding: "140px 24px var(--section-padding)", background: "var(--gradient-dark)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 40%, rgba(0,161,156,0.05) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <span className="section-label">Ergebnisse</span>
          <h1 style={{ marginBottom: "24px" }}>REAL <span className="text-gradient">TRANSFORMATIONS</span></h1>
          <p style={{ color: "var(--color-muted)", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Echte Ergebnisse von echten Männern. Keine Models, keine Fakes – nur harte Arbeit mit der richtigen Methode.
          </p>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="section" style={{ padding: "var(--section-padding) 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="grid-3">
            {transformations.map((t, i) => (
              <div key={i} className="card" style={{ position: "relative", overflow: "hidden" }}>
                <div style={{ aspectRatio: "3/4", background: "var(--color-bg)", borderRadius: "var(--radius-md)", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-muted-dark)", fontSize: "13px", border: "1px solid var(--color-border)" }}>
                  [Vorher / Nachher]
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "16px" }}>{t.name}</h4>
                  <span style={{ fontSize: "12px", color: "var(--color-primary)", fontWeight: 600 }}>{t.weeks} Wochen</span>
                </div>
                <p style={{ fontSize: "12px", color: "var(--color-muted-dark)", marginBottom: "8px" }}>{t.age} Jahre · {t.job}</p>
                <p style={{ fontSize: "14px", color: "var(--color-muted)", lineHeight: 1.6 }}>{t.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "var(--section-padding) 24px", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span className="section-label">Kundenstimmen</span>
          <h2 style={{ marginBottom: "48px" }}>WAS CLIENTS <span className="text-gradient">SAGEN</span></h2>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="card">
                <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} style={{ color: "var(--color-primary)", fontSize: "18px" }}>★</span>
                  ))}
                </div>
                <p style={{ color: "var(--color-muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px", fontStyle: "italic" }}>
                  &quot;{t.text}&quot;
                </p>
                <p style={{ fontWeight: 600, fontSize: "14px" }}>{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-padding) 24px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "24px" }}>DEINE <span className="text-gradient">TRANSFORMATION</span> WARTET</h2>
        <p style={{ color: "var(--color-muted)", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.7 }}>Werde der nächste Erfolg. Buche jetzt dein kostenloses Erstgespräch.</p>
        <Link href="/contact" className="btn btn-primary">Jetzt starten →</Link>
      </section>
    </>
  );
}
