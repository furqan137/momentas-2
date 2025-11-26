// src/components/sections/EmpoweringFuture.tsx

import React from "react";
import EmpowerImage from "../../assets/Empowering-future/empower.png";

const EmpoweringFuture: React.FC = () => {
  return (
    <section
      className="
        w-full 
        bg-white 
        relative 
        overflow-hidden 
        pt-24     /* blank space on top */
      "
    >

      {/* Soft background gradient like Figma */}
      <div
        className="
          absolute 
          inset-0 
          bg-gradient-to-b 
          from-white 
          via-[#FFEFEF]/70 
          to-white 
          pointer-events-none 
          select-none
          z-0
        "
      />

      {/* Main Image */}
      <div className="w-full mx-auto relative z-10">
        <img
          src={EmpowerImage}
          alt="Empowering the Future of Fintech, Trading & iGaming"
          className="
            w-full
            h-auto
            object-cover
            select-none
            pointer-events-none
            block
          "
        />
      </div>

      {/* Extra white space below (to match the figma section spacing) */}
      <div className="h-1"></div>
      
    </section>
  );
};

export default EmpoweringFuture;
