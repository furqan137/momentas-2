// src/components/about/AboutHero.tsx
import React from "react";

// Background assets
import BlurTop from "../../assets/about/hero-blur-top.png";
import BlurMid from "../../assets/about/hero-blur-mid.png";
import HeroLine from "../../assets/about/hero-line.png";

// Cards
import MakeItHappen from "../../assets/about/makeithappen1.png";
import WhiteCard1 from "../../assets/about/white-card-1.png";
import WhiteCard2 from "../../assets/about/white-card-2.png";

const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#050812] pt-16 sm:pt-20 md:pt-24 pb-28">

      {/* BLUR BACKGROUNDS */}
      <img src={BlurTop} className="absolute top-0 left-0 w-[450px] sm:w-[600px] md:w-[720px] opacity-[0.55] z-0 pointer-events-none" />
      <img src={BlurMid} className="absolute top-[220px] left-[70px] sm:left-[150px] md:left-[240px] w-[360px] sm:w-[480px] md:w-[600px] opacity-[0.65] z-0 pointer-events-none" />

      {/* HERO LINE (now visible) */}
      <img
        src={HeroLine}
        className="
          absolute
          right-[10px]
          top-1/2 -translate-y-1/2
          h-[480px] sm:h-[620px] md:h-[760px]
          opacity-[0.95]
          z-[5]
          translate-x-[-20px]   /* Bring it inside screen */
        "
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 flex flex-col lg:flex-row items-center lg:items-start gap-20 lg:gap-32">

        {/* LEFT TEXT */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-white font-light tracking-tight leading-[1.06] text-[38px] sm:text-[50px] md:text-[64px] lg:text-[70px]">
            Uniting the world with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 font-medium">
              fearless entertainment
            </span>
          </h1>

          <p className="text-slate-300/90 text-[16px] sm:text-[18px] max-w-md mx-auto lg:mx-0 leading-relaxed">
            We’re creating the future of boundary-breaking tech — building
            experiences that capture attention, drive communities, and reshape
            how people play, watch, and connect.
          </p>

          <button className="px-8 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#FF9B9B] via-[#F08AC5] to-[#A9B5FF] shadow-lg shadow-pink-300/20 hover:opacity-90 transition">
            About Us
          </button>
        </div>

        {/* RIGHT CARD GROUP */}
        <div className="relative flex-1 flex justify-center lg:justify-end w-full">

          {/* WHITE CARD BACK */}
          <img
            src={WhiteCard2}
            className="
              absolute top-[90px] right-[60px]
              w-[230px] sm:w-[270px] md:w-[310px]
              opacity-[0.22] z-[2]
            "
          />

          {/* WHITE CARD MIDDLE */}
          <img
            src={WhiteCard1}
            className="
              absolute top-[20px] right-[5px]
              w-[250px] sm:w-[300px] md:w-[340px]
              opacity-[0.40] z-[3]
            "
          />

          {/* MAIN CARD — smaller + shifted left */}
          <div
            className="
              relative
              max-w-[280px] sm:max-w-[320px] md:max-w-[360px]
              rounded-[26px]
              overflow-hidden
              bg-[#101322]/40 backdrop-blur-xl
              shadow-[0_40px_120px_rgba(0,0,0,0.7)]
              z-[4]
              mr-[50px]     /* shift card left */
            "
          >
            <img
              src={MakeItHappen}
              className="w-full h-full object-cover rounded-[22px] ml-[-12px]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;
