"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="min-h-screen w-full bg-black text-white px-6 py-20 md:py-32 flex flex-col justify-between relative">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto grid grid-cols-12 gap-8 md:gap-12">
        
        {/* Section Heading */}
        <div className="col-span-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-medium leading-[0.85] tracking-[-0.07em] text-[10vw] md:text-[6vw]" 
            style={{ color: "#E1E0CC" }}
          >
            INQUIRIES
          </motion.h2>
          <div className="h-[1px] w-full bg-white/10 mt-6 md:mt-8" />
        </div>

        {/* Left Column: Contact info */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-between gap-10">
          <div>
            <h3 className="text-xl md:text-3xl font-medium tracking-tight mb-4 leading-snug">
              Let&apos;s build something <span style={{ color: "#E1E0CC" }}>scalable</span>.
            </h3>
            <p className="text-white/60 text-sm md:text-base font-sans leading-relaxed max-w-sm">
              I am open to collaborations in backend architecture design, cloud deployment strategies, and custom AI tooling implementations.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-xs md:text-sm font-mono text-white/50">
            <div>GitHub: <a href="https://github.com/TSR0705" target="_blank" rel="noreferrer" className="text-white hover:text-[#E1E0CC] transition-colors">github.com/TSR0705</a></div>
            <div>Email: <a href="mailto:tanmay.singh@example.com" className="text-white hover:text-[#E1E0CC] transition-colors">tanmay.singh@example.com</a></div>
          </div>
        </div>

        {/* Right Column: Contact form */}
        <div className="col-span-12 md:col-span-7">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-[#E1E0CC]/30 rounded-2xl p-8 bg-white/[0.02] backdrop-blur-md flex flex-col items-center justify-center text-center min-h-[300px]"
            >
              <h4 className="text-2xl font-medium tracking-tight text-[#E1E0CC] mb-2">Message received.</h4>
              <p className="text-white/60 text-sm font-sans max-w-xs leading-relaxed">
                Thank you. I will review your inquiry and respond per engineering timeline requirements.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col">
                <label className="text-[10px] tracking-widest uppercase font-mono text-white/40 mb-1">Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#E1E0CC] outline-none transition-colors duration-300 font-sans text-sm md:text-base"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] tracking-widest uppercase font-mono text-white/40 mb-1">Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#E1E0CC] outline-none transition-colors duration-300 font-sans text-sm md:text-base"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] tracking-widest uppercase font-mono text-white/40 mb-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#E1E0CC] outline-none transition-colors duration-300 font-sans text-sm md:text-base resize-none"
                />
              </div>

              <button 
                type="submit"
                className="group inline-flex items-center gap-3 self-start rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-medium text-black transition-all hover:gap-4 mt-4 cursor-pointer"
              >
                Send Message
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                  <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                </span>
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto w-full relative z-10 border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40">
        <div>&copy; {new Date().getFullYear()} Tanmay Singh. All rights reserved.</div>
        <div>Designed with Prisma & Next.js</div>
      </div>
    </section>
  );
}
