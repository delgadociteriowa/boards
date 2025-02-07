import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import GamesSelection from '../../components/GamesSelection/GamesSelection';
import FeaturesSection from '../../components/FeatureSection/FeaturesSection';
import ChessSection from '../../components/ChessSection/ChessSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ChessSection />
      <GamesSelection />
    </>
  );
};

export default Home;
