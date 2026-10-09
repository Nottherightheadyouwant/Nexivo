"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const cursorDot = document.getElementById("custom-cursor-dot");
    const cursorCircle = document.getElementById("custom-cursor-circle");

    if (!cursorDot || !cursorCircle) return;

    const xToDot = gsap.quickTo(cursorDot, "x", { duration: 0.1, ease: "power3.out" });
    const yToDot = gsap.quickTo(cursorDot, "y", { duration: 0.1, ease: "power3.out" });

    const xToCircle = gsap.quickTo(cursorCircle, "x", { duration: 0.3, ease: "power3.out" });
    const yToCircle = gsap.quickTo(cursorCircle, "y", { duration: 0.3, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToCircle(e.clientX);
      yToCircle(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Add listeners for hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("[data-cursor]");
      
      if (interactiveEl) {
        const text = interactiveEl.getAttribute("data-cursor") || "VIEW";
        setCursorText(text);
        setIsHovered(true);
      } else if (target.closest("a, button, input, [role='button']")) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Tiny inner dot */}
      <div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 bg-brand-teal rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      {/* Outer expanding follower circle */}
      <div
        id="custom-cursor-circle"
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-teal/50 transition-all duration-200 ease-out flex items-center justify-center text-[10px] font-mono font-bold tracking-widest text-black bg-brand-teal ${
          isHovered
            ? cursorText
              ? "w-16 h-16 opacity-95 scale-100"
              : "w-10 h-10 opacity-40 bg-transparent border-brand-teal scale-125"
            : "w-8 h-8 opacity-20 bg-transparent border-white scale-100"
        }`}
      >
        {cursorText && <span className="animate-fade-in uppercase">{cursorText}</span>}
      </div>
    </>
  );
}
