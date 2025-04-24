import React from "react";
import dog01 from "../assets/dog-01.jpg";
import dog02 from "../assets/dog-02.jpg";
import dog03 from "../assets/dog-03.jpg";
import dog04 from "../assets/dog-04.jpg";
import dog05 from "../assets/dog-05.jpg";

const images = [dog01, dog02, dog03, dog04, dog05];

const AboutCause: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white" id="sobre">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 text-gray-800">
          Sobre a Causa
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-2xl mb-4 text-orange-700">Nossa Missão</h3>
            <p className="text-gray-700 mb-4">
              A Missão 4 Patas nasceu da vontade de transformar a vida de animais abandonados e vítimas de maus-tratos em nossa comunidade.
              Nosso trabalho consiste em resgatar, reabilitar, e encontrar lares amorosos para esses animais.
            </p>
            <p className="text-gray-700 mb-4">
              Com mais de 200 resgates realizados desde nossa fundação, atuamos em parceria com veterinários e voluntários dedicados
              que compartilham do mesmo objetivo: garantir dignidade e amor para todos os animais.
            </p>
            <p className="text-gray-700">
              Sua doação é fundamental para mantermos nosso trabalho e ampliarmos nossa capacidade de resgate e cuidados com esses
              animais que tanto precisam de ajuda.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-2">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Cão resgatado ${i + 1}`}
                  className="rounded-lg shadow-md object-cover w-full h-48"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCause;
