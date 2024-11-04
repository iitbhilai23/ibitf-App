import React from 'react';
import { siteContent } from '../constants/content';

import Card from '../components/Card';

import Achievements from '../components/Achievements';
import AboutSection from '../components/AboutSection';
import TribalAreaPlan from '../components/TribalAreaPlan';
import SupportBy from '../components/SupportBy';
import ImageSlider from '../components/ImageSlider';
import TechnologiesDevelopment from '../components/TechnologiesDevelopment';
import OurAwards from '../components/OurAwards';
import FeaturedProjects from '../components/FeaturedProjects';
import CollaborationSlider from '../components/Slider/Slider';




const Home = () => {
 

  return (

    <>
    
    <ImageSlider images={siteContent.sliderImages} />

      <AboutSection />
      
      {/* <HeroSection /> */}
      {/* <TribalAreaPlan /> */}
      <FeaturedProjects />
    \<OurAwards />
    <TechnologiesDevelopment />
      <Achievements />
      
      {/* <AboutSection /> */}
      <SupportBy />
      <CollaborationSlider />
    </>

  )
};

export default Home;
