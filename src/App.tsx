import React from 'react';
import { io } from 'socket.io-client';

import Hero from './components/Hero';
import AboutCause from './components/AboutCause';
import Gallery from './components/Gallery';
import DonationImpact from './components/DonationImpact';
import Footer from './components/Footer';
import LiveDonationToast from './components/LiveDonationToast';

// 🔌 Conexão com o servidor Socket.IO (backend)
const socket = io('http://localhost:3000');

export default function App() {
  return (
    <div className="bg-orange-50 text-gray-800 font-body">
      <Hero />
      <AboutCause />
      <Gallery />
      <DonationImpact />
      <Footer />

      {/* 🚨 Toast de doação ao vivo */}
      <LiveDonationToast socket={socket} />
    </div>
  );
}
