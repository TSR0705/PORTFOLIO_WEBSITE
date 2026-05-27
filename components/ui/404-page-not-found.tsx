"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  const router = useRouter();

  return (
    <section className="bg-black font-sans min-h-screen flex items-center justify-center relative text-white">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay animate-pulse" />

      <div className="container mx-auto relative z-10 px-6">
        <div className="flex justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 text-center">
            
            {/* Layered container to render clean cream 404 behind the screen-blended GIF */}
            <div className="relative h-[250px] sm:h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden mb-8">
              
              {/* 404 Text - Rendered in clean `#E1E0CC` with no filters applied */}
              <h1 
                className="absolute text-center text-[24vw] sm:text-[20vw] md:text-[16vw] font-bold tracking-[-0.07em] select-none pointer-events-none z-0"
                style={{ color: "#E1E0CC", opacity: 0.8 }}
              >
                404
              </h1>

              {/* Inverted and screen-blended GIF container */}
              <div
                className="absolute inset-0 bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] bg-center bg-no-repeat bg-contain z-10 mix-blend-screen"
                style={{ filter: "invert(1) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
                aria-hidden="true"
              />
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3 text-white">
                Look like you&apos;re lost
              </h3>
              <p className="mb-8 text-white/70 text-sm sm:text-base max-w-sm mx-auto font-sans leading-relaxed">
                The page you are looking for is not available or has been migrated.
              </p>

              <Button
                onClick={() => router.push("/")}
                className="bg-white text-black font-medium hover:bg-[#E1E0CC] px-8 py-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105"
              >
                Go to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
