import React from 'react';

const Gallery: React.FC = () => {
  const dogs = [
    { name: 'Luna', story: 'Sofria maus-tratos, agora corre livre.', img: '/doguinho1.jpg' },
    { name: 'Thor', story: 'Hoje é o mascote de uma escola.', img: '/doguinho2.jpg' },
    { name: 'Nina', story: 'Agora conhece o que é amor de verdade.', img: '/doguinho3.jpg' },
    { name: 'Bella', story: 'Foi abandonada com seus filhotes.', img: '/doguinho5.jpg' },
    { name: 'Duke', story: 'Hoje vive cercado de carinho.', img: '/doguinho6.jpg' },
    { name: 'Simba', story: 'Superou a fome e o abandono.', img: '/doguinho7.jpg' },
  ];

  return (
    <section className="py-16 px-4 bg-orange-50" id="galeria">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-6">Vidas Transformadas</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Conheça alguns dos animais que já resgatamos. Cada um deles tem uma história de superação e transformação graças às doações de pessoas como você.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogs.map((dog, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dog.img}
                  alt={`Imagem de ${dog.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-xl text-orange-700 mb-2">{dog.name}</h3>
                <p className="text-gray-600 text-sm">{dog.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
