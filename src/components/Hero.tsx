import React from 'react';
import { FakeDonationStream } from './FakeDonationStream';
import DonationGoalCounter from './DonationGoalCounter';
import SavedLivesCounter from './SavedLivesCounter';
import TimedPopup from './TimedPopup';
import heroBg from '../assets/hero-bg.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white flex items-center justify-center px-6 z-10">
      
      <img
        src={heroBg}
        alt="Cão resgatado"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 12}px`,
              opacity: 0.2
            }}
          >
            🐾
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center w-full h-full flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
          Doe amor. <br /> Salve vidas.
        </h1>

        <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">
          Cada doação transforma a vida de um animal abandonado em uma história de amor e esperança.
        </p>

        <div className="mt-6">
          <a
            href="https://buy.stripe.com/cN29AEgPf1puaxG28c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-xl text-lg animate-pulse tracking-wide">
              Doe agora e salve uma vida
            </button>
          </a>
        </div>

        <DonationGoalCounter />
        <p className="text-sm text-orange-300 mt-2">+20 doações registradas nas últimas 24h</p>
        <SavedLivesCounter />

        <FakeDonationStream />
        <TimedPopup />
      </div>
    </section>
  );
}
