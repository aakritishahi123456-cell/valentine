import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import ServiceGrid from '../components/ServiceGrid';
import Stats from '../components/Stats';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <ProductGrid />
      <ServiceGrid />
      <CTA />
    </div>
  );
};

export default Home;