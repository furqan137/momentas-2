import React from "react";

// Assets
import Logo from "../../assets/logos/Momentas_logo.png";
import Ellipse from "../../assets/backgrounds/Ellipse.png";
import EllipseCircle from "../../assets/backgrounds/Ellipse-circle.png";
import Star from "../../assets/Icons/Vector.png";

const BrandEndingBanner: React.FC = () => {
  return (
    <section className="relative w-full bg-[#060A11] py-20 sm:py-28 overflow-hidden">

      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,160,160,0.18),_transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1E28] via-[#12151E] to-[#0A0F18] opacity-90" />

      {/* MAIN GLASS CARD */}
      <div
        className="
          relative mx-auto 
          max-w-[95%] sm:max-w-[90%] md:max-w-[1400px]
          rounded-[32px] sm:rounded-[48px] md:rounded-[56px]
          border border-white/10
          bg-white/5
          backdrop-blur-2xl
          px-6 sm:px-12 md:px-20
          py-20 sm:py-28
          shadow-[0_0_80px_rgba(0,0,0,0.45)]
          overflow-hidden
        "
      >

        {/* CENTER LOGO & TEXT */}
        <div className="flex flex-col items-center justify-center gap-6 text-center">

          {/* LOGO ROW */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <img
              src={Logo}
              alt="Momentas"
              className="h-14 sm:h-20 md:h-28 w-auto drop-shadow-xl select-none"
            />

            <span className="
              text-white 
              text-4xl sm:text-6xl md:text-8xl 
              font-light tracking-tight
            ">
              Momentas
            </span>

            <span className="
              text-white 
              text-xl sm:text-3xl md:text-4xl
              mt-4 sm:mt-7 font-light
            ">
              ™
            </span>
          </div>
        </div>

        {/* STAR DECORATIONS (RESPONSIVE) */}
        <img
          src={Star}
          className="absolute left-6 sm:left-10 top-10 sm:top-16 h-5 sm:h-7 opacity-30 select-none"
          alt=""
        />
        <img
          src={Star}
          className="absolute right-6 sm:right-10 top-10 sm:top-16 h-5 sm:h-7 opacity-30 select-none"
          alt=""
        />

        {/* BOTTOM GLOW ELEMENTS */}
        <img
          src={Ellipse}
          className="absolute bottom-0 left-[-10%] sm:left-0 w-[120%] sm:w-[70%] opacity-40 select-none"
          alt=""
        />
        <img
          src={EllipseCircle}
          className="absolute bottom-[-5%] right-[-10%] sm:right-0 w-[120%] sm:w-[65%] opacity-35 select-none"
          alt=""
        />
      </div>
    </section>
  );
};

export default BrandEndingBanner;
