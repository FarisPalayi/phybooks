"use client";
import Image from "next/image";
import ActionButton from "../shared/ActionButton";
import styles from "../../styles/components/BookCard.module.scss";

export default function DarkCard({ text }) {
  return (
    <a
      href="#"
      className="dark-card"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "500px",
        minHeight: "190px",
        borderRadius: "12px",
        padding: "24px",
        color: "var(--foreground)",
        boxShadow:
          "0 1px 0 1px rgba(0,0,0,.02),0 4px 6px rgba(0,0,0,.02),inset 0 0 0 6px var(--accents-1)",
        transition: "background .15s ease",
        background: "linear-gradient(180deg,#242424,#121212 65.62%)",
        textAlign: "center",
      }}
    >
      <span style={{ display: "block", marginBottom: "15px" }}>{text}</span>
      <Image
        src="/images/book-cover.png"
        alt=""
        width={126}
        height={165}
        priority
        style={{ margin: "2rem auto" }}
      />
      <div style={{ color: "var(--accents-5)" }}>
        <ul>
          <li>Author: Pro. Inasu CA</li>
          <li>August 19, 2012</li>
        </ul>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            margin: "1rem",
          }}
          className="dark-action-btn"
        >
          <ActionButton text="Download" variant="download" />
          <ActionButton text="Read Online" variant="read" />
        </div>
      </div>
    </a>
  );
}
