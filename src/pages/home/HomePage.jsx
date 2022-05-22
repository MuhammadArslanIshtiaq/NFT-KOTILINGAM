import React from 'react';
import AboutSection from './sections/AboutSection';
import CardsSection from './sections/CardsSection';
import ConnectSection from './sections/ConnectSection';
import HeroSection from './sections/HeroSection';
import LiveMintSection from './sections/LiveMintSection';
import OurTeamSection from './sections/OurTeamSection';
import RoadMapSection from './sections/RoadMapSection';
import TopCollectionsSection from './sections/TopCollectionsSection';

const HomePage = () => {
  return (
    <main id='home'>
      <HeroSection />
      <AboutSection />
      <RoadMapSection />
      <CardsSection />
      <TopCollectionsSection />
      <OurTeamSection />
      <LiveMintSection />
      <ConnectSection />
    </main>
  );
};

export default HomePage;
