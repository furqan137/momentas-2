// src/components/about/CoreCapabilities.tsx
import React from "react";
import SectionBadge from "../ui/SectionBadge";

// Your main combined UI image

const CoreCapabilities: React.FC = () => {
  return (
    <section className="relative bg-white text-slate-900 py-24 overflow-hidden">

      {/* GRID BACKGROUND (very light lines) */}
      <div className="absolute inset-0 bg-[url('/src/assets/about/grid-bg.png')] opacity-[0.25] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 space-y-14 z-10">

        {/* TITLE BLOCK */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <SectionBadge text="Core Capabilities" className="bg-[#eef0f6]" />

          <h2 className="text-[34px] sm:text-[42px] md:text-[48px] font-light tracking-tight">
            From <span className="text-[#b27ea5]">beta</span> to{" "}
            <span className="text-[#565268] font-normal">beyond</span>
          </h2>

          <p className="text-[15px] text-slate-600 leading-relaxed">
            Easygo is the team behind some of the world's most ambitious brands—
            focused on bold, high-speed, deeply engaging experiences.
          </p>
        </div>

        {/* JOIN NOW BUTTON */}
        <div className="flex justify-center">
          <button className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#d17782] to-[#7d87c9] text-white shadow-md hover:opacity-90 transition">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
