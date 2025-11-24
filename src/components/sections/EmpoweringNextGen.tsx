import React from 'react';
import SectionBadge from '../ui/SectionBadge';
import LinesCurve from '../../assets/Empowering-future/lines-curve.png';

const EmpoweringNextGen: React.FC = () => {
  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">

        {/* Middle divider (desktop only) */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-slate-200/80 hidden md:block" />

        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-start">

          {/* LEFT */}
          <div className="space-y-4 sm:space-y-6">
            <SectionBadge text="Features" className="bg-white" />

            <h2 className="text-[30px] sm:text-[38px] md:text-[46px] leading-tight font-light tracking-tight">
              Empowering the{" "}
              <span className="text-pink-500">next generation</span> of fintech, trading, and iGaming ventures.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="relative pt-4 sm:pt-0">
            <img
              src={LinesCurve}
              alt=""
              className="pointer-events-none absolute -top-8 right-0 h-16 sm:h-24 opacity-60"
            />

            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
              Momentas pioneers digital innovation — building, funding, and accelerating the next generation of fintech, trading, and iGaming ventures.
            </p>

            <p className="mt-4 text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
              Our mission is to bridge creativity and technology, transforming bold ideas into scalable digital products that redefine entire industries.
            </p>

            <p className="mt-4 text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
              From concept to execution, we invest in visionaries and empower teams to create seamless, high-performance experiences that shape how people interact, play, and transact in the digital age.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmpoweringNextGen;
