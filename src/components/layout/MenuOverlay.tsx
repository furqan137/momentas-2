// src/components/layout/MenuOverlay.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logos/Momentas_logo.png";

// Social Icons
import Linkedin from "../../assets/Icons/linkedin.png";
import Github from "../../assets/Icons/github.png";
import Twitter from "../../assets/Icons/twitter.png";
import Instagram from "../../assets/Icons/openrole.png";

// Brush BG
import BrushBG from "../../assets/backgrounds/brush_color.png";

interface Props {
  onClose: () => void;
}

const MenuOverlay: React.FC<Props> = ({ onClose }) => {
  const navigate = useNavigate();

  const socialIcons = [Linkedin, Github, Twitter, Instagram];

  const handleNav = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex overflow-hidden select-none">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 backdrop-blur-[55px] bg-black/40"
        onClick={onClose}
      />

      {/* RIGHT PANEL */}
      <div
        className="
          ml-auto h-full 
          w-[88%] sm:w-[400px]
          max-w-[400px] min-w-[320px]
          bg-gradient-to-b from-[#0A0F17] via-[#111A28] to-[#182333]
          border-l border-white/10
          relative flex flex-col
          px-8 pt-9 pb-6
          animate-slideLeft

          /* MOBILE RESPONSIVE ONLY */
          max-h-screen overflow-y-auto
        "
      >

        {/* Brush BG */}
        <img
          src={BrushBG}
          className="absolute bottom-0 right-0 opacity-[0.40] w-full pointer-events-none"
        />

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-10 sm:mb-14">
          <img src={Logo} alt="Momentas Logo" className="h-7 opacity-95" />

          <button
            onClick={onClose}
            className="
              h-9 w-9 rounded-xl border border-white/20 bg-white/5
              hover:bg-white/15 transition flex items-center justify-center
            "
          >
            <span className="text-white text-xl leading-none">×</span>
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-col gap-5 sm:gap-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Vision", path: "/vision" },
            { name: "Innovation", path: "/innovation" },
            { name: "Careers", path: "/contact" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleNav(item.path)}
              className="
                flex items-center justify-between
                text-[26px] sm:text-[30px]
                text-white/90 hover:text-white
                transition font-light tracking-tight
              "
            >
              <span>{item.name}</span>
              <span className="text-[20px] sm:text-[22px] opacity-80">↗</span>
            </button>
          ))}
        </nav>

        {/* SOCIAL ICONS */}
        <div className="mt-auto flex justify-center gap-3 sm:gap-4 pt-8 sm:pt-10 pb-2">
          {socialIcons.map((icon, i) => (
            <button
              key={i}
              className="
                h-10 w-10 sm:h-10 sm:w-10
                rounded-xl bg-white/5 border border-white/10
                hover:bg-white/10 transition
                flex items-center justify-center backdrop-blur-md
              "
            >
              <img
                src={icon}
                className="h-5 w-5 opacity-90 sm:h-4 sm:w-4"
              />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MenuOverlay;
