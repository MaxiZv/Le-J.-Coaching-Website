"use client";

import { useRef, useEffect, useCallback } from "react";

export default function MouseHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const raf = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouse.current.targetX = (e.clientX - rect.left) / rect.width;
    mouse.current.targetY = (e.clientY - rect.top) / rect.height;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = 0, h = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    // Orbs configuration
    const orbs = [
      { x: 0.3, y: 0.4, r: 280, color: "0, 161, 156", speed: 0.4, phase: 0 },
      { x: 0.7, y: 0.6, r: 220, color: "0, 161, 156", speed: 0.3, phase: 2 },
      { x: 0.5, y: 0.3, r: 180, color: "128, 20, 43", speed: 0.5, phase: 4 },
      { x: 0.2, y: 0.7, r: 160, color: "255, 255, 255", speed: 0.35, phase: 1 },
      { x: 0.8, y: 0.3, r: 200, color: "255, 255, 255", speed: 0.25, phase: 3 },
    ];

    let time = 0;

    const draw = () => {
      time += 0.004;

      // Smooth mouse lerp
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.03;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.03;

      ctx.clearRect(0, 0, w, h);

      for (const orb of orbs) {
        const mx = (mouse.current.x - 0.5) * 80;
        const my = (mouse.current.y - 0.5) * 80;

        const ox = orb.x * w + Math.sin(time * orb.speed + orb.phase) * 60 + mx * (orb.speed + 0.2);
        const oy = orb.y * h + Math.cos(time * orb.speed * 1.3 + orb.phase) * 40 + my * (orb.speed + 0.2);

        const gradient = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        gradient.addColorStop(0, `rgba(${orb.color}, 0.08)`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, 0.03)`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Mouse glow follower
      const gx = mouse.current.x * w;
      const gy = mouse.current.y * h;
      const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, 150);
      glow.addColorStop(0, "rgba(0, 161, 156, 0.06)");
      glow.addColorStop(1, "rgba(0, 161, 156, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(gx, gy, 150, 0, Math.PI * 2);
      ctx.fill();

      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
