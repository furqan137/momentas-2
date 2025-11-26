// src/components/home/Hero.tsx
import React from "react";
import FullImage from "../../assets/home/hero/full-image.png";

const Hero: React.FC = () => {
  return (
    <section className="pt-0 px-0">

      <div
        className="
          relative mx-auto max-w-7xl
          rounded-[34px]
          border border-white/10
          overflow-hidden
        "
        style={{
          height: "700px",        
          marginTop: "0px"
        }}
      >
        {/* FULL HERO BG IMAGE */}
        <img
          src={FullImage}
          alt="Hero background"
          className="
            absolute inset-0
            w-full h-full
            object-cover       // 👈 Perfect crop
            object-top         // 👈 Align image exactly like Figma
          "
        />

        {/* CONTENT WRAPPER */}
        <div
          className="
            relative w-full h-full
            flex flex-col justify-end
            px-6 sm:px-14 pb-24
          "
        >
          {/* Add text later if you want */}
        </div>
      </div>

    </section>
  );
};

export default Hero;
