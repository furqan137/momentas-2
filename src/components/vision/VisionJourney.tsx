// src/components/vision/VisionJourney.tsx
import React from "react";

import LeftRing from "../../assets/vision/left-side-ring.png";
import RightRing from "../../assets/vision/right-side-ring.png";

const VisionJourney: React.FC = () => {
  return (
    <section className="relative bg-[#060A12] text-white py-24 sm:py-28 overflow-hidden">

      {/* LEFT BLUR RING */}
      <img
        src={LeftRing}
        alt=""
        className="
          absolute left-0 bottom-0
          w-[250px] sm:w-[320px]
          opacity-40 pointer-events-none
          translate-y-10 sm:translate-y-0
        "
      />

      {/* RIGHT BLUR RING */}
      <img
        src={RightRing}
        alt=""
        className="
          absolute right-0 bottom-0
          w-[250px] sm:w-[320px]
          opacity-40 pointer-events-none
          translate-y-10 sm:translate-y-0
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center space-y-8 sm:space-y-10">

        <h2 className="
            text-[32px] sm:text-[44px] lg:text-[52px]
            font-light leading-tight
          ">
          The{" "}
          <span className="
              bg-gradient-to-r from-white via-[#ddb9ff] to-[#f2b8c5]
              bg-clip-text text-transparent
            ">
            journey is
          </span>
          <br />
          just beginning
        </h2>

        <p className="
            text-[14px] sm:text-[15px]
            leading-relaxed text-slate-300/90
            max-w-xl mx-auto
          ">
          Big ideas need bold people. Innovation happens where talent meets
          execution — through collaboration, experimentation, and relentless
          iteration.
        </p>

        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap pt-3">

          {/* MAIN BUTTON */}
          <button
            className="
              px-8 sm:px-10 py-2.5 rounded-xl text-sm font-medium
              bg-gradient-to-r from-[#ff9b9b] via-[#f08ac5] to-[#a9b5ff]
              shadow-lg shadow-pink-400/20
              hover:opacity-90 transition
            "
          >
            Join Now
          </button>

          {/* OUTLINE BUTTON */}
          <button
            className="
              px-8 sm:px-10 py-2.5 rounded-xl text-sm font-medium
              bg-white/5 border border-white/20
              hover:bg-white/10 transition
            "
          >
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
};

export default VisionJourney;
