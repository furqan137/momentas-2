// src/components/vision/VisionRoadmap.tsx
import React from "react";

import Card1 from "../../assets/vision/card1-image.png";
import Card2 from "../../assets/vision/card2-image.png";
import MeasureBar from "../../assets/vision/measure-bar.png";

const VisionRoadmap: React.FC = () => {
  return (
    <section className="relative bg-[#070B13] text-white py-24 sm:py-28 overflow-hidden">

      {/* LEFT TIMELINE MEASURE BAR (only desktop) */}
      <img
        src={MeasureBar}
        alt=""
        className="
          absolute left-4 top-1/2 -translate-y-1/2 
          w-10 opacity-70 pointer-events-none hidden lg:block
        "
      />

      <div className="mx-auto max-w-7xl px-6 space-y-16">

        {/* HEADING */}
        <h2 className="
            text-center 
            text-[34px] sm:text-[46px] lg:text-[52px]
            font-light tracking-tight
          ">
          <span className="
              bg-gradient-to-r from-white via-[#d8bff9] to-[#f1b8c8]
              bg-clip-text text-transparent
            ">
            Roadmap
          </span>
        </h2>

        {/* CARD WRAPPER */}
        <div className="relative max-w-4xl mx-auto">

          {/* ========= BLURRED BACK CARDS ========= */}
          <div className="
              absolute inset-x-0 top-12
              grid md:grid-cols-2 gap-8
              opacity-30 blur-md scale-[0.97]
              pointer-events-none
            ">
            
            {/* BLUR CARD 1 */}
            <div className="rounded-3xl bg-[#121827]/50 border border-white/10 p-5">
              <img src={Card1} className="rounded-2xl mb-4" />
              <div className="h-4 w-24 bg-white/10 rounded"></div>
              <div className="h-3 mt-3 w-full bg-white/5 rounded"></div>
              <div className="h-3 mt-2 w-3/4 bg-white/5 rounded"></div>
            </div>

            {/* BLUR CARD 2 */}
            <div className="rounded-3xl bg-[#121827]/50 border border-white/10 p-5">
              <img src={Card2} className="rounded-2xl mb-4" />
              <div className="h-4 w-20 bg-white/10 rounded"></div>
              <div className="h-3 mt-3 w-full bg-white/5 rounded"></div>
              <div className="h-3 mt-2 w-3/4 bg-white/5 rounded"></div>
            </div>
          </div>

          {/* ========= MAIN CARDS ========= */}
          <div className="relative grid md:grid-cols-2 gap-10">

            {/* CARD 1 */}
            <div className="
                rounded-3xl bg-[#121827]/60 backdrop-blur-xl
                border border-white/10 p-5
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              ">
              <img src={Card1} className="rounded-2xl mb-4" />
              <h3 className="text-lg font-medium">The Momentas journey begins</h3>
              <p className="text-[13px] text-slate-300 mt-2 leading-relaxed">
                What started as a bold idea quickly evolved into a mission — to build
                and invest in innovative products that transform how people travel,
                invest, and play.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="
                rounded-3xl bg-[#121827]/60 backdrop-blur-xl
                border border-white/10 p-5
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              ">
              <img src={Card2} className="rounded-2xl mb-4" />
              <h3 className="text-lg font-medium">Do It Right</h3>
              <p className="text-[13px] text-slate-300 mt-2 leading-relaxed">
                Quality is non-negotiable — we deliver work that’s sharp, simple, and
                built to scale without wasting a step.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionRoadmap;
