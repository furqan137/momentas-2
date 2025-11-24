import React from "react";
import SectionBadge from "../ui/SectionBadge";

// Background grid curves
import LinesCurve from "../../assets/Empowering-future/lines-curve.png";

// Partner icons
import StakeIcon from "../../assets/Empowering-future/icons/icon1.png";
import TwitchIcon from "../../assets/Empowering-future/icons/icon2.png";
import KickIcon from "../../assets/Empowering-future/icons/icon3.png";
import CarrotIcon from "../../assets/Empowering-future/icons/icon4.png";

const EmpoweringFuture: React.FC = () => {
  return (
    <section className="relative bg-white text-slate-900 overflow-visible">

      {/* soft white → pink gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FFF6F6] to-[#FFECEC] opacity-80 pointer-events-none"></div>

      {/* grid background lines */}
      <img
        src={LinesCurve}
        className="absolute top-32 left-0 w-full opacity-60 pointer-events-none select-none"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-20 lg:py-24">

        {/* MAIN CONTENT GRID */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 relative z-20">

          {/* LEFT TEXT */}
          <div className="max-w-xl">
            <SectionBadge text="Innovations" />

            <h2
              className="
                mt-6 sm:mt-8 
                text-[32px] sm:text-[44px] md:text-[52px] lg:text-[62px]
                leading-[1.15] tracking-tight font-light
              "
            >
              Empowering the Future of{" "}
              <span className="bg-gradient-to-r from-black to-purple-400 bg-clip-text text-transparent">
                Fintech, Trading & iGaming
              </span>
            </h2>
          </div>

          {/* DIVIDER (Desktop Only) */}
          <div className="hidden lg:block w-px bg-slate-200"></div>

          {/* RIGHT TEXT */}
          <div className="max-w-xl space-y-5 sm:space-y-6">
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-slate-700">
              Momentas was founded with a passion for technology and the
              ambition to shape the digital future.
            </p>

            <p className="text-[14px] sm:text-[16px] text-slate-600 leading-relaxed">
              Our ventures span fintech, trading, and iGaming — industries that
              redefine how people invest, play, and connect. Through strategic
              investments and in-house development, we build startups that blend
              creativity with performance, delivering products designed for
              growth and global reach.
            </p>

            <p className="text-[14px] sm:text-[16px] text-slate-600 leading-relaxed">
              At our core lies a culture of <b>innovation</b>, <b>collaboration</b>,
              and <b>constant evolution</b>. We empower teams and partners with
              the tools to push boundaries, explore new ideas, and craft digital
              experiences that move industries forward.
            </p>
          </div>
        </div>

        {/* PARTNER ICONS GRID (MOBILE FRIENDLY) */}
        <div className="relative mt-20 sm:mt-24 h-[520px] sm:h-[420px] lg:h-[420px] z-20">

          {/* Partner #2 TWITCH – Large top bubble */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 sm:left-[28%] sm:translate-x-0 text-center">
            <p className="text-red-400 text-xs mb-1 sm:mb-2">Partner #2</p>
            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-white border border-red-200 shadow-xl flex items-center justify-center">
              <img src={TwitchIcon} className="w-20 sm:w-32" />
            </div>
          </div>

          {/* Partner #3 KICK */}
          <div className="absolute left-[10%] sm:left-[54%] top-[150px] sm:top-auto sm:bottom-0 text-center">
            <p className="text-red-400 text-xs mb-1 sm:mb-2">Partner #3</p>
            <div className="w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-white border border-red-200 shadow-xl flex items-center justify-center">
              <img src={KickIcon} className="w-20 sm:w-32" />
            </div>
          </div>

          {/* Partner #1 Stake */}
          <div className="absolute right-[10%] sm:left-6 bottom-0 text-center">
            <p className="text-red-400 text-xs mb-1 sm:mb-2">Partner #1</p>
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white border border-red-200 shadow-xl flex items-center justify-center">
              <img src={StakeIcon} className="w-16 sm:w-20" />
            </div>
          </div>

          {/* Partner #4 Carrot */}
          <div className="absolute right-6 top-[260px] sm:right-8 sm:-top-10 text-center">
            <p className="text-red-400 text-xs mb-1 sm:mb-2">Partner #4</p>
            <div className="w-28 h-28 sm:w-44 sm:h-44 rounded-full bg-white border border-red-200 shadow-xl flex items-center justify-center">
              <img src={CarrotIcon} className="w-14 sm:w-24" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmpoweringFuture;
