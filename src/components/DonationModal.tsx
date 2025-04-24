import React, { useRef } from 'react';
import { Copy, X } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const emailRef = useRef<HTMLDivElement>(null);
  const pixEmail = 'doe@missao4patas.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixEmail)
      .then(() => {
        alert('Chave PIX copiada!');
      })
      .catch(err => {
        console.error('Erro ao copiar: ', err);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative animate-fadeIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>
        
        <h2 className="font-serif text-2xl text-center mb-6">Doe via PIX</h2>
        
        <div className="flex flex-col items-center">
          {/* QR Code Placeholder - In a real app, this would be a generated QR code */}
          <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-6 border-2 border-gray-200">
            <div className="text-gray-400 text-center p-4">
              QR Code PIX
              <div className="mt-2 grid grid-cols-5 grid-rows-5 gap-1">
                {Array(25).fill(0).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-full aspect-square ${Math.random() > 0.65 ? 'bg-black' : 'bg-transparent'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mb-2">Ou use nossa chave PIX:</p>
          
          <div 
            ref={emailRef}
            className="bg-gray-100 p-3 rounded-lg flex items-center justify-between w-full mb-6"
          >
            <span className="font-medium select-all">{pixEmail}</span>
            <button 
              onClick={copyToClipboard}
              className="text-orange-500 hover:text-orange-600 ml-2"
              aria-label="Copiar chave PIX"
            >
              <Copy size={20} />
            </button>
          </div>
          
          <p className="text-sm text-gray-500 text-center">
            Sua doação ajuda a salvar vidas e transformar histórias. Agradecemos de coração!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;