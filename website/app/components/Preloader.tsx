"use client";

import { useState, useEffect } from "react";
import ShinyText from "./ShinyText";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2000; // 2s preloader

    const step = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => setIsExiting(true), 300);
        setTimeout(() => setIsDone(true), 1200);
      }
    };
    requestAnimationFrame(step);
  }, []);

  if (isDone) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? "scale(1.05)" : "scale(1)",
        pointerEvents: isExiting ? "none" : "auto",
      }}
    >
      {/* Logo */}
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(28px, 5vw, 48px)",
        letterSpacing: "0.1em",
        marginBottom: "40px",
        animation: "fadeInUp 0.6s ease forwards",
      }}>
        <ShinyText
          text="LE. J COACHING"
          speed={2}
          color="#666"
          shineColor="#fff"
          spread={150}
        />
      </div>

      {/* Progress bar */}
      <div style={{
        width: "200px",
        height: "2px",
        background: "var(--color-border)",
        borderRadius: "1px",
        overflow: "hidden",
        marginBottom: "16px",
      }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          background: "#fff",
          transition: "width 0.1s ease",
        }} />
      </div>

      {/* Percentage */}
      <span style={{
        fontFamily: "var(--font-body)",
        fontSize: "12px",
        letterSpacing: "3px",
        color: "var(--color-muted-dark)",
      }}>
        {progress}%
      </span>
    </div>
  );
}
