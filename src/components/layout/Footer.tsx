// src/components/layout/Footer.tsx

import Logo from "../../assets/logos/logo-label.png";

import Linkedin from "../../assets/Icons/linkedin.png";
import Github from "../../assets/Icons/github.png";
import Twitter from "../../assets/Icons/twitter.png";
import Instagram from "../../assets/Icons/Vector.png";

import EndBanner from "../../assets/backgrounds/y61.png";

const Footer = () => {
  return (
    <footer
      className="
        relative w-full bg-[#050812]
        overflow-visible
        pt-24
        pb-[450px]
      "
    >
      {/* GLASS FOOTER PANEL */}
      <div className="relative z-[20] max-w-7xl mx-auto px-6">
        <div
          className="
            w-full rounded-[30px]
            border border-white/10
            backdrop-blur-[22px]
            bg-white/5
            shadow-[0_0_60px_rgba(0,0,0,0.35)]
            px-8 py-12 sm:px-14 sm:py-16
            flex flex-col lg:flex-row justify-between
            gap-14
          "
        >
          {/* LEFT SIDE */}
          <div className="flex-1 space-y-8 max-w-lg">
            <img src={Logo} className="h-10 opacity-95" />

            <p className="text-slate-300/90 text-[15px] leading-relaxed">
              Stay ahead of the curve — get the latest in fintech, trading, and
              iGaming innovation straight to your inbox.
            </p>

            {/* Email Input */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-sm">
              <input
                placeholder="Enter your email"
                className="
                  flex-1 px-4 py-3 rounded-xl bg-white/5
                  border border-white/10 text-sm text-white
                "
              />

              <button
                className="
                  px-6 py-3 rounded-xl text-sm text-white
                  bg-gradient-to-r from-[#E09CAB] via-[#B07CC6] to-[#7A8CEB]
                "
              >
                Submit
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-4 pt-3">
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

            {/* COPYRIGHT */}
            <p className="text-[11px] text-white leading-relaxed pt-1">
              © {new Date().getFullYear()} Momentas Group
            </p>

            {/* LEGAL DISCLAIMER — UPDATED COLOR */}
            <p className="text-[12px] text-slate-300/90 leading-relaxed max-w-xl mt-3">
              Momentas Group Holdings Ltd (“Momentas”) does not offer, endorse,
              or promote any form of gambling or financial trading to the
              public. References to affiliated brands, partners, or products are
              provided for informational and marketing purposes only. Momentas
              makes no warranties regarding the accuracy or completeness of the
              information presented on this website. Users should independently
              verify all information and seek professional advice before
              engaging with any mentioned products or services.
            </p>
          </div>

          {/* RIGHT SIDE LINKS + TAGLINE */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Nav Links */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-20 text-[14px] text-slate-200">
              {[
                "Home",
                "Innovation",
                "About",
                "Careers",
                "Vision",
                "Contact",
              ].map((item) => (
                <button key={item} className="hover:text-white transition">
                  {item}
                </button>
              ))}
            </div>

            {/* Tagline */}
            <div className="pt-14">
              <p className="text-[20px] text-white font-light leading-tight">
                Building the Digital Future.
              </p>

              <p
                className="
                  text-[26px] sm:text-[32px] font-semibold mt-1
                  bg-gradient-to-r from-white via-[#F4CCD7] to-[#C1A9E8]
                  bg-clip-text text-transparent
                "
              >
                Investing in Innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND BANNER BEHIND FOOTER */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2
          top-[80px] sm:top-[150px] md:top-[10px]
          w-[1500px]
          pointer-events-none
          z-[5]
        "
      >
        <img
          src={EndBanner}
          className="
            w-full
            h-[900px] sm:h-[1000px] md:h-[1150px]
            object-cover object-top
          "
        />
      </div>
    </footer>
  );
};

export default Footer;
