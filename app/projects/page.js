"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  const projects = [
    {
      name: "Phaser-spel",
      description: "Ett spel byggt med Phaser.js.",
      github: "https://github.com/reitah772/phaser-spel",
    },
    {
      name: "Bird-Clone",
      description: "Ett Flappy Bird-klonspel.",
      github: "https://github.com/reitah772/Bird-Clone",
    },
    {
      name: "FLAPY_BIRD",
      description: "Mitt eget Flappy Bird-projekt.",
      github: "https://github.com/reitah772/FLAPY_BIRD",
    },
    {
      name: "my-navbar-project",
      description: "Ett projekt som visar en navigationsbar.",
      github: "https://github.com/reitah772/my-navbar-project",
    },
    {
      name: "my-next-app",
      description: "En Next.js-app jag byggt.",
      github: "https://github.com/reitah772/my-next-app",
    },
    {
      name: "better-auth-demo",
      description: "Ett demo-projekt med autentisering.",
      github: "https://github.com/reitah772/better-auth-demo",
    },
  ];

  return (
    <div
      style={{
        background: "radial-gradient(circle at top, #101720, #0b0f17)",
        minHeight: "100vh",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* Tillbaka-knapp */}
      <button
        onClick={() => router.back()}
        style={{
          alignSelf: "flex-start",
          marginBottom: "2rem",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ← Tillbaka
      </button>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ color: "#60a5fa", marginBottom: "2rem", fontSize: "2.5rem" }}
      >
        Mina projekt
      </motion.h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              background: "rgba(30,41,59,0.8)",
              padding: "1.5rem",
              borderRadius: "1rem",
              boxShadow: "0 0 20px rgba(59,130,246,0.3)",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#93c5fd", fontSize: "1.4rem" }}>
              {project.name}
            </h2>
            <p style={{ color: "#cbd5e1", marginTop: "0.5rem" }}>
              {project.description}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <button
                style={{
                  marginTop: "1rem",
                  padding: "0.7rem 1.5rem",
                  borderRadius: "0.5rem",
                  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s ease",
                }}
              >
                <FaGithub size={18} />
                Se på GitHub
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
