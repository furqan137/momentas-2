import React from "react";
import Card1 from "../../assets/Images/card1.png";
import Card2 from "../../assets/Images/card2.png";
import Card3 from "../../assets/Images/card3.png";
import Card4 from "../../assets/Images/card4.png";
import Card5 from "../../assets/Images/card5.png";
import Card6 from "../../assets/Images/card6.png";
import Card7 from "../../assets/Images/card7.png";
import Card8 from "../../assets/Images/card8.png";

import RectangleRound from "../../assets/backgrounds/Rectangle_round.png";

const data = [
  { img: Card1, brand: "MotoGP", title: "MotoGP", subtitle: "Valentino Rossi" },
  { img: Card2, brand: "Dota2" },
  { img: Card3, brand: "NASCAR" },
  { img: Card4, brand: "UFC" },
  { img: Card5, brand: "MotoGP" },
  { img: Card6, brand: "Dota2" },
  { img: Card7, brand: "NASCAR" },
  { img: Card8, brand: "UFC" }
];

const AthleteGrid: React.FC = () => {
  return (
    <section className="relative bg-[#0A0F1A] py-20 sm:py-24 overflow-hidden">

      {/* Background Gloss Gradient */}
      <img
        src={RectangleRound}
        className="absolute top-0 right-0 opacity-20 sm:opacity-30 pointer-events-none w-[260px] sm:w-[380px]"
      />

      <div className="
        mx-auto max-w-7xl 
        px-4 sm:px-6 lg:px-8
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-6 sm:gap-8 
        relative z-10
      ">

        {data.map((item, idx) => (
          <div
            key={idx}
            className="
              rounded-3xl border border-white/10
              bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(25,28,36,0.5))]
              backdrop-blur-lg overflow-hidden relative shadow-xl
            "
          >

            {/* Athlete Image */}
            <img
              src={item.img}
              alt=""
              className="w-full h-[360px] sm:h-[340px] object-cover"
            />

            {/* BRAND + TITLE */}
            <div className="absolute bottom-4 left-4 text-white">

              {/* Brand Label */}
              {item.brand === "MotoGP" && (
                <span className="text-white/90 text-xs tracking-wide">MotoGP</span>
              )}
              {item.brand === "Dota2" && (
                <span className="text-red-400 text-xs tracking-wide">DOTA 2</span>
              )}
              {item.brand === "NASCAR" && (
                <span className="text-blue-400 text-xs tracking-wide">NASCAR</span>
              )}
              {item.brand === "UFC" && (
                <span className="text-red-500 text-xs tracking-wide">UFC</span>
              )}

              {/* Only First Card Has Title + Subtitle */}
              {idx === 0 && (
                <div className="mt-1">
                  <p className="text-base sm:text-lg font-semibold">MotoGP</p>
                  <p className="text-[11px] text-white/70">{item.subtitle}</p>
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
