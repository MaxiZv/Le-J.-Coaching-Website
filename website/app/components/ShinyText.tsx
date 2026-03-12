"use client";

import { useRef, useEffect, useState } from "react";

export default function ShinyText({
  text,
  speed = 3,
  color = "#b5b5b5",
  shineColor = "#ffffff",
  spread = 120,
  className = "",
  style = {},
}: {
  text: string;
  speed?: number;
  color?: string;
  shineColor?: string;
  spread?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={className}
      style={{
        color,
        backgroundImage: `linear-gradient(90deg, ${color} 0%, ${shineColor} 50%, ${color} 100%)`,
        backgroundSize: `${spread}% 100%`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: `shinySlide ${speed}s linear infinite`,
        display: "inline-block",
        ["--shiny-spread" as any]: `${spread}%`,
        ...style,
      }}
    >
      {text}
    </span>
  );
}
