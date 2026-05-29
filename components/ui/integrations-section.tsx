"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const integrations = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://cdn-icons-png.flaticon.com/512/174/174857.png", // LinkedIn
  "https://cdn-icons-png.flaticon.com/512/2111/2111615.png", // Slack
  "https://cdn-icons-png.flaticon.com/512/174/174872.png", // Spotify
  "https://cdn-icons-png.flaticon.com/512/733/733547.png", // Facebook
  "https://cdn-icons-png.flaticon.com/512/5968/5968381.png", // Stripe
  "https://cdn-icons-png.flaticon.com/512/174/174855.png", // Instagram
  "https://cdn-icons-png.flaticon.com/512/888/888853.png", // Dropbox
  "https://cdn-icons-png.flaticon.com/512/906/906324.png", // Jira
  "https://ruixen.com/ruixen_dark.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", // Square
  "https://cdn-icons-png.flaticon.com/512/732/732218.png", // Shopify
  "https://cdn-icons-png.flaticon.com/512/5968/5968755.png", // Zapier
  "https://cdn-icons-png.flaticon.com/512/5968/5968520.png", // Google Drive
  "https://cdn-icons-png.flaticon.com/512/1384/1384060.png", // YouTube
  "https://cdn-icons-png.flaticon.com/512/5968/5968885.png", // Airtable
  "https://cdn-icons-png.flaticon.com/512/2111/2111370.png", // Discord
];

export default function IntegrationsSection() {
  return (
    <section className="max-w-7xl mx-auto my-20 px-6 grid md:grid-cols-2 gap-10 items-center border border-gray-200 dark:border-gray-800 p-6 rounded-3xl bg-black text-white relative">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-overlay rounded-3xl" />
      
      {/* Subtle ambient gradient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#E1E0CC]/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Left Side */}
      <div className="relative z-10">
        <p className="uppercase text-xs font-mono tracking-widest text-amber-400">
          Components
        </p>
        <h2 className="text-4xl md:text-5xl font-light tracking-tighter leading-tight text-white mt-2 mb-4">
          Supercharge your <span className="font-medium text-[#E1E0CC]">workflow</span>
        </h2>
        <p className="text-white/70 mb-6 text-sm md:text-base max-w-md font-sans">
          Build sleek, responsive interfaces in record time with our carefully crafted React and Tailwind CSS components.
        </p>
        <div className="flex gap-4">
          <Button asChild className="bg-white text-black hover:bg-white/90 px-5 py-2 rounded-lg font-medium transition-transform active:scale-95 cursor-pointer">
            <Link href="https://ruixen.com/components" target="_blank">Browse Components</Link>
          </Button>
          <Button asChild variant="outline" className="border border-white/20 hover:bg-white/10 hover:text-white px-5 py-2 rounded-lg font-medium transition-transform active:scale-95 cursor-pointer">
            <Link href="https://ruixen.com" target="_blank">View Documentation →</Link>
          </Button>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-6 gap-4 relative z-10 justify-items-center">
        {integrations.map((url, idx) => (
          <div
            key={idx}
            className="relative w-12 h-12 md:w-16 md:h-16 p-2 bg-neutral-900 border border-white/10 shadow-lg transition-transform hover:scale-110 hover:border-amber-400/50 duration-300"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <Image
              src={url}
              alt={`integration-${idx}`}
              fill
              className="object-contain p-1.5 dark:invert-0 filter brightness-100 group-hover:brightness-110"
              sizes="(max-width: 768px) 48px, 64px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
