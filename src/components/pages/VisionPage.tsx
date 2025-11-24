// src/pages/VisionPage.tsx
import React from "react";

import VisionHero from "../../components/vision/VisionHero";
import VisionRoadmap from "../../components/vision/VisionRoadmap";
import VisionJourney from "../../components/vision/VisionJourney";

const VisionPage = () => {
  return (
    <>
      <VisionHero />
      <VisionRoadmap />
      <VisionJourney />
    </>
  );
};

export default VisionPage;
