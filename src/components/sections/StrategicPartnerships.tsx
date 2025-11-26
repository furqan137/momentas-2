import React from "react";
import SectionBadge from "../ui/SectionBadge";

// Logos
import MotoGPLogo from "../../assets/Empowering-future/mask-icons.png";

const StrategicPartnerships: React.FC = () => {
  return (
    <section className="relative w-full bg-white text-slate-900 overflow-hidden">

      {/* TOP LIGHT BORDER (FIGMA MATCH) */}
      <div className="w-full h-px bg-[#E5E7EB]"></div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-14 sm:py-20">

        {/* ============================
            TOP CONTENT
        ============================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT — Heading */}
          <div>
            <SectionBadge
              text="Partnerships"
              className="bg-[#F3F4F6] text-[#6B7280]"
            />

            <h2
              className="
                mt-6
                text-[38px] sm:text-[52px] lg:text-[58px]
                leading-[1.05]
                font-light
                tracking-tight
              "
            >
              <span className="bg-gradient-to-r from-[#0D1117] to-[#A18390] bg-clip-text text-transparent">
                Strategic
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#0D1117] to-[#A18390] bg-clip-text text-transparent">
                Partnerships
              </span>
            </h2>
          </div>

          {/* RIGHT — Description */}
          <div className="space-y-5 max-w-xl">
            <p className="text-[20px] text-[#111827] leading-relaxed">
              We collaborate with leading names across fintech, trading, and
              iGaming to create meaningful, results-driven ventures.
            </p>

            <p className="text-[15px] text-[#6B7280] leading-relaxed">
              Wherever you see Momentas involved, know that we’re fully committed —
              building partnerships that inspire innovation, drive growth,
              and connect with audiences worldwide.
            </p>
          </div>
        </div>

        {/* ============================
            SPACING + LOGO BORDER LINE
        ============================= */}
        <div className="w-full h-px bg-[#E5E7EB] my-14"></div>

        {/* ============================
            PARTNER LOGOS — STRIP (FIGMA-LIKE)
        ============================= */}
        <div
          className="
            flex flex-wrap items-center 
            gap-12 sm:gap-20 lg:gap-28 
            justify-center
            opacity-80
          "
        >
          {/* MotoGP */}
          <img
            src={MotoGPLogo}
            alt="MotoGP"
            className="h-10 sm:h-12 opacity-60"
          />
        </div>
      </div>

      {/* BOTTOM LIGHT BORDER (FIGMA MATCH) */}
      <div className="w-full h-px bg-[#E5E7EB]"></div>

    </section>
  );
};

export default StrategicPartnerships;
