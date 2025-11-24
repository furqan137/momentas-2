// src/components/layout/Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logos/Momentas_logo.png";
import DashboardIcon from "../../assets/Icons/Dashboard-Circle-.png";
import VectorIcon from "../../assets/Icons/Vector.png";

import MenuOverlay from "./MenuOverlay";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
        <div
          className="
            w-full rounded-[26px]
            bg-white/5 backdrop-blur-[20px]
            shadow-[0_0_40px_rgba(255,255,255,0.1)]
          "
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

            {/* LOGO → HOME */}
            <Link to="/" className="flex items-center gap-3">
              <img src={Logo} alt="Momentas" className="h-7 opacity-95" />
              <span className="text-white text-[20px] font-medium">Momentas</span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-4">

              {/* Careers */}
              <Link
                to="/careers"
                className="
                  px-7 py-2 rounded-xl text-sm font-semibold text-slate-900
                  bg-gradient-to-r from-white via-white/90 to-white/70
                  shadow-[0_0_25px_rgba(255,255,255,0.35)]
                  border border-white/40
                "
              >
                Careers
              </Link>

              {/* Open roles */}
              <Link
                to="/careers"
                className="
                  flex items-center gap-2 px-6 py-2 rounded-xl
                  border border-white/25 bg-white/5 text-white text-sm
                  hover:bg-white/10 transition
                "
              >
                <img src={VectorIcon} className="w-4 opacity-90" />
                <span>Open roles</span>
              </Link>

              {/* Menu */}
              <button
                onClick={() => setMenuOpen(true)}
                className="
                  p-2 rounded-xl border border-white/20 
                  bg-white/5 hover:bg-white/10 transition
                "
              >
                <img src={DashboardIcon} className="w-5 opacity-90" />
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20"
            >
              <img src={DashboardIcon} className="w-5 opacity-90" />
            </button>

          </div>
        </div>
      </header>

      {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
    </>
  );
};

export default Header;
