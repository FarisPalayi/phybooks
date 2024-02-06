"use client"
export default function Overlay({ isSidebarOpen, onClick }) {
  isSidebarOpen && typeof window !== "undefined"
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "auto");

  return (
    <div
      className={isSidebarOpen ? "overlay" : ""}
      onClick={onClick}
      style={{
        display: isSidebarOpen ? "block" : "none",
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        overflowY: "hidden",
        zIndex: -1,
      }}
    ></div>
  );
}
