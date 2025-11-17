"use client";
import Link from "next/link";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        gap: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#60a5fa", marginBottom: "2rem" }}>
        Om mig
      </h1>

      {/* Bild + text bredvid varandra */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "2rem",
          maxWidth: "1100px",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {/* Bilden */}
        <img
          src="/IMG_6225.jpeg"
          alt="Rei"
          style={{
            width: "400px",
            height: "600px",
            objectFit: "cover",
            borderRadius: "15px",
            border: "4px solid #60a5fa",
            boxShadow: "0 0 35px rgba(59,130,246,0.5)",
          }}
        />

        {/* Texten */}
        <div style={{ color: "#cbd5e1", flex: 1 }}>
          <p style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
            Jag heter <span style={{ color: "#60a5fa", fontWeight: "bold" }}>Rei</span> och
            studerar programutveckling på Optima i Jakobstad.
          </p>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            Jag brinner för att skapa moderna, snygga och responsiva webbplatser som känns levande och intuitiva.
          </p>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            Mitt mål är att ständigt utvecklas som webbutvecklare och skapa projekt som inspirerar andra.
          </p>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            Jag gillar att lära mig nya teknologier och experimentera med olika ramverk som{" "}
            <span style={{ color: "#60a5fa" }}>React</span>,{" "}
            <span style={{ color: "#60a5fa" }}>Node.js</span> och{" "}
            <span style={{ color: "#60a5fa" }}>Express</span>.
            Jag tycker om att bygga projekt från grunden och se hur små idéer växer till något stort och användbart.
          </p>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            När jag inte programmerar tycker jag om att lyssna på musik, spela spel och umgås med vänner.
            Jag gillar också att utmana mig själv genom att lösa problem och hitta kreativa lösningar.
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            Framtiden ser jag som full av möjligheter inom teknikvärlden.
            Jag vill fortsätta utvecklas, samarbeta i team och kanske en dag skapa min egen applikation eller spel
            som hjälper andra människor i vardagen.
          </p>
        </div>
      </div>

      {/* Tillbaka-knappen */}
      <Link href="/">
        <button
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: "0.75rem",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Tillbaka
        </button>
      </Link>
    </div>
  );
}
