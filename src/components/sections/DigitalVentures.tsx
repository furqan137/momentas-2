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
    <section className="bg-[#0A0F18] text-white">

      {/* HERO BACKGROUND */}
      <div className="relative w-full min-h-[520px] flex items-end md:items-center overflow-hidden">

        {/* BG IMAGE */}
        <img
          src={ExecBg}
          alt="Digital Ventures"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* GRADIENT OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F18]/95 via-[#0A0F18]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F18] via-transparent to-[#0A0F18]/20" />

        {/* TEXT CONTENT */}
        <div className="relative w-full px-6 py-16 md:px-8 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">

          {/* LEFT TITLE */}
          <h2 className="text-[38px] sm:text-[56px] md:text-[64px] leading-[1.1] font-light">
            A range of <br />
            <span className="bg-gradient-to-r from-white via-[#D4C7D4] to-[#B88CA9] bg-clip-text text-transparent">
              digital ventures
            </span>
          </h2>

          {/* RIGHT PARAGRAPH */}
          <p className="text-[14px] sm:text-[15px] text-slate-300 leading-relaxed max-w-md">
            We build and invest in startups across{" "}
            <span className="font-semibold text-white">fintech, trading, and iGaming</span>, 
            developing products that redefine how people interact with finance, 
            technology, and entertainment.
            <br /><br />
            Our teams specialize in software engineering, product design, UX/UI,
            and analytics — using cutting-edge frameworks and cloud solutions to 
            create scalable digital ecosystems.
            <br /><br />
            With a focus on innovation and performance, Momentas continues to 
            expand its global reach — turning ideas into impactful digital 
            products trusted by millions.
          </p>

        </div>
      </div>

      {/* KEY FIGURES LABEL */}
      <div className="flex justify-center mt-10 md:mt-14">
        <span className="px-6 py-2 rounded-full bg-[#1A1F28] text-[12px] sm:text-[13px] tracking-wide text-slate-300 border border-white/10">
          Key figures
        </span>
      </div>

      {/* STATISTICS */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 py-16 grid sm:grid-cols-3 gap-12 sm:gap-10 mt-8">

        {/* DIVIDERS ONLY ON DESKTOP */}
        <div className="absolute left-1/3 top-0 bottom-0 border-r border-white/10 hidden sm:block"></div>
        <div className="absolute left-2/3 top-0 bottom-0 border-r border-white/10 hidden sm:block"></div>

        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-start sm:items-center sm:text-center space-y-4">

            {/* BIG NUMBER */}
            <p className="text-[64px] sm:text-[96px] font-light leading-none 
              bg-gradient-to-b from-white via-[#D4C7D4] to-[#B88CA9] bg-clip-text text-transparent">
              {item.value}
            </p>

            {/* STAT CARD */}
            <div className="
              w-full sm:w-[90%]
              rounded-2xl border border-white/10 
              bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.08]
              backdrop-blur-sm px-5 py-5 sm:px-6 sm:py-6 
              space-y-2 shadow-[0_0_30px_rgba(0,0,0,0.4)]
            ">
              <p className="text-[18px] sm:text-[22px] text-white leading-snug font-medium">
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
