import React from 'react';
import Hero from './components/Hero';
import AboutCause from './components/AboutCause';
import Gallery from './components/Gallery';
import DonationImpact from './components/DonationImpact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-orange-50 text-gray-800 font-body">
      <Hero />
      <AboutCause />
      <Gallery />
      <DonationImpact />
      <Footer />
    </div>
  );
}

