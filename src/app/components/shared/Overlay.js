"use client";

import { useEffect } from "react";

export default function Overlay({ isOpen, onClick }) {
  useEffect(() => {
    isOpen && typeof window !== "undefined"
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isOpen]);

  return (
    <div
      className={isOpen ? "overlay" : ""}
      onClick={onClick}
      style={{
        display: isOpen ? "block" : "none",
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        overflowY: "hidden",
        zIndex: 1,
      }}
    ></div>
  );
}
