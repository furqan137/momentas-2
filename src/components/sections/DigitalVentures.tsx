import React from "react";
import ExecBg from "../../assets/backgrounds/playful-executive-manager-bg.png";

const DigitalVentures: React.FC = () => {
  const stats = [
    {
      value: "15+",
      label: "Active startups",
      sub: "built and invested through Momentas",
    },
    {
      value: "50M+",
      label: "Users connected",
      sub: "across our fintech, trading, and iGaming products",
    },
    {
      value: "12+",
      label: "Strategic partnerships",
      sub: "with technology and financial institutions",
    },
  ];

  return (
    <section className="relative bg-[#060A12] text-white overflow-hidden">
      {/* TOP HERO IMAGE */}
      <div className="relative w-full h-[760px] lg:h-[820px] flex items-end">
        {/* FULL IMAGE – no opacity change */}
        <img
          src={ExecBg}
          alt="Digital Ventures"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient overlays EXACT like Figma */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060A12]/95 via-[#060A12]/70 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060A12] via-transparent to-[#060A12]/30 pointer-events-none"></div>

        {/* CONTENT ALIGNMENT */}
        <div
          className="
          relative z-10 
          max-w-7xl mx-auto
          w-full 
          px-[32px] lg:px-[60px] 
          pb-[140px] 
          grid grid-cols-1 lg:grid-cols-2 
          gap-12 lg:gap-20
        "
        >
          {/* LEFT TITLE – EXACT Figma line breaks */}
          <h2
            className="
            text-white 
            font-light
            text-[48px] sm:text-[62px] lg:text-[70px]
            leading-[1.08]
          "
          >
            A range of <br />
            <span
              className="
              bg-gradient-to-r 
              from-[#F3E8F2] via-[#D8C9D8] to-[#C3A2B9] 
              bg-clip-text text-transparent
            "
            >
              digital ventures
            </span>
          </h2>

          {/* RIGHT DESCRIPTION – same width + line-count control */}
          <p
            className="
            text-[15px] sm:text-[16px] 
            text-[#D3D4D8]
            leading-[1.55]
            max-w-[500px]
            tracking-[0.01em]
          "
          >
            We build and invest in startups across
            <span className="font-semibold text-white">
              {" "}
              Fintech, Trading, and iGaming
            </span>
            , developing products that redefine how people interact with
            finance, technology, and entertainment.
            <br />
            <br />
            Our teams specialize in software engineering, product design, UX/UI,
            and analytics, using cutting-edge frameworks and cloud solutions to
            create scalable digital ecosystems.
            <br />
            <br />
            With a focus on innovation and performance, Momentas continues to
            expand its global reach — turning ideas into impactful digital
            products trusted by millions.
          </p>
        </div>
      </div>
      {/* KEY FIGURES BADGE — EXACT FIGMA STYLE */}
      <div className="flex justify-center mt-14 mb-6">
        <span
          className="
      px-7
      py-2.5
      rounded-full
      text-[14px]
      font-light
      tracking-wide
      bg-[#1A1822]
      text-[#E58C84]
      shadow-[0_0_18px_rgba(0,0,0,0.4)]
    "
        >
          Key figures
        </span>
      </div>

      {/* STATISTICS SECTION */}
      <div
        className="
        relative 
        max-w-7xl mx-auto 
        px-[32px] lg:px-[60px] 
        py-16
        grid grid-cols-1 sm:grid-cols-3
        gap-12
      "
      >
        {/* Divider lines like Figma */}
        <div className="absolute hidden sm:block left-1/3 top-0 bottom-0 border-r border-white/10"></div>
        <div className="absolute hidden sm:block left-2/3 top-0 bottom-0 border-r border-white/10"></div>

        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start sm:items-center text-left sm:text-center space-y-4 relative z-10"
          >
            {/* Big Number */}
            <p
              className="
              text-[64px] sm:text-[92px]
              font-light
              leading-none
              bg-gradient-to-b from-white via-[#D9CBD9] to-[#B98AAA]
              bg-clip-text text-transparent
            "
            >
              {item.value}
            </p>

            {/* Card */}
            <div
              className="
              w-full sm:w-[90%]
              rounded-2xl
              border border-white/10
              bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-white/[0.08]
              backdrop-blur-md
              px-6 py-6
              shadow-[0_0_35px_rgba(0,0,0,0.45)]
              space-y-2
            "
            >
              <p className="text-[18px] sm:text-[22px] font-medium text-white leading-tight">
                {item.label}
              </p>
              <p className="text-[12px] sm:text-[13px] text-slate-400 leading-relaxed">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalVentures;
