import React from "react";

// Assets
import Logo from "../../assets/logos/Momentas_logo.png";

// Social Icons
import Linkedin from "../../assets/Icons/linkedin.png";
import Github from "../../assets/Icons/github.png";
import Twitter from "../../assets/Icons/twitter.png";
import Instagram from "../../assets/Icons/Vector.png";

// Backgrounds
import MomentasBanner from "../../assets/backgrounds/Momentas_banner.png";
import BrushColor from "../../assets/backgrounds/brush_color.png";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#050812] overflow-hidden pt-24 pb-20">

      {/* ---- BACKGROUND GRADIENT IMAGES ---- */}
      <img
        src={MomentasBanner}
        className="absolute inset-0 w-full h-full object-cover opacity-[0.38] pointer-events-none select-none"
        alt=""
      />

      <img
        src={BrushColor}
        className="absolute right-0 bottom-[-120px] w-[800px] opacity-[0.25] pointer-events-none select-none"
        alt=""
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ---- GLASS CARD ---- */}
        <div
          className="
            w-full rounded-[34px]
            border border-white/10
            backdrop-blur-[22px]
            bg-white/5
            shadow-[0_0_60px_rgba(0,0,0,0.4)]
            px-8 py-12 sm:px-12 sm:py-16
            flex flex-col lg:flex-row gap-14
          "
        >
          {/* -------- LEFT SECTION -------- */}
          <div className="flex-1 space-y-7 max-w-lg">

            {/* LOGO */}
            <img src={Logo} alt="Momentas" className="h-10 opacity-95" />

            {/* TEXT */}
            <p className="text-slate-300/90 text-[15px] leading-relaxed max-w-sm">
              Stay ahead of the curve — get the latest in fintech,
              trading, and iGaming innovation straight to your inbox.
            </p>

            {/* EMAIL FORM */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-sm"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  flex-1 px-4 py-3 rounded-lg
                  bg-white/5 border border-white/15
                  text-sm text-white placeholder-slate-400
                  focus:outline-none
                "
              />

              <button
                className="
                  px-6 py-3 rounded-lg text-sm font-medium text-white
                  bg-gradient-to-r from-[#ff9b9b] via-[#f08ac5] to-[#a9b5ff]
                  hover:opacity-95 transition-all
                "
              >
                Submit
              </button>
            </form>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-2">
              {[Linkedin, Github, Twitter, Instagram].map((icon, i) => (
                <button
                  key={i}
                  className="
                    h-10 w-10 rounded-xl bg-white/5 border border-white/10
                    hover:bg-white/10 transition
                    flex items-center justify-center
                  "
                >
                  <img src={icon} className="h-4 opacity-80" alt="" />
                </button>
              ))}
            </div>

            {/* COPYRIGHT */}
            <p className="text-[11px] text-slate-400 pt-3">
              © {new Date().getFullYear()} Momentas Group
            </p>

            {/* LEGAL NOTE */}
            <p className="text-[11px] leading-relaxed text-slate-500 max-w-sm">
              Momentas Group Holdings Ltd (“Momentas”) does not offer, endorse,
              or promote any form of gambling or financial trading to the public.
              References to brands or partners are informational only. Users
              should verify all information independently.
            </p>
          </div>

          {/* -------- RIGHT SECTION -------- */}
          <div className="flex-1 flex flex-col justify-between">

            {/* NAV LINKS */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-20 text-sm text-slate-200">
              <button className="hover:text-white transition">Home</button>
              <button className="hover:text-white transition">Innovation</button>

              <button className="hover:text-white transition">About</button>
              <button className="hover:text-white transition">Careers</button>

              <button className="hover:text-white transition">Vision</button>
              <button className="hover:text-white transition">Contact</button>
            </div>

            {/* TAGLINE */}
            <div className="pt-12">
              <p className="text-xl text-white font-light leading-tight">
                Building the Digital Future.
              </p>

              <p
                className="
                  text-2xl sm:text-3xl font-semibold
                  bg-gradient-to-r from-white to-pink-200
                  bg-clip-text text-transparent leading-tight
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
