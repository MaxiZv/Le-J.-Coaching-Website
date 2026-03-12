export default function DatenschutzPage() {
  return (
    <section style={{ paddingTop: "140px", padding: "140px 24px var(--section-padding)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "40px" }}>DATENSCHUTZ</h1>
        <div style={{ color: "var(--color-muted)", fontSize: "15px", lineHeight: 1.8 }}>
          <h2 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", marginTop: "32px", textTransform: "none" }}>1. Datenschutz auf einen Blick</h2>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>

          <h2 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", marginTop: "32px", textTransform: "none" }}>2. Hosting</h2>
          <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Details zum Hoster werden nach dem Go-Live ergänzt.</p>

          <h2 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", marginTop: "32px", textTransform: "none" }}>3. Kontaktformular</h2>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert.</p>

          <h2 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", marginTop: "32px", textTransform: "none" }}>4. Zahlungsanbieter</h2>
          <p>Wir nutzen Stripe für die Abwicklung von Zahlungen. Stripe ist ein Dienst der Stripe, Inc. Die Datenschutzerklärung von Stripe finden Sie unter: https://stripe.com/de/privacy</p>

          <h2 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px", marginTop: "32px", textTransform: "none" }}>5. Ihre Rechte</h2>
          <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.</p>
        </div>
      </div>
    </section>
  );
}
