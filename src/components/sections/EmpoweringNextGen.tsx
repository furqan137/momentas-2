import React from "react";
import SectionBadge from "../ui/SectionBadge";
import LinesCurve from "../../assets/Empowering-future/lines-curve.png";

const EmpoweringNextGen: React.FC = () => {
  return (
    <section className="bg-[#FAFBFF] text-[#0D0F11] border-t border-[#E4E6EB]">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24">

        {/* Center Divider */}
        <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-[#E4E6EB]" />

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div>

            {/* Features Badge EXACT 1:1 */}
            <div
              className="
                inline-flex items-center justify-center
                px-6 py-1.5 rounded-full
                text-[14px] font-medium
                bg-[#EEF1F7]
                text-[#424B57]
                shadow-sm
              "
            >
              Features
            </div>

            {/* LEFT TITLE */}
            <h2
              className="
                mt-8
                text-[34px] sm:text-[40px] lg:text-[48px]
                font-light leading-[1.15] tracking-tight
                text-[#0D0F11]
                space-y-2
              "
            >
              {/* Line 1 */}
              <span className="block">
                Empowering the{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-[#6A5A63]
                    to-[#CBB3BA]
                    text-transparent bg-clip-text
                  "
                >
                  next
                </span>
              </span>

              {/* Line 2 */}
              <span className="block">
                generation of
              </span>

              {/* Line 3 */}
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#74606A]
                  to-[#C8A5AD]
                  text-transparent bg-clip-text
                "
              >
                fintech, trading, and iGaming ventures.
              </span>
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* Decorative Curve */}
            <img
              src={LinesCurve}
              alt=""
              className="absolute -top-10 right-0 w-24 opacity-50 select-none pointer-events-none"
            />

            {/* RIGHT HEADING */}
            <p className="text-[16px] font-medium leading-relaxed text-[#4E5057]">
              Momentas pioneers digital innovation — building, funding, and
              accelerating the next generation of fintech, trading, and iGaming
              ventures.
            </p>

            {/* Paragraphs */}
            <p className="mt-5 text-[15px] leading-relaxed text-[#7C8287]">
              Our mission is to bridge creativity and technology, transforming
              bold ideas into scalable digital products that redefine entire
              industries.
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-[#7C8287]">
              From concept to execution, we invest in visionaries and empower
              teams to create seamless, high-performance experiences that shape
              how people interact, play, and transact in the digital age.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmpoweringNextGen;
