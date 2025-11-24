import React from "react";

// Background Assets
import BigEclipseGlow from "../../assets/backgrounds/big-eclipse-glow.png";
import SmallEclipseGlow from "../../assets/backgrounds/small-eclipse-glow.png";
import ColorShade from "../../assets/backgrounds/color-shade.png";
import CircleRings from "../../assets/backgrounds/circle-rings.png";

// Top/Mid rectangle glows
import Rect1 from "../../assets/backgrounds/Rectangle_round.png";
import Rect2 from "../../assets/backgrounds/Rectangle_round_2.png";
import Rect3 from "../../assets/backgrounds/Rectangle_round_3.png";

const Hero: React.FC = () => {
  return (
    <section className="pt-14 sm:pt-20 pb-10 sm:pb-14 px-4">
      {/* 👆 top & bottom padding reduced */}

      <div
        className="
          relative mx-auto max-w-7xl
          rounded-[34px]
          border border-white/15
          overflow-hidden
          bg-[#050812]/40
          backdrop-blur-[25px]
        "
      >
        {/* ======== BACKGROUND LAYERS ======== */}

        {/* Rectangle highlights top middle */}
        <img
          src={Rect1}
          className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-[80%] opacity-[0.32]"
        />
        <img
          src={Rect2}
          className="absolute top-[25px] left-1/2 -translate-x-1/2 w-[84%] opacity-[0.18]"
        />
        <img
          src={Rect3}
          className="absolute top-[45px] left-1/2 -translate-x-1/2 w-[90%] opacity-[0.12]"
        />

        <img
          src={ColorShade}
          className="absolute inset-0 w-full h-full object-cover opacity-[0.32]"
        />

        <img
          src={CircleRings}
          className="absolute top-[90px] left-[80px] w-[230px] opacity-[0.33]"
        />

        <img
          src={BigEclipseGlow}
          className="absolute bottom-[-200px] left-[-40px] w-[1200px] opacity-[0.55]"
        />

        <img
          src={SmallEclipseGlow}
          className="absolute top-[165px] left-[60px] w-[190px] opacity-[0.28]"
        />

        {/* star */}
        <div className="absolute left-[85px] bottom-[220px] opacity-35">
          <div className="w-[22px] h-[1px] bg-white/20"></div>
          <div className="w-[1px] h-[22px] bg-white/20"></div>
        </div>

        {/* ===== CONTENT (BOTTOM ALIGNED) ===== */}
        <div className="relative px-8 sm:px-14 py-28 sm:py-36 flex flex-col justify-end">
          {/* 👆 reduced internal vertical padding slightly */}

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
            {/* Heading */}
            {/* LEFT HERO TEXT */}
            <div className="w-full max-w-[900px]">
              <h1
                className="
      font-light tracking-tight
      text-white leading-[1.05]
      text-[38px] sm:text-[54px] lg:text-[78px]
      break-keep
    "
                style={{
                  wordBreak: "keep-all",
                  whiteSpace: "normal",
                  lineClamp: 2,
                }}
              >
                <span className="block">
                  Building the{" "}
                  <span className="text-white/70">Digital Future.</span>
                </span>

                <span className="block mt-2">
                  Investing in{" "}
                  <span className="text-white/90">Innovation.</span>
                </span>
              </h1>
            </div>

            {/* Right text block */}
            <div className="max-w-sm text-left lg:text-right space-y-6">
              <p className="text-slate-300/90 text-[15px] leading-relaxed">
                Momentas is a technology company building and investing in
                fintech, trading, and iGaming startups that shape the digital
                future.
              </p>

              <div className="flex lg:justify-end">
                <button
                  className="
                    px-7 py-2.5 rounded-full
                    bg-white/10 border border-white/20
                    text-white text-sm
                    hover:bg-white/20 transition
                  "
                >
                  Learn more
                </button>
              </div>

              <p className="text-sm text-slate-400">
                Management featured in{" "}
                <span className="font-semibold text-white">Forbes</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
