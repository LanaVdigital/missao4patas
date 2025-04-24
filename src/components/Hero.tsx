import React from 'react';
import SavedLivesCounter from './SavedLivesCounter';
import heroBg from '../assets/hero-bg.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white flex items-center justify-center px-6 z-10">
      
      {/* IMAGEM DE FUNDO */}
      <img
        src={heroBg}
        alt="Cão resgatado"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />{/* PELÍCULA ESCURECIDA POR CIMA DO CACHORRO */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
      

           {/* PATINHAS FLUTUANTES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-[pawFloat_6s_ease-in-out_infinite]"
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

      {/* CONTEÚDO CENTRAL */}
      <div className="relative z-10 text-center w-full h-full flex flex-col items-center justify-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
          Doe amor. <br /> Salve vidas.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">
          Cada doação transforma a vida de um animal abandonado em uma história de amor e esperança.
        </p>

        <SavedLivesCounter />
      </div>
    </section>
  );
}



