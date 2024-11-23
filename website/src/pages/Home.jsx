import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Skills from '../components/home/Skills';
import Contact from '../components/home/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;