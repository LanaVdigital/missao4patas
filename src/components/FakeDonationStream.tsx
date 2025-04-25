import { useEffect, useState } from 'react';

const fakeDonors = [
  'João de São Paulo - R$5',
  'Maria do Rio - R$15',
  'Ana de BH - R$10',
  'Carlos de Curitiba - R$20',
  'Fernanda de Recife - R$50',
  'Guilherme de Manaus - R$5',
  'Luciana de Porto Alegre - R$100',
];

export const FakeDonationStream = () => {
  const [donation, setDonation] = useState(fakeDonors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * fakeDonors.length);
      setDonation(fakeDonors[index]);
    }, 12000); // troca a cada 12 SEGUNDOS, bem natural
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-orange-100 text-orange-800 px-4 py-3 rounded-lg shadow-lg border border-orange-400 font-medium transition-opacity duration-700 ease-in-out">
      <strong>Nova doação recebida:</strong><br />
      {donation}
    </div>
  );
};
