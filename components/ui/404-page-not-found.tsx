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
            
            {/* Styled GIF container with invert filters to blend with black theme */}
            <div
              className="bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] h-[250px] sm:h-[350px] md:h-[400px] bg-center bg-no-repeat bg-contain"
              style={{ filter: "invert(1) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
              aria-hidden="true"
            >
              <h1 
                className="text-center text-8xl sm:text-9xl md:text-[10rem] font-bold pt-6 sm:pt-8 tracking-[-0.07em]"
                style={{ color: "#E1E0CC" }}
              >
                404
              </h1>
            </div>

            <div className="mt-[-20px] sm:mt-[-40px]">
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3 text-white">
                Look like you&apos;re lost
              </h3>
              <p className="mb-8 text-white/70 text-sm sm:text-base max-w-sm mx-auto font-sans leading-relaxed">
                The page you are looking for is not available or has been migrated.
              </p>

              <Button
                onClick={() => router.push("/")}
                className="my-5 bg-white text-black font-medium hover:bg-white/90 px-6 py-2 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105"
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
