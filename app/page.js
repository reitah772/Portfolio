"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "2rem",
        textAlign: "center",
        padding: "2rem",
        background: "radial-gradient(circle at top, #101720, #0b0f17)", // 🔹 tillbaka till din gamla bakgrund
      }}
    >
      {/* Bild */}
      <motion.img
        src="/IMG_6225.jpeg"
        alt="Rei"
        style={{
          width: "400px",
          height: "500px",
          objectFit: "cover",
          borderRadius: "0%",
          border: "4px solid #60a5fa",
          boxShadow: "0 0 35px rgba(59,130,246,0.5)",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Namn */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ color: "#60a5fa", fontSize: "2.5rem", marginTop: "1rem" }}
      >
        Rei Taho
      </motion.h1>

      {/* Roll */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{
          color: "#cbd5e1",
          fontSize: "1.2rem",
          marginTop: "0.5rem",
          maxWidth: "400px",
        }}
      >
        Programmeringsstudent
      </motion.p>

      {/* Knappar */}
      <div
        className="btns"
        style={{
          display: "flex",
          gap: "1.2rem",
          marginTop: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Mina projekt */}
        <Link href="/projects">
          <button
            style={buttonStyle}
            onMouseOver={hoverEffect}
            onMouseOut={resetHover}
          >
            Mina projekt
          </button>
        </Link>

        {/* Om mig */}
        <Link href="/about">
          <button
            style={buttonStyle}
            onMouseOver={hoverEffect}
            onMouseOut={resetHover}
          >
            Om mig
          </button>
        </Link>

        {/* Kontakt */}
        <Link href="/contact">
          <button
            style={buttonStyle}
            onMouseOver={hoverEffect}
            onMouseOut={resetHover}
          >
            Kontakta mig
          </button>
        </Link>
      </div>
    </div>
  );
}

// Samma knappstil för alla
const buttonStyle = {
  padding: "1rem 2rem",
  borderRadius: "0.75rem",
  fontSize: "1rem",
  cursor: "pointer",
  color: "white",
  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
  border: "none",
  transition: "all 0.3s ease",
};

function hoverEffect(e) {
  e.target.style.transform = "scale(1.05)";
  e.target.style.boxShadow = "0 0 15px rgba(59,130,246,0.5)";
}

function resetHover(e) {
  e.target.style.transform = "scale(1)";
  e.target.style.boxShadow = "none";
}
