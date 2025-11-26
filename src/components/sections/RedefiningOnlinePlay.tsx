// src/components/sections/RedefiningOnlinePlay.tsx

import React from "react";
import RefineImage from "../../assets/Refining-online-play/refine.png";

const RedefiningOnlinePlay: React.FC = () => {
  return (
    <section className="w-full p-0 m-0 bg-white">
      <div className="w-full mx-auto p-0 m-0">
        <img
          src={RefineImage}
          alt="Redefining Online Play"
          className="
            w-full
            h-auto
            object-cover
            block
            select-none
            pointer-events-none
          "
        />
      </div>
    </section>
  );
};

export default RedefiningOnlinePlay;
