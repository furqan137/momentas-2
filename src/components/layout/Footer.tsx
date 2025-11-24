// src/components/layout/Footer.tsx
import React from "react";

import Logo from "../../assets/logos/Momentas_logo.png";

import Linkedin from "../../assets/Icons/linkedin.png";
import Github from "../../assets/Icons/github.png";
import Twitter from "../../assets/Icons/twitter.png";
import Instagram from "../../assets/Icons/Vector.png";

import MomentasBanner from "../../assets/backgrounds/Momentas_banner.png";
import BrushColor from "../../assets/backgrounds/brush_color.png";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#050812] overflow-hidden pt-24 pb-20">

      {/* Background */}
      <img
        src={MomentasBanner}
        className="absolute inset-0 w-full h-full object-cover opacity-[0.38]"
        alt=""
      />

      <img
        src={BrushColor}
        className="absolute right-0 bottom-[-120px] w-[800px] opacity-[0.25]"
        alt=""
      />

      <div className="relative max-w-7xl mx-auto px-6">

        <div
          className="
            w-full rounded-[34px]
            border border-white/10
            backdrop-blur-[22px] bg-white/5
            shadow-[0_0_60px_rgba(0,0,0,0.4)]
            px-8 py-12 sm:px-12 sm:py-16
            flex flex-col lg:flex-row gap-14
          "
        >

          {/* LEFT */}
          <div className="flex-1 space-y-7 max-w-lg">
            <img src={Logo} className="h-10 opacity-95" />

            <p className="text-slate-300/90 text-[15px] leading-relaxed">
              Stay ahead of the curve — get the latest in innovation and updates.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-sm">
              <input
                placeholder="Enter your email"
                className="
                  flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/15
                  text-sm text-white placeholder-slate-400
                "
              />

              <button
                className="
                  px-6 py-3 rounded-lg text-sm text-white
                  bg-gradient-to-r from-[#ff9b9b] via-[#f08ac5] to-[#a9b5ff]
                "
              >
                Submit
              </button>
            </form>

            {/* Social */}
            <div className="flex gap-4 pt-2">
              {[Linkedin, Github, Twitter, Instagram].map((icon, i) => (
                <button
                  key={i}
                  className="
                    h-10 w-10 rounded-xl bg-white/5 border border-white/10
                    hover:bg-white/10 transition flex items-center justify-center
                  "
                >
                  <img src={icon} className="h-4 opacity-80" />
                </button>
              ))}
            </div>

            <p className="text-[11px] text-slate-400 pt-3">
              © {new Date().getFullYear()} Momentas Group
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-y-4 gap-x-20 text-sm text-slate-200">
              {["Home", "Innovation", "About", "Careers", "Vision", "Contact"].map((item) => (
                <button key={item} className="hover:text-white transition">
                  {item}
                </button>
              ))}
            </div>

            <div className="pt-12">
              <p className="text-xl text-white font-light leading-tight">
                Building the Digital Future.
              </p>
              <p
                className="
                  text-2xl sm:text-3xl font-semibold
                  bg-gradient-to-r from-white to-pink-200
                  bg-clip-text text-transparent
                "
              >
                Investing in Innovation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
