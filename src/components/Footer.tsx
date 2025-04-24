const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Coluna 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Missão 4 Patas</h3>
          <p>Transformando vidas animais desde 2020.</p>
          <p>Nossa missão é resgatar, recuperar e encontrar lares amorosos.</p>
          <p className="italic mt-2">"Transparência, Amor e Resgate"</p>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contato</h3>
          <p className="flex items-center gap-2">
            📧 doemissao4patas@gmail.com
          </p>
          <p>Atendimento: Segunda a sexta, das 9h às 18h</p>
        </div>
      </div>

      {/* Rodapé final */}
      <div className="text-center text-sm mt-8">
        <p>©{new Date().getFullYear()} Missão 4 Patas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
