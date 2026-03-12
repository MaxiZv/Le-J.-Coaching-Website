"use client";

import { useEffect, useRef } from "react";

export default function MeshGradientHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function drawOrb(
      ctx: CanvasRenderingContext2D,
      x: number, y: number, radius: number,
      r: number, g: number, b: number, alpha: number
    ) {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${alpha * 0.3})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    }

    function animate() {
      if (!ctx || !canvas) return;
      time += 0.003;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Primary orb (teal) – slow float
      drawOrb(ctx,
        cx + Math.sin(time * 0.7) * 200,
        cy + Math.cos(time * 0.5) * 150,
        Math.min(canvas.width, canvas.height) * 0.4,
        0, 161, 156, 0.04
      );

      // Secondary orb (teal darker) – drift opposite
      drawOrb(ctx,
        cx + Math.cos(time * 0.6) * 300,
        cy + Math.sin(time * 0.8) * 200,
        Math.min(canvas.width, canvas.height) * 0.35,
        0, 100, 96, 0.03
      );

      // Subtle white glow at center
      drawOrb(ctx,
        cx + Math.sin(time * 0.4) * 80,
        cy + Math.cos(time * 0.3) * 60,
        Math.min(canvas.width, canvas.height) * 0.25,
        255, 255, 255, 0.015
      );

      animationId = requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
