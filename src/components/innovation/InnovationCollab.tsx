// src/components/innovation/InnovationCollab.tsx
import React from "react";
import SectionBadge from "../ui/SectionBadge";

const InnovationCollab: React.FC = () => {
  const cards = [
    {
      label: "Focus",
      title: "Empower the ecosystem",
      body: "From founders and developers to investors, creators, and communities — we bring people together around products that deliver real value and lasting impact.",
    },
    {
      label: "Growth",
      title: "Scale with purpose",
      body: "We’re committed to driving meaningful growth for our products, our partners, and the industries we shape. Through innovation and collaboration, we turn bold ideas into scalable digital ventures.",
    },
    {
      label: "Vision",
      title: "Redefine the landscape",
      body: "We’re not here to follow trends — we’re here to shape them. By challenging traditional models in fintech, trading, and iGaming, we aim to transform how people invest, play, and interact in the digital world.",
    },
  ];

  return (
    <section className="bg-[#faf7fc] text-slate-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12 sm:space-y-14">

        {/* TITLE BLOCK */}
        <div className="space-y-4 max-w-3xl">
          <SectionBadge text="Momentas" className="bg-white" />

          <h2 className="text-[26px] sm:text-[40px] font-light leading-tight">
            Great{" "}
            <span className="
              bg-gradient-to-r from-slate-900 via-slate-800 to-purple-500
              bg-clip-text text-transparent font-normal
            ">
              ideas are built together
            </span>
          </h2>

          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
            Since day one, we’ve believed that the best ideas come from collaboration —
            and that meaningful products require teams shaped by vision and purpose.
          </p>
        </div>

        {/* CARD GRID */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="
                rounded-3xl bg-white border border-slate-200
                px-5 sm:px-6 py-6 shadow-sm
              "
            >
              <p className="
                inline-flex mb-3 sm:mb-4 rounded-full bg-slate-100
                px-3 py-1 text-[10px] sm:text-[11px]
                uppercase tracking-[0.18em] text-slate-500 font-medium
              ">
                {card.label}
              </p>

              <h3 className="text-[17px] sm:text-lg font-semibold text-slate-900 mb-2">
                {card.title}
              </h3>

              <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-600">
                {card.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InnovationCollab;
