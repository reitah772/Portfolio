"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f172a",
        padding: "2rem",
      }}
    >
      {/* Rubrik */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ color: "#60a5fa", fontSize: "2.5rem", marginBottom: "1rem" }}
      >
        Kontakt
      </motion.h1>

      {/* Kort beskrivning */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontSize: "1.2rem",
          color: "#cbd5e1",
          maxWidth: "500px",
          lineHeight: "1.6",
        }}
      >
        Har du frågor, vill samarbeta eller bara säga hej?  
        Tveka inte att höra av dig — jag svarar gärna!
      </motion.p>

      {/* Kontaktinformation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ marginTop: "2rem", lineHeight: "2" }}
      >
        <p style={{ fontSize: "1.1rem" }}>
          📧 <strong>E-post:</strong>{" "}
          <a
            href="mailto:rei.taho@example.com"
            style={{ color: "#60a5fa", textDecoration: "none" }}
          >
            rei.taho@example.com
          </a>
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          📞 <strong>Telefon:</strong>{" "}
          <a
            href="tel:+358401234567"
            style={{ color: "#60a5fa", textDecoration: "none" }}
          >
            +358 40 123 4567
          </a>
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          📍 <strong>Plats:</strong> Jakobstad, Finland
        </p>
      </motion.div>

      {/* Tillbaka-knapp */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{ marginTop: "3rem" }}
      >
        <Link href="/">
          <button
            style={{
              padding: "1rem 2rem",
              borderRadius: "0.75rem",
              fontSize: "1rem",
              cursor: "pointer",
              color: "white",
              background: "linear-gradient(135deg, #2563eb, #3b82f6)",
              border: "none",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 0 15px rgba(59,130,246,0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            Tillbaka till startsidan
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
