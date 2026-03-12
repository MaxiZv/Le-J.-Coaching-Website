"use client";

import { ScrollReveal } from "./Animations";

const testimonials = [
  // Row 1
  [
    { name: "Thomas K.", age: 34, text: "Ich hätte nie gedacht, dass 3x pro Woche reicht. Jannik hat mir gezeigt, dass Qualität über Quantität geht. Meine Transformation in 16 Wochen war unglaublich." },
    { name: "Michael S.", age: 42, text: "Als CEO habe ich null Zeit. Die 124 Method passt perfekt in meinen Kalender. Absolut professionell und die Ergebnisse sprechen für sich." },
    { name: "Daniel R.", age: 29, text: "Mein Sixpack ist endlich da. Nach 12 Wochen. Weniger Training, mehr System. Jannik weiß genau was er tut." },
    { name: "Stefan M.", age: 38, text: "20 kg Deadlift PR und besserer Schlaf. Die Kombination aus Training und Ernährung hat mein Leben komplett verändert." },
    { name: "Andreas W.", age: 45, text: "Vom Couch-Potato zur Morning-Gym-Routine. Jannik hat mich motiviert und mich accountable gehalten. Beste Investition." },
  ],
  // Row 2
  [
    { name: "Lukas H.", age: 31, text: "15 kg Bench Press Steigerung und mehr Energie im Alltag. Hätte nie gedacht, dass so wenig Training so viel bringt." },
    { name: "Markus B.", age: 36, text: "Die wöchentlichen Check-ins haben den Unterschied gemacht. Jannik passt alles an und motiviert dich, auch wenn du mal keine Lust hast." },
    { name: "Felix T.", age: 27, text: "Endlich ein Coach der versteht, dass nicht jeder 6x die Woche trainieren kann. Die 124 Method ist genial in ihrer Einfachheit." },
    { name: "Jan P.", age: 40, text: "Meine Frau hat mich gefragt ob ich Steroide nehme. Nein – nur die 124 Method und konsequente Ernährung. Danke Jannik!" },
    { name: "Christian D.", age: 33, text: "In 3 Monaten mehr erreicht als in 3 Jahren alleine im Gym. Die Investition hat sich 10x zurückgezahlt." },
  ],
];

function MarqueeRow({ items, direction = "left", speed = 40 }: { items: typeof testimonials[0]; direction?: "left" | "right"; speed?: number }) {
  const duration = items.length * speed;

  return (
    <div style={{
      overflow: "hidden",
      width: "100%",
      maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
    }}>
      <div
        style={{
          display: "flex",
          gap: "16px",
          width: "max-content",
          animation: `marquee-${direction} ${duration}s linear infinite`,
          ["--marquee-shift" as any]: `calc(-340px * ${items.length} - 16px * ${items.length})`,
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items, ...items].map((t, i) => (
          <div
            key={i}
            className="card"
            style={{
              width: "340px",
              flexShrink: 0,
              padding: "24px",
            }}
          >
            <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
              {[1,2,3,4,5].map(j => <span key={j} style={{ color: "var(--color-muted-dark)", fontSize: "14px" }}>★</span>)}
            </div>
            <p style={{ color: "var(--color-muted)", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px", fontStyle: "italic" }}>
              &quot;{t.text}&quot;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: "var(--color-surface-2)", border: "1px solid var(--color-border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-display)",
                color: "var(--color-muted-dark)",
              }}>
                {t.name.charAt(0)}
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: "13px" }}>{t.name}</p>
                <p style={{ fontSize: "11px", color: "var(--color-muted-dark)" }}>{t.age} Jahre</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialMarquee() {
  return (
    <section id="testimonials" style={{ padding: "var(--section-padding) 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-label">Testimonials</span>
            <h2>WAS CLIENTS SAGEN</h2>
            <p style={{ color: "var(--color-muted)", fontSize: "15px", marginTop: "16px" }}>50+ zufriedene Clients</p>
          </div>
        </ScrollReveal>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <MarqueeRow items={testimonials[0]} direction="left" speed={35} />
        <MarqueeRow items={testimonials[1]} direction="right" speed={40} />
      </div>
    </section>
  );
}
