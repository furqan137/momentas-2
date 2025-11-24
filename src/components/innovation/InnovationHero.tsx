// src/components/innovation/InnovationHero.tsx
import React from "react";
import CircleRings from "../../assets/innovation/circle-rings.png";

const InnovationHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#050812] pt-28 sm:pt-36 pb-28 sm:pb-32">

      {/* BACKDROP GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-[-120px] h-[360px] w-[360px] sm:h-[480px] sm:w-[480px] rounded-full bg-pink-300/10 blur-[120px]" />
        <div className="absolute bottom-[-180px] right-[-100px] h-[400px] w-[400px] sm:h-[520px] sm:w-[520px] rounded-full bg-purple-400/10 blur-[150px]" />
      </div>

      {/* CENTER RINGS */}
      <img
        src={CircleRings}
        alt=""
        className="
          absolute bottom-[-120px] sm:bottom-[-160px]
          left-1/2 -translate-x-1/2
          w-[420px] sm:w-[600px]
          opacity-50 pointer-events-none
        "
      />

      {/* TEXT BLOCK */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 flex flex-col items-center text-center">

        {/* TOP LABEL */}
        <p className="text-[11px] sm:text-[13px] tracking-[0.28em] text-slate-300/80 uppercase">
          Built to
        </p>

        {/* MAIN TITLE */}
        <h1 className="mt-4 sm:mt-6 text-white font-light leading-[1.1]">
          <span
            className="
              block
              text-[34px] sm:text-[48px] lg:text-[70px] xl:text-[80px]
              bg-clip-text text-transparent
              bg-gradient-to-r from-white via-[#f1d3ff] to-[#fabdd0]
            "
          >
            Innovate.
          </span>

          <span className="block mt-3 text-[26px] sm:text-[40px] lg:text-[56px] font-light">
            Driven to{" "}
            <span className="bg-gradient-to-r from-[#f9bfd5] to-[#f2a5df] bg-clip-text text-transparent font-medium">
              disrupt.
            </span>
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-5 sm:mt-6 max-w-md sm:max-w-xl text-[14px] sm:text-[15px] leading-relaxed text-slate-300/90">
          At Momentas, innovation isn’t just an idea — it’s a system.
          We design, build, and scale experiences that redefine what’s possible.
        </p>

        {/* BUTTON */}
        <button
          className="
            mt-7 sm:mt-8 px-8 py-2.5 text-sm font-medium text-white rounded-xl
            bg-gradient-to-r from-[#ff9b9b] via-[#f08ac5] to-[#a9b5ff]
            shadow-lg shadow-pink-400/20 hover:opacity-90 transition
          "
        >
          Join Now
        </button>
      </div>
    </section>
  );
};

export default InnovationHero;
