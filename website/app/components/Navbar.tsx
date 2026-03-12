"use client";

import { useState, useEffect, useRef } from "react";

const sections = [
  { id: "hero", label: "Start" },
  { id: "about", label: "Über mich" },
  { id: "method", label: "Methode" },
  { id: "results", label: "Ergebnisse" },
  { id: "pricing", label: "Preise" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 80);

          // Determine active section
          const sectionEls = sections.map(s => document.getElementById(s.id)).filter(Boolean);
          for (let i = sectionEls.length - 1; i >= 0; i--) {
            const el = sectionEls[i];
            if (el && el.getBoundingClientRect().top <= 200) {
              setActiveSection(sections[i].id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: scrolled ? "12px" : "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: scrolled ? "min(85%, 900px)" : "min(94%, 1200px)",
          zIndex: 1000,
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <nav
          ref={navRef}
          style={{
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "14px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Top bar */}
          <div
            style={{
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 8px 0 18px",
            }}
          >
            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                padding: "8px",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
              }}
            >
              <span style={{
                width: "26px", height: "2px", background: "#fff",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: isOpen ? "translateY(8px) rotate(45deg)" : "none",
              }} />
              <span style={{
                width: "26px", height: "2px", background: "#fff",
                transition: "all 0.3s",
                opacity: isOpen ? 0 : 1, transform: isOpen ? "scaleX(0)" : "scaleX(1)",
              }} />
              <span style={{
                width: "26px", height: "2px", background: "#fff",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: isOpen ? "translateY(-8px) rotate(-45deg)" : "none",
              }} />
            </button>

            {/* Logo */}
            <button
              onClick={() => scrollTo("hero")}
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "var(--font-display)",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              LE. J <span style={{ transition: "color 0.3s" }}>COACHING</span>
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "8px",
                background: "#fff",
                color: "#000",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                transition: "all 0.3s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-primary)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,161,156,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span className="nav-cta-full">Jetzt Starten</span>
              <span className="nav-cta-short">Start</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Expandable content - Cards inspired by Axionea */}
          <div
            ref={contentRef}
            style={{
              maxHeight: isOpen ? "400px" : "0",
              opacity: isOpen ? 1 : 0,
              overflow: "hidden",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              padding: isOpen ? "0 8px 8px" : "0 8px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "8px",
              }}
            >
              {/* Navigation Card */}
              <div style={{
                background: "rgba(255, 255, 255, 0.04)",
                borderRadius: "10px",
                padding: "16px",
              }}>
                <div style={{ fontWeight: 600, marginBottom: "12px", fontFamily: "var(--font-display)", letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "12px" }}>
                  Navigation
                </div>
                {sections.filter(s => s.id !== "hero").map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      width: "100%",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: activeSection === s.id ? "var(--color-primary)" : "var(--color-muted)",
                      transition: "color 0.3s",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={(e) => e.currentTarget.style.color = activeSection === s.id ? "var(--color-primary)" : "var(--color-muted)"}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Coaching Card */}
              <div style={{
                background: "rgba(0, 161, 156, 0.08)",
                borderRadius: "10px",
                padding: "16px",
              }}>
                <div style={{ fontSize: "12px", fontWeight: 600, marginBottom: "12px", fontFamily: "var(--font-display)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Coaching
                </div>
                <a href="https://calendly.com/straightupjacked/new-meeting" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 0", fontSize: "14px", color: "var(--color-muted)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted)"}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Erstgespräch buchen
                </a>
                <a href="https://tally.so/r/VLE6kJ" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 0", fontSize: "14px", color: "var(--color-muted)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted)"}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Fragebogen ausfüllen
                </a>
                <a href="https://www.instagram.com/jannikhof" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 0", fontSize: "14px", color: "var(--color-muted)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted)"}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Instagram
                </a>
              </div>

              {/* Legal Card */}
              <div style={{
                background: "rgba(255, 255, 255, 0.04)",
                borderRadius: "10px",
                padding: "16px",
              }}>
                <div style={{ fontSize: "12px", fontWeight: 600, marginBottom: "12px", fontFamily: "var(--font-display)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Support
                </div>
                <button onClick={() => scrollTo("contact")} style={{ display: "flex", alignItems: "center", gap: "6px", width: "100%", padding: "6px 0", fontSize: "14px", color: "var(--color-muted)", transition: "color 0.3s", textAlign: "left" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted)"}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Kontakt
                </button>
                <a href="/impressum" style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 0", fontSize: "14px", color: "var(--color-muted)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted)"}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Impressum
                </a>
                <a href="/datenschutz" style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 0", fontSize: "14px", color: "var(--color-muted)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-muted)"}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  Datenschutz
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <style jsx global>{`
        .nav-cta-short { display: none; }
        @media (max-width: 480px) {
          .nav-cta-full { display: none; }
          .nav-cta-short { display: inline; }
        }
      `}</style>
    </>
  );
}
