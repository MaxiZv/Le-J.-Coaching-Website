"use client";

import { useState, useCallback } from "react";
import ShinyText from "./ShinyText";

const menuItems = [
  { label: "Hero", id: "hero", num: "01" },
  { label: "About", id: "about", num: "02" },
  { label: "Method", id: "method", num: "03" },
  { label: "Programme", id: "programs", num: "04" },
  { label: "Ergebnisse", id: "results", num: "05" },
  { label: "Testimonials", id: "testimonials", num: "06" },
  { label: "Pricing", id: "pricing", num: "07" },
  { label: "Kontakt", id: "contact", num: "08" },
];

const socialItems = [
  { label: "Instagram", href: "https://www.instagram.com/jannikhof" },
  { label: "Calendly", href: "https://calendly.com/straightupjacked/new-meeting" },
  { label: "Tally", href: "https://tally.so/r/VLE6kJ" },
];

export default function StaggeredNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = useCallback((id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, []);

  return (
    <>
      {/* Fixed top bar */}
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px",
        transition: "all 0.3s",
      }}>
        {/* Logo */}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(16px, 2.5vw, 22px)",
            letterSpacing: "0.08em",
            cursor: "pointer",
            zIndex: 1002,
            position: "relative",
          }}
          onClick={() => scrollTo("hero")}
        >
          <ShinyText
            text="LE. J COACHING"
            speed={3}
            color={isOpen ? "#000" : "#999"}
            shineColor={isOpen ? "#333" : "#fff"}
            spread={150}
          />
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          style={{
            zIndex: 1002,
            width: "48px",
            height: "48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: isOpen ? "0px" : "6px",
            transition: "all 0.3s",
            position: "relative",
          }}
        >
          <span style={{
            display: "block",
            width: "24px",
            height: "2px",
            background: isOpen ? "#000" : "#fff",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: isOpen ? "rotate(45deg) translateY(0px)" : "none",
            transformOrigin: "center",
          }} />
          <span style={{
            display: "block",
            width: "24px",
            height: "2px",
            background: isOpen ? "#000" : "#fff",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            opacity: isOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block",
            width: "24px",
            height: "2px",
            background: isOpen ? "#000" : "#fff",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: isOpen ? "rotate(-45deg) translateY(0px)" : "none",
            transformOrigin: "center",
          }} />
        </button>
      </header>

      {/* Fullscreen menu overlay */}
      <div style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: isOpen ? "50%" : "0%",
        height: "100vh",
        background: "#fff",
        zIndex: 1001,
        transition: "width 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: isOpen ? "80px 60px" : "80px 0",
      }}>
        {/* Menu items */}
        <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {menuItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "12px",
                padding: "12px 0",
                borderBottom: "1px solid #eee",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(40px)",
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? i * 0.05 + 0.2 : 0}s`,
                cursor: "pointer",
                textAlign: "left",
              }}
              onMouseEnter={(e) => {
                const label = e.currentTarget.querySelector(".menu-label") as HTMLElement;
                if (label) label.style.color = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                const label = e.currentTarget.querySelector(".menu-label") as HTMLElement;
                if (label) label.style.color = "#000";
              }}
            >
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "var(--color-primary)",
                fontWeight: 600,
              }}>
                {item.num}
              </span>
              <span className="menu-label" style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#000",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                lineHeight: 1.2,
                transition: "color 0.3s",
              }}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Social links bottom */}
        <div style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
        }}>
          <p style={{ fontSize: "11px", color: "var(--color-primary)", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Socials</p>
          <div style={{ display: "flex", gap: "20px" }}>
            {socialItems.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "14px",
                  color: "#000",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#000"}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 1000,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.4s",
        }}
      />
    </>
  );
}
