// src/components/contact/ContactPage.tsx
import React from "react";

import Linkedin from "../../assets/Icons/linkedin.png";
import Github from "../../assets/Icons/github.png";
import Twitter from "../../assets/Icons/twitter.png";
import Dashboard from "../../assets/Icons/Dashboard-Circle-.png";
import OpenRole from "../../assets/Icons/openrole.png";

const ContactPage: React.FC = () => {
  const icons = [Linkedin, Github, Twitter, Dashboard, OpenRole];

  return (
    <section className="relative bg-[#050812] min-h-screen pt-36 pb-32 overflow-hidden">

      {/* ======= DESKTOP BIG TITLE ======= */}
      <h1
        className="
          text-center
          text-[48px] sm:text-[72px] lg:text-[92px]
          font-light leading-none tracking-tight
          bg-gradient-to-b from-white via-[#debde7] to-[#c79ab6]
          bg-clip-text text-transparent opacity-80
          max-sm:opacity-0 max-sm:h-0 max-sm:overflow-hidden
        "
      >
        Contact Us
      </h1>

      {/* ======= MOBILE TITLE (new) ======= */}
      <h1
        className="
          sm:hidden text-center 
          text-[34px] leading-none 
          bg-gradient-to-b from-white via-[#debde7] to-[#c79ab6]
          bg-clip-text text-transparent opacity-90 mb-4
        "
      >
        Contact Us
      </h1>

      {/* ====================================================
                GLASS CARD  (desktop unchanged)
      ==================================================== */}
      <div
        className="
          mx-auto max-w-4xl
          mt-10 px-6 py-10 sm:px-10 sm:py-12
          rounded-3xl border border-white/10
          bg-white/5 backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.35)]
          
          /* MOBILE WIDTH FIX */
          max-sm:max-w-[92%] max-sm:px-5 max-sm:py-7
        "
      >
        {/* TITLE */}
        <h2
          className="
            text-[28px] sm:text-[34px]
            text-white font-light tracking-tight mb-8
            max-sm:text-[24px] max-sm:mb-5
          "
        >
          Get in <span className="text-[#d8a9c6] font-normal">touch</span>
        </h2>

        {/* FORM GRID */}
        <div className="grid sm:grid-cols-2 gap-6 max-sm:gap-4">

          {/* NAME */}
          <input
            type="text"
            placeholder="Enter your name"
            className="
              w-full rounded-xl bg-white/5 border border-white/10
              py-3 px-4 text-sm text-white placeholder-white/50
              focus:outline-none focus:border-white/30

              max-sm:py-2.5 max-sm:text-[13px]
            "
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full rounded-xl bg-white/5 border border-white/10
              py-3 px-4 text-sm text-white placeholder-white/50
              focus:outline-none focus:border-white/30
              
              max-sm:py-2.5 max-sm:text-[13px]
            "
          />

          {/* MESSAGE */}
          <textarea
            rows={4}
            placeholder="Write something..."
            className="
              sm:col-span-2 rounded-xl bg-white/5 border border-white/10
              py-3 px-4 text-sm text-white placeholder-white/50 resize-none
              focus:outline-none focus:border-white/30

              max-sm:py-2.5 max-sm:text-[13px]
            "
          ></textarea>
        </div>

        {/* BOTTOM ROW */}
        <div className="
          mt-8 flex flex-col sm:flex-row justify-between items-center gap-6
          max-sm:mt-6
        ">

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 max-sm:gap-3">
            {icons.map((icon, index) => (
              <button
                key={index}
                className="
                  h-10 w-10 rounded-xl bg-white/5 border border-white/10
                  flex items-center justify-center hover:bg-white/10 transition

                  max-sm:h-9 max-sm:w-9
                "
              >
                <img
                  src={icon}
                  alt="social"
                  className="h-5 w-5 opacity-85 max-sm:h-4 max-sm:w-4"
                />
              </button>
            ))}
          </div>

          {/* SEND MESSAGE BUTTON */}
          <button
            className="
              px-8 py-2.5 rounded-xl text-sm font-medium text-white
              bg-gradient-to-r from-[#ff9b9b] via-[#f08ac5] to-[#a9b5ff]
              shadow-md shadow-pink-400/20 hover:opacity-90 transition

              max-sm:w-full max-sm:py-3
            "
          >
            Send message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
