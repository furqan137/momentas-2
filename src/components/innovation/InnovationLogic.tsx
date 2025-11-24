// src/components/innovation/InnovationLogic.tsx
import React from "react";
import SectionBadge from "../ui/SectionBadge";

const InnovationLogic: React.FC = () => {
  return (
    <section className="bg-white text-slate-900 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

        {/* BADGE */}
        <SectionBadge text="Innovation" className="bg-slate-100 mx-auto" />

        {/* TITLE */}
        <h2
          className="
          mt-5 sm:mt-6
          text-[26px] sm:text-[40px]
          leading-tight font-light tracking-tight
        "
        >
          At{" "}
          <span
            className="
              bg-gradient-to-r from-slate-900 via-slate-800 to-purple-500
              bg-clip-text text-transparent font-normal
            "
          >
            Momentas
          </span>
          , innovation is
          <br />
          both logic and vision.
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-slate-600">
          It’s bold thinking grounded in real data, market research, and user insight —
          fueled by advancements in technology, AI, and digital infrastructure.
          <br className="hidden sm:block" />
          We constantly push boundaries and ask:
          <br />
          <span className="italic font-medium">
            what’s the most impactful thing we can build next?
          </span>
        </p>

        {/* BUTTON */}
        <button
          className="
            mt-8 px-9 py-3 rounded-xl text-sm font-medium text-white
            bg-slate-900 hover:bg-slate-800 transition shadow
          "
        >
          Join Now
        </button>
      </div>
    </section>
  );
};

export default InnovationLogic;
