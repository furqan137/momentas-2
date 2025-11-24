import React from 'react';
import Hero from '../../components/sections/Hero';
import EmpoweringNextGen from '../../components/sections/EmpoweringNextGen';
import RedefiningOnlinePlay from '../../components/sections/RedefiningOnlinePlay';
import AthleteGrid from '../../components/sections/AthleteGrid';
import EmpoweringFuture from '../../components/sections/EmpoweringFuture';
import StrategicPartnerships from '../../components/sections/StrategicPartnerships';
import DigitalVentures from '../../components/sections/DigitalVentures';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <EmpoweringNextGen />
      <RedefiningOnlinePlay />
      <AthleteGrid />
      <EmpoweringFuture />
      <StrategicPartnerships />
      <DigitalVentures />
    </>
  );
};

export default LandingPage;
