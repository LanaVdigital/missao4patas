const DonationImpact = () => {
  return (
    <section className="bg-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-4 text-orange-700">O Impacto da Sua Doação</h2>
        <p className="text-gray-700 mb-12">
          Qualquer valor faz diferença na vida de um animal resgatado. Veja como sua contribuição pode ajudar:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* R$10 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-orange-600 text-3xl mb-2">R$ 10</div>
            <p className="text-gray-700 mb-4">1kg de ração para um animal resgatado</p>
            <a
              href="https://buy.stripe.com/test_5kA15I7mz3AY6HKeUU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition w-full">
                Doar R$10
              </button>
            </a>
          </div>

          {/* R$50 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-orange-600 text-3xl mb-2">R$ 50</div>
            <p className="text-gray-700 mb-4">Vacinas completas para um animal</p>
            <a
              href="https://buy.stripe.com/test_eVaaGigX94F21nq3ce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition w-full">
                Doar R$50
              </button>
            </a>
          </div>

          {/* R$100 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-orange-600 text-3xl mb-2">R$ 100</div>
            <p className="text-gray-700 mb-4">Tratamento médico completo</p>
            <a
              href="https://buy.stripe.com/test_9AQbKm5er0oMeacfZ1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition w-full">
                Doar R$100
              </button>
            </a>
          </div>

          {/* R$200 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-orange-600 text-3xl mb-2">R$ 200</div>
            <p className="text-gray-700 mb-4">Resgate completo e primeiros cuidados</p>
            <a
              href="https://buy.stripe.com/test_bIY9CeayL9Zm3vy9AE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition w-full">
                Doar R$200
              </button>
            </a>
          </div>
        </div>

        {/* Botão geral de R$5 */}
        <div className="mt-10">
          <a
            href="https://buy.stripe.com/test_00g3dQbCP8Vi8PSeV0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 font-bold">
              Doe
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationImpact;
