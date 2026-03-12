import Link from "next/link";

export default function BlogPostPage() {
  return (
    <>
      <section style={{ paddingTop: "140px", padding: "140px 24px 48px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Link href="/blog" style={{ fontSize: "13px", color: "var(--color-primary)", display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
            ← Zurück zum Blog
          </Link>
          <span style={{ fontSize: "11px", color: "var(--color-primary)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>Transformation</span>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", marginBottom: "16px", marginTop: "8px" }}>
            BEISPIEL BLOG POST
          </h1>
          <p style={{ fontSize: "14px", color: "var(--color-muted-dark)", marginBottom: "40px" }}>12. März 2026 · 5 Min Lesezeit</p>
        </div>
      </section>

      <section style={{ padding: "0 24px var(--section-padding)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ aspectRatio: "16/9", borderRadius: "var(--radius-xl)", background: "var(--color-surface)", border: "1px solid var(--color-border)", marginBottom: "40px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-muted-dark)" }}>
            [Blog Header Bild]
          </div>
          <div style={{ color: "var(--color-muted)", fontSize: "16px", lineHeight: 1.9 }}>
            <p style={{ marginBottom: "24px" }}>
              Dies ist ein Platzhalter-Blogpost. Hier wird Jannik seine Client-Transformationen, Trainingstipps und Ernährungsratschläge teilen.
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "var(--color-text)", marginBottom: "16px", marginTop: "40px" }}>DIE AUSGANGSLAGE</h2>
            <p style={{ marginBottom: "24px" }}>
              Der Content wird aus Janniks Instagram-Posts und eigenen Erfahrungen zusammengestellt. Jeder Post zeigt echte Ergebnisse, echte Methoden und gibt sofort umsetzbare Tipps.
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "var(--color-text)", marginBottom: "16px", marginTop: "40px" }}>DAS ERGEBNIS</h2>
            <p style={{ marginBottom: "24px" }}>
              Die Blog-Posts werden regelmäßig aktualisiert und zeigen die neuesten Ergebnisse und Erkenntnisse aus dem Coaching.
            </p>
          </div>
          <div style={{ marginTop: "48px", padding: "32px", borderRadius: "var(--radius-lg)", background: "var(--color-surface)", border: "1px solid var(--color-border)", textAlign: "center" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", marginBottom: "12px" }}>BEREIT FÜR DEIN ERGEBNIS?</h3>
            <p style={{ color: "var(--color-muted)", fontSize: "14px", marginBottom: "20px" }}>Buche jetzt dein kostenloses Erstgespräch.</p>
            <Link href="/contact" className="btn btn-primary">Erstgespräch buchen →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
