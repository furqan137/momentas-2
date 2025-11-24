import React from "react";
import SectionBadge from "../ui/SectionBadge";
import DashboardImage from "../../assets/Refining-online-play/image.png";
import Icon1 from "../../assets/Refining-online-play/icons/icon1.png";
import Icon2 from "../../assets/Refining-online-play/icons/icon2.png";
import Icon3 from "../../assets/Refining-online-play/icons/icon3.png";
import Icon4 from "../../assets/Refining-online-play/icons/icon4.png";
import LinesCurve from "../../assets/backgrounds/Rectangle_round.png";

const RedefiningOnlinePlay: React.FC = () => {
  return (
    <section className="relative bg-white text-slate-900 py-16 sm:py-24 overflow-hidden">

      {/* Background soft red lines */}
      <img
        src={LinesCurve}
        className="absolute top-0 left-0 w-full opacity-30 pointer-events-none"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-8 text-center relative z-10">

        {/* Badge */}
        <div className="mb-4 sm:mb-6">
          <span className="px-5 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-slate-100 text-slate-600 shadow-sm">
            iGaming
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[32px] sm:text-[48px] md:text-[68px] leading-tight font-light tracking-tight mb-3 sm:mb-4">
          Redefining{" "}
          <span className="bg-gradient-to-r from-black to-purple-400 bg-clip-text text-transparent">
            Online Play
          </span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-[14px] sm:text-[16px] text-slate-600 leading-relaxed mb-8 sm:mb-10">
          From immersive casino platforms to global poker networks, Momentas is
          at the forefront of iGaming innovation — building products that deliver
          excitement, performance, and growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-slate-700 to-pink-400 text-white font-medium shadow-md hover:opacity-90 transition">
            Join Now
          </button>

          <button className="px-8 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium hover:bg-slate-100 transition">
            Learn More
          </button>
        </div>

        {/* Dashboard Card */}
        <div className="rounded-[28px] sm:rounded-[32px] border border-slate-200 bg-white shadow-xl p-3 sm:p-6">
          <img
            src={DashboardImage}
            alt="Dashboard"
            className="rounded-2xl w-full"
          />
        </div>

        {/* Bottom icons */}
        <div className="mt-10 sm:mt-12 flex justify-center gap-6 sm:gap-10 flex-wrap max-w-md mx-auto">
          {[
            { src: Icon1, label: "Casino Platforms" },
            { src: Icon2, label: "Global Poker" },
            { src: Icon3, label: "Building Products" },
            { src: Icon4, label: "More" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 w-20 sm:w-auto">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white border border-slate-200 shadow flex items-center justify-center">
                <img src={item.src} className="h-5 w-5 sm:h-6 sm:w-6 opacity-70" />
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 text-center">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RedefiningOnlinePlay;
