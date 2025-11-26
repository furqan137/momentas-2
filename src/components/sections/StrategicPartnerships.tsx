import React from "react";
import SectionBadge from "../ui/SectionBadge";

// Logos
import MotoGPLogo from "../../assets/Empowering-future/mask-icons.png";

const StrategicPartnerships: React.FC = () => {
  return (
    <section className="relative bg-white text-slate-900 py-16 sm:py-20 overflow-hidden">

      <div className="mx-auto max-w-7xl px-6 sm:px-8">

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
                text-[36px] sm:text-[48px] lg:text-[56px]
                leading-[1.1]
                font-light
                tracking-tight
              "
            >
              <span className="bg-gradient-to-r from-[#0D1117] to-[#9B7A8A] bg-clip-text text-transparent">
                Strategic
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#0D1117] to-[#9B7A8A] bg-clip-text text-transparent">
                Partnerships
              </span>
            </h2>
          </div>

          {/* RIGHT — Paragraphs */}
          <div className="space-y-5 max-w-xl">
            <p className="text-[18px] text-[#1F2937] leading-relaxed">
              We collaborate with leading names across fintech, trading, and
              iGaming to create meaningful, results-driven ventures.
            </p>

            <p className="text-[15px] text-[#6B7280] leading-relaxed">
              Wherever you see Momentas involved, know that we’re fully committed —
              building partnerships that inspire innovation, drive growth, and
              connect with audiences worldwide.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E5E7EB] my-10"></div>

        {/* ============================
            PARTNER LOGOS — strip
        ============================= */}
        <div
          className="
            flex flex-wrap items-center 
            gap-10 sm:gap-20 lg:gap-28 
            justify-center lg:justify-between
            opacity-70
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
    </section>
  );
};

export default StrategicPartnerships;
