import { useEffect, useState } from 'react';

export default function TimedPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000); // aparece em 10s

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white border-4 border-orange-500 text-orange-700 px-6 py-4 rounded-full shadow-2xl z-50 flex items-center space-x-4 animate-fadeIn">
      <span className="text-2xl">❤️</span>
      <span className="text-sm font-medium">
        Com apenas <strong>R$5</strong> você ajuda a salvar um animal!
      </span>
      <a
        href="https://buy.stripe.com/cN29AEgPf1puaxG28c"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition"
      >
        Doe agora
      </a>
    </div>
  );
}
