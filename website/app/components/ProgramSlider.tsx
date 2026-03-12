"use client";

import { useRef, useState } from "react";
import { ScrollReveal } from "./Animations";
import ShinyText from "./ShinyText";

const programs = [
  {
    title: "124 Method",
    category: "Coaching-Programm",
    duration: "16 Wochen",
    desc: "Das Flaggschiff-Programm. 3x Training pro Woche, individuell angepasst, mit wöchentlichen Check-ins.",
    price: "999€",
    features: ["Individueller Trainingsplan", "Ernährungsberatung", "Wöchentliche Video-Calls"],
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Starter Pack",
    category: "Einstieg",
    duration: "4 Wochen",
    desc: "Der perfekte Start für Einsteiger. Lerne die Basics und baue eine solide Grundlage auf.",
    price: "299€",
    features: ["Trainingsplan", "Ernährungsleitfaden", "Chat-Support"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Elite Coaching",
    category: "Premium",
    duration: "16 Wochen",
    desc: "All-Inclusive mit Priority Support, 2x wöchentlichen Calls und lebenslangem Update-Zugang.",
    price: "1.499€",
    features: ["Priority Support", "2x Calls/Woche", "Lifestyle-Optimierung"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Nutrition Guide",
    category: "E-Book",
    duration: "Sofort-Download",
    desc: "Meal Prep Masterclass für vielbeschäftigte Männer. Einfache Rezepte, optimale Makros.",
    price: "49€",
    features: ["50+ Rezepte", "Meal Prep Leitfaden", "Makro-Rechner"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Home Workout",
    category: "E-Book",
    duration: "Sofort-Download",
    desc: "Trainiere effektiv zuhause ohne Equipment. Ideal für Reisen oder Homeoffice-Tage.",
    price: "39€",
    features: ["30 Workouts", "Video-Anleitungen", "4-Wochen-Plan"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Mobility Masterclass",
    category: "E-Book",
    duration: "Sofort-Download",
    desc: "Die besten Routinen für mehr Beweglichkeit und Verletzungsprävention im Alltag.",
    price: "29€",
    features: ["15-Min Routinen", "Office-Stretches", "Warm-Up Guide"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Hyrox Prep",
    category: "Coaching-Programm",
    duration: "12 Wochen",
    desc: "Spezifische Vorbereitung für dein nächstes Hyrox Event. Strength meets Endurance.",
    price: "499€",
    features: ["Lauf- & Kraftpläne", "Pacing Strategien", "Support bis zum Race"],
    image: "https://images.unsplash.com/photo-1526506159800-47672ec112c3?q=80&w=600&auto=format&fit=crop"
  }
];

export default function ProgramSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 360;
    el.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section id="programs" className="section" style={{ padding: "var(--section-padding) 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <span className="section-label">Programme & Guides</span>
              <h2 style={{ marginTop: "8px" }}>
                <ShinyText text="FINDE DEIN PROGRAMM" speed={4} />
              </h2>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() => scroll("left")}
                style={{
                  width: "48px", height: "48px", borderRadius: "50%",
                  border: `1px solid ${canScrollLeft ? "#fff" : "var(--color-border)"}`,
                  color: canScrollLeft ? "#fff" : "var(--color-muted-dark)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s", fontSize: "20px", cursor: canScrollLeft ? "pointer" : "default",
                }}
                onMouseEnter={(e) => canScrollLeft && (e.currentTarget.style.borderColor = "var(--color-primary)", e.currentTarget.style.color = "var(--color-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = canScrollLeft ? "#fff" : "var(--color-border)", e.currentTarget.style.color = canScrollLeft ? "#fff" : "var(--color-muted-dark)")}
              >←</button>
              <button
                onClick={() => scroll("right")}
                style={{
                  width: "48px", height: "48px", borderRadius: "50%",
                  border: `1px solid ${canScrollRight ? "#fff" : "var(--color-border)"}`,
                  color: canScrollRight ? "#fff" : "var(--color-muted-dark)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s", fontSize: "20px", cursor: canScrollRight ? "pointer" : "default",
                }}
                onMouseEnter={(e) => canScrollRight && (e.currentTarget.style.borderColor = "var(--color-primary)", e.currentTarget.style.color = "var(--color-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = canScrollRight ? "#fff" : "var(--color-border)", e.currentTarget.style.color = canScrollRight ? "#fff" : "var(--color-muted-dark)")}
              >→</button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingLeft: "max(24px, calc((100vw - 1200px) / 2 + 24px))",
          paddingRight: "24px",
          paddingBottom: "8px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {programs.map((program, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "340px",
              scrollSnapAlign: "start",
            }}
          >
            {/* Image Box */}
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                borderRadius: "14px 14px 0 0",
                background: "var(--color-surface-2)",
                border: "1px solid var(--color-border)",
                borderBottom: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  background: "rgba(0,0,0,0.6)",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  color: "#fff",
                  backdropFilter: "blur(8px)",
                  zIndex: 2,
                }}
              >
                {program.category}
              </span>
              <img 
                src={program.image} 
                alt={program.title} 
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} 
                loading="lazy" 
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>

            {/* Content Box */}
            <div
              className="card"
              style={{
                borderRadius: "0 0 14px 14px",
                borderTop: "none",
                paddingTop: "24px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", fontSize: "16px", flex: 1 }}>{program.title}</h3>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "#fff", whiteSpace: "nowrap", marginLeft: "12px" }}>{program.price}</span>
              </div>
              <p style={{ fontSize: "11px", color: "var(--color-muted-dark)", marginBottom: "16px" }}>{program.duration}</p>
              <p style={{ fontSize: "13px", color: "var(--color-muted)", lineHeight: 1.6, marginBottom: "20px", minHeight: "60px" }}>{program.desc}</p>
              <ul style={{ marginBottom: "24px", minHeight: "80px" }}>
                {program.features.map((f, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--color-muted)", marginBottom: "8px" }}>
                    <span style={{ color: "var(--color-muted-dark)" }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://calendly.com/straightupjacked/new-meeting" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: "100%", padding: "14px", fontSize: "11px" }}>
                Mehr erfahren →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
