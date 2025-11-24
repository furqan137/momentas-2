// src/components/vision/VisionHero.tsx
import React from "react";

import HeroImage from "../../assets/vision/heroimage.png";
import LightImage from "../../assets/vision/imagelight.png";

const VisionHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#050812] pt-24 sm:pt-32 pb-20 sm:pb-32">

      {/* RIGHT GLOW IMAGE */}
      <img
        src={LightImage}
        alt=""
        className="
          absolute top-0 right-0
          w-[100%] sm:w-[70%] md:w-[55%] lg:w-[48%]
          opacity-50 sm:opacity-40
          pointer-events-none select-none
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20">

        {/* LEFT TEXT */}
        <div className="space-y-5 sm:space-y-6 pt-4">

          <h1 className="
              text-white font-light leading-[1.1]
              text-[32px] sm:text-[42px] md:text-[54px] lg:text-[64px]
            ">
            Evolving{" "}
            <span className="
                bg-gradient-to-r 
                from-white via-[#eec3ff] to-[#eaa8c4]
                bg-clip-text text-transparent font-normal
              ">
              beyond
            </span>
            <br />
            boundaries
          </h1>

          <p className="
              text-slate-300/90 text-[14px] sm:text-[15px]
              leading-relaxed max-w-md
            ">
            In just a few years, Momentas has grown from a bold idea into a thriving
            ecosystem — building and investing in startups shaping the future of
            fintech, trading, and iGaming.
          </p>

          <p className="
              text-slate-300/90 text-[14px] sm:text-[15px]
              leading-relaxed max-w-md
            ">
            With every partnership and every product launch, we’re accelerating the
            <span className="font-semibold"> digital evolution — together.</span>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={HeroImage}
            alt="Vision Hero"
            className="
              w-full max-w-[440px] sm:max-w-[520px]
              rounded-2xl
              shadow-[0_40px_120px_rgba(0,0,0,0.55)]
              object-cover
            "
          />
        </div>

      </div>
    </section>
  );
};

export default VisionHero;
