// src/components/about/KeyFeatures.tsx
import React from "react";
import FeatureImg from "../../assets/about/feature.png";

const FEATURES = [
  {
    title: "Make It Happen",
    body: "We turn big ideas into real impact. Timing matters — speed and smart execution keep us ahead and in control of the game.",
    iconColor: "from-pink-300 to-rose-300",
  },
  {
    title: "Do It Right",
    body: "Quality is non-negotiable. We stay focused on what matters most, delivering work that’s sharp, simple, and built to scale — without wasting a step.",
    iconColor: "from-purple-300 to-violet-300",
  },
  {
    title: "Win Fairly",
    body: "We own what we build — from start to finish. Taking bold risks means taking full responsibility, and we stand by our commitments to our team, our partners, and our customers.",
    iconColor: "from-rose-300 to-red-300",
  },
];

const KeyFeatures: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#12131B] via-[#0A0C14] to-[#060912] text-white py-24 overflow-hidden">

      {/* Subtle top-center badge */}
      <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300 text-center mb-14">
        Key features
      </p>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">

          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="
                rounded-[28px] border border-white/10 
                bg-gradient-to-b from-white/[0.10] via-white/[0.05] to-white/[0.02]
                backdrop-blur-xl 
                shadow-[0_28px_80px_rgba(0,0,0,0.7)]
                overflow-hidden
                group
              "
            >

              {/* TOP IMAGE */}
              <div className="relative w-full h-[210px] overflow-hidden">
                <img
                  src={FeatureImg}
                  alt="feature"
                  className="w-full h-full object-cover rounded-t-[28px] group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* TEXT CONTENT */}
              <div className="px-6 pb-8 pt-5 space-y-3">

                {/* Icon (colored round indicator) */}
                <div
                  className={`
                    h-7 w-7 rounded-full 
                    bg-gradient-to-br ${f.iconColor}
                    flex items-center justify-center
                    ring-1 ring-white/10 text-white text-xs mb-1
                  `}
                >
                  ●
                </div>

                <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>

                <p className="text-[13px] text-slate-300 leading-relaxed">
                  {f.body}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
