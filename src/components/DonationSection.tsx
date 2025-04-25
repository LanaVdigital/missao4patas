const DonationSection = () => {
  const donations = [
    {
      label: 'Doar R$5',
      description: 'Ajuda simbólica, mas cheia de amor!',
      link: 'https://buy.stripe.com/test_5REAaA0Kt6WQ7AA9AA',
    },
    {
      label: 'Doar R$10',
      description: '1kg de ração para um animal resgatado',
      link: 'https://buy.stripe.com/test_5kA15I7mz3AY6HKeUU',
    },
    {
      label: 'Doar R$50',
      description: 'Vacinas completas para um animal',
      link: 'https://buy.stripe.com/test_eVaaGigX94F21nq3ce',
    },
    {
      label: 'Doar R$100',
      description: 'Tratamento médico completo',
      link: 'https://buy.stripe.com/test_9AQbKm5er0oMeacfZ1',
    },
    {
      label: 'Doar R$200',
      description: 'Resgate completo e primeiros cuidados',
      link: 'https://buy.stripe.com/test_bIY9CeayL9Zm3vy9AE',
    },
    {
      label: 'Doe com Amor (R$5)',
      description: 'Um gesto simples que faz toda a diferença ❤️',
      link: 'https://buy.stripe.com/test_00g3dQbCP8Vi8PSeV0',
    },
  ];

  return (
    <section id="doar-agora" className="bg-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-4 text-orange-700">
          Contribua com a Missão 4 Patas
        </h2>
        <p className="text-gray-700 mb-12">
          Cada valor representa um impacto real na vida dos animais que resgatamos. Escolha um valor abaixo e ajude agora.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
            >
              <div>
                <p className="text-gray-600 mb-4">{donation.description}</p>
              </div>
              <a
                href={donation.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition duration-200 w-full font-semibold">
                  {donation.label}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
