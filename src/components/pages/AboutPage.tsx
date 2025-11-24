// src/components/pages/AboutPage.tsx
import React from "react";

import AboutHero from "../about/AboutHero";
import CoreCapabilities from "../about/CoreCapabilities";
import DisruptSection from "../about/DisruptSection";
import KeyFeatures from "../about/KeyFeatures";
import DigitalVentures from "../sections/DigitalVentures";

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <AboutHero />
      <CoreCapabilities />
      <DisruptSection />
      <KeyFeatures />
      <DigitalVentures />
    </div>
  );
};

export default AboutPage;
