import React from "react";

// Athlete cards
import Card1 from "../../assets/Images/card1.png";
import Card2 from "../../assets/Images/card2.png";
import Card3 from "../../assets/Images/card3.png";
import Card4 from "../../assets/Images/card4.png";
import Card5 from "../../assets/Images/card5.png";
import Card6 from "../../assets/Images/card6.png";
import Card7 from "../../assets/Images/card7.png";
import Card8 from "../../assets/Images/card8.png";

// Background elements
import ColorShade from "../../assets/backgrounds/color-shade.png";
import PlusIcon from "../../assets/backgrounds/plus.png";

const data = [
  { img: Card1, brand: "MotoGP", title: "MotoGP", subtitle: "Valentino Rossi" },
  { img: Card2, brand: "Dota2" },
  { img: Card3, brand: "NASCAR" },
  { img: Card4, brand: "UFC" },
  { img: Card5, brand: "MotoGP" },
  { img: Card6, brand: "Dota2" },
  { img: Card7, brand: "NASCAR" },
  { img: Card8, brand: "UFC" },
];

const AthleteGrid: React.FC = () => {
  return (
    <section className="relative bg-[#0C111B] pt-60 pb-28 overflow-hidden">
      {/* 🔵 Background gradient overlays (LEFT SIDE — Top, Middle, Bottom) */}
      <img
        src={ColorShade}
        className="absolute top-0 left-0 w-[720px] opacity-50 pointer-events-none select-none"
      />

      <img
        src={ColorShade}
        className="absolute top-[250px] left-40 w-[720px] opacity-10 pointer-events-none select-none"
      />

      <img
        src={ColorShade}
        className="absolute bottom-10 left-0 w-[720px] opacity-20 pointer-events-none select-none"
      />

      {/* ✚ Floating Plus Icons (TOP-LEFT & MIDDLE) */}
      <img
        src={PlusIcon}
        className="absolute top-[140px] left-[120px] w-10 opacity-30"
      />
      <img
        src={PlusIcon}
        className="absolute top-[380px] left-[60px] w-10 opacity-30"
      />

      {/* GRID */}
      <div
        className="
          mx-auto 
          max-w-7xl
          px-4 sm:px-6 lg:px-8
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-10
          relative
          z-10
        "
      >
        {data.map((item, idx) => (
          <div
            key={idx}
            className="
              relative
              rounded-[22px]
              bg-gradient-to-b
              from-white/5
              to-white/0
              border border-white/10
              overflow-hidden
              shadow-xl
              backdrop-blur-xl
              hover:scale-[1.02]
              transition
            "
          >
            {/* IMAGE */}
            <img src={item.img} className="w-full h-[360px] object-cover" />

            {/* TEXT OVERLAY */}
            <div className="absolute bottom-5 left-5">
              {/* BRANDS */}
              {item.brand === "MotoGP" && (
                <span className="text-white text-sm tracking-wide opacity-90">
                  MotoGP
                </span>
              )}
              {item.brand === "Dota2" && (
                <span className="text-red-400 text-sm tracking-wide">
                  DOTA 2
                </span>
              )}
              {item.brand === "NASCAR" && (
                <span className="text-yellow-300 text-sm tracking-wide">
                  NASCAR
                </span>
              )}
              {item.brand === "UFC" && (
                <span className="text-red-500 text-sm tracking-wide">UFC</span>
              )}

              {/* FIRST CARD EXTRA TEXT */}
              {idx === 0 && (
                <div className="mt-1">
                  <p className="text-lg font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="text-xs text-white/70">{item.subtitle}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AthleteGrid;
