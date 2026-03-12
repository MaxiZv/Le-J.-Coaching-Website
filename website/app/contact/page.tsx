"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "var(--radius-md)",
    background: "var(--color-bg)",
    border: "1px solid var(--color-border)",
    color: "var(--color-text)",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s",
    fontFamily: "var(--font-body)",
  };

  return (
    <>
      <section style={{ paddingTop: "140px", padding: "140px 24px var(--section-padding)", background: "var(--gradient-dark)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 40%, rgba(0,161,156,0.05) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <span className="section-label">Kontakt</span>
          <h1 style={{ marginBottom: "24px" }}>LET&apos;S <span className="text-gradient">TALK</span></h1>
          <p style={{ color: "var(--color-muted)", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Bereit für deine Transformation? Buche ein kostenloses Erstgespräch oder schreib mir eine Nachricht.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: "var(--section-padding) 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "48px" }} className="grid-2">
          {/* Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Calendly Card */}
            <div className="card" style={{ border: "1px solid var(--color-primary)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,161,156,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", marginBottom: "8px" }}>
                  📅 KOSTENLOSES ERSTGESPRÄCH
                </h3>
                <p style={{ color: "var(--color-muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
                  15 Minuten, die dein Leben verändern können. Buche jetzt einen Termin und wir besprechen deine Ziele.
                </p>
                <a href="https://calendly.com/jannikhof" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: "100%" }}>
                  Termin buchen →
                </a>
              </div>
            </div>

            {/* Contact Info Cards */}
            {[
              { icon: "✉️", label: "E-Mail", value: "info@lejcoaching.de", href: "mailto:info@lejcoaching.de" },
              { icon: "📱", label: "Instagram", value: "@jannikhof", href: "https://www.instagram.com/jannikhof" },
              { icon: "📍", label: "Standort", value: "Online – weltweit", href: null },
            ].map((info, i) => (
              <div key={i} className="card" style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "24px" }}>{info.icon}</span>
                <div>
                  <p style={{ fontSize: "12px", color: "var(--color-primary)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "2px" }}>{info.label}</p>
                  {info.href ? (
                    <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ fontSize: "14px", color: "var(--color-muted)" }}>{info.value}</a>
                  ) : (
                    <p style={{ fontSize: "14px", color: "var(--color-muted)" }}>{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="card">
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", marginBottom: "24px" }}>NACHRICHT SENDEN</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "8px" }}>Name</label>
                <input type="text" required placeholder="Dein Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={inputStyle} onFocus={(e) => e.currentTarget.style.borderColor = "var(--color-primary)"} onBlur={(e) => e.currentTarget.style.borderColor = "var(--color-border)"} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "8px" }}>E-Mail</label>
                <input type="email" required placeholder="deine@email.de" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={inputStyle} onFocus={(e) => e.currentTarget.style.borderColor = "var(--color-primary)"} onBlur={(e) => e.currentTarget.style.borderColor = "var(--color-border)"} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "8px" }}>Telefon (optional)</label>
                <input type="tel" placeholder="+49 123 456789" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={inputStyle} onFocus={(e) => e.currentTarget.style.borderColor = "var(--color-primary)"} onBlur={(e) => e.currentTarget.style.borderColor = "var(--color-border)"} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "8px" }}>Nachricht</label>
                <textarea required rows={4} placeholder="Erzähl mir von deinen Zielen..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ ...inputStyle, resize: "none" }} onFocus={(e) => e.currentTarget.style.borderColor = "var(--color-primary)"} onBlur={(e) => e.currentTarget.style.borderColor = "var(--color-border)"} />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: "100%", opacity: isSubmitting ? 0.6 : 1 }}>
                {isSubmitting ? "Wird gesendet..." : submitted ? "✓ Nachricht gesendet!" : "Nachricht senden →"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
