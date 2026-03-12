"use client";

import { useState } from "react";
import MouseHero from "@/app/components/MouseHero";
import LightRays from "@/app/components/LightRays";
import ShinyText from "@/app/components/ShinyText";
import { CountUp, ScrollReveal, StaggerChildren } from "@/app/components/Animations";
import ProgramSlider from "@/app/components/ProgramSlider";
import TestimonialMarquee from "@/app/components/TestimonialMarquee";

export default function Home() {
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
    width: "100%", padding: "14px 18px", borderRadius: "8px",
    background: "var(--color-surface-2)", border: "1px solid var(--color-border)",
    color: "var(--color-text)", fontSize: "14px", outline: "none",
    transition: "border-color 0.3s", fontFamily: "var(--font-body)",
  };

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#000" }}>
        <MouseHero />
        <LightRays
          raysOrigin="top-center"
          raysColor="#e9f1ee"
          raysSpeed={0.2}
          lightSpread={0.2}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />



        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "900px", padding: "0 24px" }}>
          <div className="section-label" style={{ margin: "0 auto 24px", animation: "fadeInUp 0.8s ease forwards" }}>
            Online Fitness Coaching
          </div>

          <h1 style={{ fontSize: "clamp(50px, 10vw, 120px)", lineHeight: 1, marginBottom: "24px", animation: "fadeInUp 0.8s ease 0.2s forwards", opacity: 0 }}>
            <ShinyText text="FROM INCONSISTENT" speed={3} />
            <br />
            <ShinyText text="TO JACKED." speed={3.5} />
          </h1>

          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "var(--color-muted)", maxWidth: "560px", margin: "0 auto 40px", lineHeight: 1.7, animation: "fadeInUp 0.8s ease 0.4s forwards", opacity: 0 }}>
            In 16 Wochen mit der <strong style={{ color: "#fff" }}>124 Method</strong>. Für vielbeschäftigte Männer, die Ergebnisse wollen – nicht Ausreden.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", animation: "fadeInUp 0.8s ease 0.6s forwards", opacity: 0 }}>
            <a href="https://calendly.com/straightupjacked/new-meeting" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Kostenloses Erstgespräch →
            </a>
            <a href="#method" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById("method")?.scrollIntoView({ behavior: "smooth" }); }}>
              Methode entdecken
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", animation: "fadeIn 1s ease 1.2s forwards, float 2s ease-in-out infinite 1.2s", opacity: 0 }}>
          <span style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--color-muted-dark)" }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--color-muted-dark), transparent)" }} />
        </div>
      </section>

      {/* ═══════════════════ STATS (CountUp) ═══════════════════ */}
      <div className="section-divider" />
      <section style={{ padding: "56px 24px", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "32px", textAlign: "center" }}>
          {[
            { end: 50, suffix: "+", label: "Clients" },
            { end: 3, suffix: "x", label: "Pro Woche" },
            { end: 16, suffix: "", label: "Wochen" },
            { end: 100, suffix: "%", label: "Individuell" },
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#fff", letterSpacing: "0.02em" }}>
                <CountUp end={stat.end} suffix={stat.suffix} duration={2000} />
              </div>
              <div style={{ fontSize: "11px", color: "var(--color-muted-dark)", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>{stat.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <div className="section-divider" />

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <section id="about" className="section" style={{ padding: "var(--section-padding) 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="grid-2" style={{ alignItems: "center" }}>
            <ScrollReveal direction="left">
              <span className="section-label">Über Jannik</span>
              <h2 style={{ marginBottom: "24px" }}>DEIN COACH.<br />DEIN ERGEBNIS.</h2>
              <p style={{ color: "var(--color-muted)", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
                Jannik Hof ist CSCS-zertifizierter Online Fitness Coach und hat es sich zur Aufgabe gemacht, vielbeschäftigten Männern zu helfen, trotz vollem Terminkalender ihren Traumkörper aufzubauen.
              </p>
              <p style={{ color: "var(--color-muted)", fontSize: "15px", lineHeight: 1.8, marginBottom: "32px" }}>
                Mit der selbst entwickelten 124 Method brauchst du nur 3 Trainingseinheiten pro Woche – effizient, nachhaltig und wissenschaftlich fundiert.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                {["CSCS Zertifiziert", "50+ Clients", "Science-Based"].map((badge, i) => (
                  <span key={i} style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--color-muted-dark)", padding: "6px 12px", border: "1px solid var(--color-border)", borderRadius: "999px", transition: "all 0.3s" }}>{badge}</span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div style={{ aspectRatio: "4/5", borderRadius: "16px", overflow: "hidden", background: "var(--color-surface)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-muted-dark)", fontSize: "13px" }}>
                [Foto von Jannik]
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ METHOD ═══════════════════ */}
      <div className="section-divider" />
      <section id="method" className="section" style={{ padding: "var(--section-padding) 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="section-label">Die Methode</span>
              <h2>THE 1-2-4 METHOD</h2>
              <p style={{ color: "var(--color-muted)", fontSize: "15px", maxWidth: "560px", margin: "16px auto 0", lineHeight: 1.7 }}>
                Nur 3 Sessions pro Woche. Fokus auf Compound-Übungen. Progressive Overload. Keine Ausreden.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren staggerDelay={0.2} className="grid-3">
            {[
              { step: "01", title: "3 TRAININGSTAGE", desc: "Push, Pull, Legs – oder Upper/Lower Split. Flexibel, passt in jeden Kalender. Jede Session 45-60 Min." },
              { step: "02", title: "2 COMPOUNDS", desc: "Pro Session 2 schwere Compound-Übungen für maximale Muskeldichte und Wachstumshormon." },
              { step: "03", title: "4 ACCESSORIES", desc: "4 gezielte Isolationsübungen für Definition, Symmetrie und progressive Overload." },
            ].map((item, i) => (
              <div key={i} className="card">
                <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "36px", color: "var(--color-muted-dark)", opacity: 0.3, marginBottom: "16px" }}>{item.step}</div>
                <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "16px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ color: "var(--color-muted)", fontSize: "14px", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </StaggerChildren>

          <ScrollReveal delay={0.4}>
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <a href="https://calendly.com/straightupjacked/new-meeting" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Methode testen – Erstgespräch →</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ PROGRAMS SLIDER ═══════════════════ */}
      <div className="section-divider" />
      <ProgramSlider />

      {/* ═══════════════════ RESULTS ═══════════════════ */}
      <div className="section-divider" />
      <section id="results" className="section" style={{ padding: "var(--section-padding) 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="section-label">Ergebnisse</span>
              <h2>REAL TRANSFORMATIONS</h2>
              <p style={{ color: "var(--color-muted)", fontSize: "15px", maxWidth: "560px", margin: "16px auto 0", lineHeight: 1.7 }}>
                Echte Ergebnisse von echten Männern. Keine Models, keine Fakes.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren staggerDelay={0.12} className="grid-3">
            {[
              { name: "Thomas K.", age: 34, job: "Unternehmer", weeks: 16, result: "12 kg Muskelmasse aufgebaut, 8% KFA reduziert" },
              { name: "Michael S.", age: 42, job: "CEO", weeks: 16, result: "Stärker als mit 25, trotz 60-Stunden-Woche" },
              { name: "Daniel R.", age: 29, job: "Consultant", weeks: 12, result: "Erste sichtbare Sixpack seit Jahren" },
              { name: "Stefan M.", age: 38, job: "Geschäftsführer", weeks: 16, result: "20 kg Deadlift PR, besserer Schlaf" },
              { name: "Andreas W.", age: 45, job: "Investor", weeks: 16, result: "Vom Couch-Potato zum Morning-Gym-Routine" },
              { name: "Lukas H.", age: 31, job: "Gründer", weeks: 12, result: "15 kg Bench Press Steigerung, mehr Energie" },
            ].map((t, i) => (
              <div key={i} className="card">
                <div style={{ aspectRatio: "3/4", background: "var(--color-surface-2)", borderRadius: "8px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-muted-dark)", fontSize: "12px", border: "1px solid var(--color-border)" }}>
                  [Vorher / Nachher]
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>{t.name}</span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted-dark)" }}>{t.weeks} Wo.</span>
                </div>
                <p style={{ fontSize: "11px", color: "var(--color-muted-dark)", marginBottom: "8px" }}>{t.age} · {t.job}</p>
                <p style={{ fontSize: "13px", color: "var(--color-muted)", lineHeight: 1.6 }}>{t.result}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIAL MARQUEE ═══════════════════ */}
      <div className="section-divider" />
      <TestimonialMarquee />

      {/* ═══════════════════ PRICING ═══════════════════ */}
      <div className="section-divider" />
      <section id="pricing" className="section" style={{ padding: "var(--section-padding) 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="section-label">Preise</span>
              <h2>INVESTIERE IN DICH</h2>
              <p style={{ color: "var(--color-muted)", fontSize: "15px", maxWidth: "500px", margin: "16px auto 0", lineHeight: 1.7 }}>Keine versteckten Kosten, keine Verträge – nur Ergebnisse.</p>
            </div>
          </ScrollReveal>

          <StaggerChildren staggerDelay={0.2} className="grid-3">
            {[
              { name: "STARTER", duration: "4 Wochen", price: "299", perWeek: "75", features: ["Individueller Trainingsplan", "Wöchentlicher Check-in", "Ernährungsleitfaden", "Chat-Support (Mo-Fr)"], highlight: false },
              { name: "TRANSFORMATION", duration: "16 Wochen", price: "999", perWeek: "62", features: ["Die vollständige 124 Method", "Wöchentliche Video-Calls", "Individuelle Ernährungspläne", "Täglicher Chat-Support", "Fortschritts-Tracking", "Client-Portal Zugang"], highlight: true },
              { name: "ELITE", duration: "16 Wochen", price: "1.499", perWeek: "94", features: ["Alles aus Transformation", "2x wöchentliche Calls", "Priority Support", "Supplement-Beratung", "Lifestyle-Optimierung", "Lebenslanger Update-Zugang"], highlight: false },
            ].map((pkg, i) => (
              <div key={i} className="card" style={{ border: pkg.highlight ? "1px solid #fff" : undefined, display: "flex", flexDirection: "column", position: "relative" }}>
                {pkg.highlight && (
                  <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#fff", color: "#000", padding: "4px 16px", borderRadius: "999px", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Beliebteste Wahl</div>
                )}
                <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "18px", letterSpacing: "1px", marginBottom: "4px" }}>{pkg.name}</h3>
                <p style={{ fontSize: "12px", color: "var(--color-muted-dark)", marginBottom: "24px" }}>{pkg.duration}</p>
                <div style={{ marginBottom: "4px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 44px)" }}>{pkg.price}€</span>
                </div>
                <p style={{ fontSize: "12px", color: "var(--color-muted-dark)", marginBottom: "28px" }}>{pkg.perWeek}€ / Woche</p>
                <ul style={{ flex: 1, marginBottom: "28px" }}>
                  {pkg.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--color-muted)", marginBottom: "10px" }}>
                      <span style={{ color: "var(--color-muted-dark)", fontSize: "14px" }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="https://calendly.com/straightupjacked/new-meeting" target="_blank" rel="noopener noreferrer" className={pkg.highlight ? "btn btn-primary" : "btn btn-outline"} style={{ width: "100%", textAlign: "center" }}>Jetzt buchen →</a>
              </div>
            ))}
          </StaggerChildren>

          {/* FAQ */}
          <ScrollReveal delay={0.2}>
            <div style={{ maxWidth: "800px", margin: "64px auto 0" }}>
              <h3 style={{ textAlign: "center", marginBottom: "40px", fontFamily: "var(--font-display)", fontSize: "clamp(20px, 3vw, 28px)" }}>HÄUFIGE FRAGEN</h3>
              {[
                { q: "Brauche ich Gym-Erfahrung?", a: "Nein. Die 124 Method funktioniert für Anfänger und Fortgeschrittene. Jeder Plan wird individuell angepasst." },
                { q: "Was ist im Erstgespräch enthalten?", a: "Ein 15-minütiges Video-Call, in dem wir deine Ziele und die beste Strategie besprechen. Kostenlos und unverbindlich." },
                { q: "Wie läuft die Zahlung?", a: "Einmalige Zahlung über Stripe. Sicher, verschlüsselt und sofortige Freischaltung." },
              ].map((faq, i) => (
                <div key={i} style={{ borderBottom: "1px solid var(--color-border)", padding: "20px 0" }}>
                  <h4 style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 600, marginBottom: "8px", textTransform: "none", letterSpacing: 0 }}>{faq.q}</h4>
                  <p style={{ color: "var(--color-muted)", fontSize: "14px", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ BLOG ═══════════════════ */}
      <div className="section-divider" />
      <section id="blog" className="section" style={{ padding: "var(--section-padding) 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="section-label">Blog</span>
              <h2>INSIGHTS &amp; UPDATES</h2>
            </div>
          </ScrollReveal>

          <StaggerChildren staggerDelay={0.15} className="grid-3">
            {[
              { title: "Wie Thomas in 16 Wochen 12kg Muskelmasse aufgebaut hat", category: "Transformation", date: "12. März 2026" },
              { title: "Die 124 Method erklärt: Warum weniger Training mehr bringt", category: "Methode", date: "10. März 2026" },
              { title: "Meal Prep für busy men: Der 30-Minuten-Guide", category: "Ernährung", date: "8. März 2026" },
            ].map((post, i) => (
              <article key={i} className="card" style={{ cursor: "pointer" }}>
                <div style={{ aspectRatio: "16/9", borderRadius: "8px", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-muted-dark)", fontSize: "12px" }}>[Blog Bild]</div>
                <span style={{ fontSize: "10px", color: "var(--color-muted-dark)", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>{post.category}</span>
                <h4 style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 700, lineHeight: 1.4, marginTop: "8px", marginBottom: "12px", textTransform: "none", letterSpacing: 0 }}>{post.title}</h4>
                <span style={{ fontSize: "11px", color: "var(--color-muted-dark)" }}>{post.date}</span>
              </article>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════ CONTACT ═══════════════════ */}
      <div className="section-divider" />
      <section id="contact" className="section" style={{ padding: "var(--section-padding) 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="section-label">Kontakt</span>
              <h2>LET&apos;S TALK</h2>
            </div>
          </ScrollReveal>

          <div className="grid-2">
            <ScrollReveal direction="left">
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <a href="https://calendly.com/straightupjacked/new-meeting" target="_blank" rel="noopener noreferrer" className="card" style={{ border: "1px solid #fff", textDecoration: "none", display: "block" }}>
                  <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "16px", marginBottom: "8px", letterSpacing: "1px" }}>📅 KOSTENLOSES ERSTGESPRÄCH</h3>
                  <p style={{ color: "var(--color-muted)", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>15 Minuten, die dein Leben verändern können. Buche jetzt deinen Termin.</p>
                  <span className="btn btn-primary" style={{ width: "100%" }}>Termin buchen →</span>
                </a>
                <a href="https://tally.so/r/VLE6kJ" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: "none", display: "block" }}>
                  <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "14px", marginBottom: "8px", letterSpacing: "1px" }}>📝 FRAGEBOGEN</h4>
                  <p style={{ color: "var(--color-muted)", fontSize: "13px", lineHeight: 1.6 }}>Fülle den kurzen Fragebogen aus, damit ich dich besser kennenlernen kann.</p>
                </a>
                {[
                  { icon: "✉️", label: "E-Mail", value: "info@lejcoaching.de", href: "mailto:info@lejcoaching.de" },
                  { icon: "📱", label: "Instagram", value: "@jannikhof", href: "https://www.instagram.com/jannikhof" },
                ].map((info, i) => (
                  <a key={i} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="card" style={{ padding: "16px 24px", display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
                    <span style={{ fontSize: "20px" }}>{info.icon}</span>
                    <div>
                      <p style={{ fontSize: "10px", color: "var(--color-muted-dark)", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "2px" }}>{info.label}</p>
                      <p style={{ fontSize: "14px", color: "var(--color-muted)" }}>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="card">
                <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "16px", marginBottom: "24px", letterSpacing: "1px" }}>NACHRICHT SENDEN</h3>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--color-muted-dark)", marginBottom: "6px" }}>Name</label>
                    <input type="text" required placeholder="Dein Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={inputStyle} onFocus={(e) => e.currentTarget.style.borderColor = "#fff"} onBlur={(e) => e.currentTarget.style.borderColor = "var(--color-border)"} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--color-muted-dark)", marginBottom: "6px" }}>E-Mail</label>
                    <input type="email" required placeholder="deine@email.de" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={inputStyle} onFocus={(e) => e.currentTarget.style.borderColor = "#fff"} onBlur={(e) => e.currentTarget.style.borderColor = "var(--color-border)"} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--color-muted-dark)", marginBottom: "6px" }}>Telefon (optional)</label>
                    <input type="tel" placeholder="+49 123 456789" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={inputStyle} onFocus={(e) => e.currentTarget.style.borderColor = "#fff"} onBlur={(e) => e.currentTarget.style.borderColor = "var(--color-border)"} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--color-muted-dark)", marginBottom: "6px" }}>Nachricht</label>
                    <textarea required rows={4} placeholder="Erzähl mir von deinen Zielen..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ ...inputStyle, resize: "none" }} onFocus={(e) => e.currentTarget.style.borderColor = "#fff"} onBlur={(e) => e.currentTarget.style.borderColor = "var(--color-border)"} />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: "100%", opacity: isSubmitting ? 0.6 : 1 }}>
                    {isSubmitting ? "Wird gesendet..." : submitted ? "✓ Gesendet!" : "Nachricht senden →"}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
