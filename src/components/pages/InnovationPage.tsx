// src/components/pages/InnovationPage.tsx
import React from "react";
import InnovationHero from "../innovation/InnovationHero";
import InnovationLogic from "../innovation/InnovationLogic";
import InnovationFeatures from "../innovation/InnovationFeatures";
import InnovationCollab from "../innovation/InnovationCollab";

const InnovationPage: React.FC = () => {
  return (
    <>
      <InnovationHero />
      <InnovationLogic />
      <InnovationFeatures />
      <InnovationCollab />
    </>
  );
};

export default InnovationPage;
