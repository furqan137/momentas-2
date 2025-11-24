// src/components/about/DisruptSection.tsx
import React from "react";
import SectionBadge from "../ui/SectionBadge";

// The combined UI/graphic for the right side
import MainImage from "../../assets/about/main_image.png";

const DisruptSection: React.FC = () => {
  return (
    <section className="relative bg-white text-slate-900 py-28 overflow-hidden">

      {/* Soft grid background */}
      <div className="absolute inset-0 bg-[url('/src/assets/about/grid-bg.png')] opacity-[0.25] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center z-10">

        {/* LEFT TEXT */}
        <div className="space-y-6">
          <SectionBadge text="Features" className="bg-[#eef0f6]" />

          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-light leading-[1.15] tracking-tight">
            Disrupt{" "}
            <span className="bg-gradient-to-r from-[#3d405b] to-[#8b5fbf] bg-clip-text text-transparent font-normal">
              with purpose
            </span>
            ,<br />
            lead <span className="font-normal">with vision</span>
          </h2>

          <p className="text-[16px] text-slate-600 leading-relaxed max-w-md">
            We create global-first experiences that shape the future of
            entertainment — fast, fearless, and at scale.
          </p>

          <button className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#d17782] to-[#7d87c9] text-white shadow-md hover:opacity-90 transition">
            Join Now
          </button>
        </div>

        {/* RIGHT — SINGLE COMBINED IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={MainImage}
            alt="Feature Cards"
            className="max-w-[540px] w-full drop-shadow-xl select-none pointer-events-none"
          />
        </div>

      </div>
    </section>
  );
};

export default DisruptSection;
