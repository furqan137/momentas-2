// src/components/innovation/InnovationFeatures.tsx
import React from "react";
import SectionBadge from "../ui/SectionBadge";

import Image1 from "../../assets/innovation/image1.png";
import Image2 from "../../assets/innovation/image2.png";

const InnovationFeatures: React.FC = () => {
  return (
    <section className="relative bg-white text-slate-900 py-16 sm:py-24 overflow-hidden">

      {/* LIGHT BACKGROUND */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(240,235,245,0.4),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 sm:gap-16 px-4 sm:px-6">

        {/* LEFT BLOCK */}
        <div className="space-y-6">
          <SectionBadge text="Features" className="bg-slate-100" />

          <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-light leading-tight tracking-tight">
            Innovation isn’t just{" "}
            <span className="bg-gradient-to-r from-black via-slate-700 to-purple-500 bg-clip-text text-transparent font-normal">
              what we do
            </span>{" "}
            — it’s
            <br />
            <span className="font-normal">who we are.</span>
          </h2>

          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed max-w-md">
            At Momentas, every idea begins with a bold question and ends with a proven
            solution. We transform complex technology into products that redefine fintech,
            trading, and iGaming.
          </p>

          <button className="
            px-8 py-3 rounded-xl
            bg-gradient-to-r from-slate-900 via-slate-800 to-pink-500
            text-white text-sm font-medium
            shadow shadow-slate-300/10 hover:opacity-90 transition
          ">
            Join Now
          </button>
        </div>

        {/* RIGHT IMAGE STACK — FIXED MOBILE BEHAVIOR */}
        <div className="relative flex justify-center lg:justify-end mt-10 sm:mt-4">
          <div className="relative w-full max-w-[420px]">

            {/* TOP MAIN CARD */}
            <div className="
              relative rounded-[24px] overflow-hidden
              border border-slate-200 bg-white
              shadow-[0_20px_80px_rgba(0,0,0,0.10)]
            ">
              <img
                src={Image1}
                alt="Innovation Diagram"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* BOTTOM CARD — SHIFTED */}
            <div className="
              absolute -bottom-16 sm:-bottom-20 right-2 sm:right-4 w-[82%] sm:w-[78%]
              rounded-[24px] overflow-hidden
              border border-slate-200 bg-white
              shadow-[0_18px_60px_rgba(0,0,0,0.12)]
            ">
              <img
                src={Image2}
                alt="From Idea to Impact"
                className="w-full h-auto object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default InnovationFeatures;
