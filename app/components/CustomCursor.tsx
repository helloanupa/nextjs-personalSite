"use client";

import { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(any-pointer: fine)").matches;
    const hasHoverCapability = window.matchMedia("(any-hover: hover)").matches;
    const isTouchOnlyDevice = navigator.maxTouchPoints > 0 && !supportsFinePointer;

    if ((!supportsFinePointer && !hasHoverCapability) || isTouchOnlyDevice) {
      return;
    }

    const cursorElement = cursorRef.current;
    if (!cursorElement) {
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    let rafId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;

    const updateCursorPosition = () => {
      cursorElement.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      cursorElement.style.opacity = "1";
      rafId = null;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateCursorPosition);
      }
    };

    const handleMouseDown = () => {
      cursorElement.classList.add("is-down");
    };

    const handleMouseUp = () => {
      cursorElement.classList.remove("is-down");
    };

    const handleMouseLeave = () => {
      cursorElement.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      cursorElement.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.body.classList.remove("custom-cursor-enabled");

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return <div ref={cursorRef} className="mini-cursor" aria-hidden="true" />;
};

export default CustomCursor;
