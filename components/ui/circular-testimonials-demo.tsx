import React from "react";
import { CircularTestimonials } from "./circular-testimonials";

const achievements = [
  {
    quote:
      "Selected to collaborate on industry-grade R&D projects with Samsung India under the Samsung PRISM program, focusing on advanced computing and systems research.",
    name: "Samsung PRISM Selected",
    designation: "Selected Researcher @ Samsung India (2026)",
    src:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "Secured 1st Place out of hundreds of competitive project submissions at Ossome Hacks 2.0, demonstrating rapid systems engineering and robust execution under pressure.",
    name: "Ossome Hacks 2.0 Winner",
    designation: "1st Place Winner @ Ossome Hacks (2025)",
    src:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "Awarded 3rd Prize at the university-wide SRM Java Expo, presenting highly optimized and scalable Java backend frameworks to industry and academic judges.",
    name: "SRM Java Expo",
    designation: "3rd Prize Winner @ SRMIST (2025)",
    src:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "Recognized as a hackathon winner in the GitHub Community developer track, building open-source developer productivity tools and accessible automation plugins.",
    name: "GitHub Hackathon Winner",
    designation: "Winner @ GitHub Community (2025)",
    src:
      "https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "Finished in the top 10 finalists out of competitive developer cohorts in the CodeNex DayZero hackathon, demonstrating exceptional debugging and high-performance algorithms.",
    name: "Top 10 @ CodeNex DayZero",
    designation: "Top 10 Finalist @ CodeNex (2025)",
    src:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1368&auto=format&fit=crop",
  },
];

export const CircularTestimonialsDemo = () => (
  <section className="space-y-12">
    {/* Cinematic Dark Showcase Section (Portfolio Vibe) */}
    <div className="bg-[#050505] border border-white/5 p-8 md:p-16 rounded-3xl min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#E1E0CC]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="items-center justify-center relative flex w-full" style={{ maxWidth: "1024px" }}>
        <CircularTestimonials
          testimonials={achievements}
          autoplay={true}
          colors={{
            name: "#E1E0CC",
            designation: "rgba(225, 224, 204, 0.7)",
            testimony: "#ffffff",
            arrowBackground: "#121212",
            arrowForeground: "#E1E0CC",
            arrowHoverBackground: "#E1E0CC",
          }}
          fontSizes={{
            name: "28px",
            designation: "18px",
            quote: "18px",
          }}
        />
      </div>
    </div>
  </section>
);
