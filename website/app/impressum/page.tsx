export default function ImpressumPage() {
  return (
    <section style={{ paddingTop: "140px", padding: "140px 24px var(--section-padding)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "40px" }}>IMPRESSUM</h1>
        <div style={{ color: "var(--color-muted)", fontSize: "15px", lineHeight: 1.8 }}>
          <h2 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", marginTop: "32px", textTransform: "none" }}>Angaben gemäß § 5 TMG</h2>
          <p>Jannik Hof<br />Le. J Coaching<br />[Adresse wird ergänzt]<br />[PLZ Ort]</p>

          <h2 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", marginTop: "32px", textTransform: "none" }}>Kontakt</h2>
          <p>E-Mail: info@lejcoaching.de<br />Instagram: @jannikhof</p>

          <h2 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", marginTop: "32px", textTransform: "none" }}>Umsatzsteuer-ID</h2>
          <p>[Wird ergänzt]</p>

          <h2 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", marginTop: "32px", textTransform: "none" }}>Haftungsausschluss</h2>
          <p>Die Inhalte dieser Seite wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.</p>
        </div>
      </div>
    </section>
  );
}
