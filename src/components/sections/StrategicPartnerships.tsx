import React from "react";
import SectionBadge from "../ui/SectionBadge";

// Logos from your assets
import MotoGPLogo from "../../assets/Empowering-future/mask-icons.png";
import StakeLogo from "../../assets/Empowering-future/icons/icon1.png";
import CarrotLogo from "../../assets/Empowering-future/icons/icon4.png";

const StrategicPartnerships: React.FC = () => {
  return (
    <section className="relative bg-white text-slate-900 py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-20">

        {/* ============================
            TOP CONTENT
        =============================*/}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* LEFT — HEADING */}
          <div>
            <SectionBadge text="Partnerships" className="bg-slate-100" />

            <h2 className="
              mt-6 sm:mt-8 
              text-[34px] sm:text-[48px] lg:text-[54px]
              leading-[1.15] font-light tracking-tight
            ">
              <span className="bg-gradient-to-r from-black via-slate-700 to-purple-400 bg-clip-text text-transparent">
                Strategic Partnerships
              </span>
            </h2>
          </div>

          {/* RIGHT — TEXT */}
          <div className="space-y-6 max-w-xl">
            <p className="text-[16px] sm:text-[18px] leading-relaxed text-slate-700 font-medium">
              We collaborate with leading names across fintech, trading,
              and iGaming to create meaningful, results-driven ventures.
            </p>

            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
              Wherever you see Momentas involved, know that we’re fully committed —
              building partnerships that inspire innovation, drive growth,
              and connect with audiences worldwide.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 my-12 sm:my-16"></div>

        {/* ============================
            LOGO STRIP (Responsive)
        =============================*/}
        <div className="
          flex flex-wrap items-center 
          gap-10 sm:gap-16 lg:gap-24
          justify-center sm:justify-between 
          opacity-80
        ">

          {/* MotoGP */}
          <img
            src={MotoGPLogo}
            alt="MotoGP"
            className="h-10 sm:h-14 w-auto object-contain opacity-70"
          />

          {/* UFC (typographic logo) */}
          <span className="text-[32px] sm:text-[46px] font-semibold text-slate-400 tracking-wide">
            UFC
          </span>

          {/* Stake */}
          <img
            src={StakeLogo}
            alt="Stake"
            className="h-9 sm:h-12 w-auto object-contain opacity-70"
          />

          {/* Carrot */}
          <img
            src={CarrotLogo}
            alt="Carrot"
            className="h-9 sm:h-12 w-auto object-contain opacity-70"
          />

          {/* Placeholder Bar (as screenshot) */}
          <div className="
            h-8 sm:h-12 
            w-[100px] sm:w-[140px]
            bg-slate-300/40 
            rounded-lg
          "></div>
        </div>

      </div>
    </section>
  );
};

export default StrategicPartnerships;
