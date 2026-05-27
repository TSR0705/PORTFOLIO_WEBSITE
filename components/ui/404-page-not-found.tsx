"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  const router = useRouter();

  return (
    <section className="bg-black font-sans min-h-screen flex items-center justify-center relative text-white">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

      <div className="container mx-auto relative z-10 px-6">
        <div className="flex justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 text-center">
            
            {/* Container mapping the exact height of the original layout */}
            <div className="relative h-[250px] sm:h-[350px] md:h-[400px] flex justify-center">
              
              {/* Background GIF container (inverted to match dark theme) */}
              <div
                className="absolute inset-0 bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] bg-center bg-no-repeat bg-contain"
                style={{ filter: "invert(1) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
                aria-hidden="true"
              />

              {/* 404 Text - Placed at the top in clean `#E1E0CC` without filter inversion */}
              <h1 
                className="relative z-20 text-center text-6xl sm:text-7xl md:text-8xl pt-6 sm:pt-8 font-bold tracking-tight select-none pointer-events-none"
                style={{ color: "#E1E0CC" }}
              >
                404
              </h1>
            </div>

            {/* Content text aligned exactly to the original spacing */}
            <div className="mt-[-50px] relative z-20">
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4 text-white">
                Look like you&apos;re lost
              </h3>
              <p className="mb-6 text-white/70 text-sm sm:text-base font-sans">
                The page you are looking for is not available!
              </p>

              <Button
                onClick={() => router.push("/")}
                className="my-5 bg-white text-black font-medium hover:bg-[#E1E0CC] px-8 py-2.5 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105"
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
