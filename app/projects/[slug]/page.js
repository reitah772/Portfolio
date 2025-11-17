"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProjectPage() {
  const { slug } = useParams();

  const projectInfo = {
    "reaction-game": {
      title: "Reaction Game",
      description:
        "Ett snabbt reaktionsspel byggt i JavaScript där du ska trycka så fort lampan blir grön. Spelet mäter din reaktionstid och visar resultatet på skärmen.",
      images: [
        { src: "/Screenshot 2025-11-11 114930.png", caption: "Startmeny" },
        { src: "/Screenshot 2025-11-11 114945.png", caption: "Gameplay" },
        { src: "/Screenshot 2025-11-11 114955.png", caption: "Resultat" },
        { src: "/Screenshot 2025-11-11 115004.png", caption: "Leaderboard" },
      ],
    },
  };

  const project = projectInfo[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl text-blue-400">Projektet hittades inte 🧐</h1>
        <Link href="/projects" className="mt-6 bg-blue-600 px-6 py-3 rounded-lg">
          Tillbaka
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-3xl text-blue-400 mb-6">{project.title}</h1>

      {/* Grid med små bilder */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {project.images.map((img, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={img.src}
              alt={`${project.title} bild ${i + 1}`}
              className="w-[120px] h-[80px] object-cover rounded shadow-md border-2 border-blue-500 transition-transform duration-300 hover:scale-105"
            />
            <span className="mt-1 text-gray-300 text-xs">{img.caption}</span>
          </div>
        ))}
      </div>

      <p className="max-w-xl text-center text-gray-300 text-sm mb-8">
        {project.description}
      </p>

      {/* Ny snygg knapp med animation */}
      <Link
        href="/projects"
        className="glow-btn text-blue-800 font-semibold px-5 py-2 rounded-xl transition-all duration-300 shadow-md"
      >
        ← Tillbaka till projekten
      </Link>

      {/* Inbyggd CSS för animation */}
      <style jsx>{`
        .glow-btn {
          background-color: #bfdbfe; /* ljusblå */
          border: 1px solid #93c5fd;
          position: relative;
          overflow: hidden;
        }

        .glow-btn:hover {
          background-color: white;
          color: #2563eb;
          box-shadow: 0 0 20px rgba(147, 197, 253, 0.8);
          animation: pulseGlow 1.5s infinite;
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 10px rgba(147, 197, 253, 0.6);
          }
          50% {
            box-shadow: 0 0 25px rgba(147, 197, 253, 1);
          }
          100% {
            box-shadow: 0 0 10px rgba(147, 197, 253, 0.6);
          }
        }
      `}</style>
    </div>
  );
}
