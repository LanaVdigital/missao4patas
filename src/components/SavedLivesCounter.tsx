import { useEffect, useState } from 'react';
import useDonationSocket from '../useDonationSocket'

type DonationData = {
  valor: number;
  email: string;
};

const SavedLivesCounter = () => {
  const [count, setCount] = useState<number>(0);
  const [done, setDone] = useState<boolean>(false);
  const target = 182;

  // 💥 Animação inicial até atingir a meta
  useEffect(() => {
    if (count >= target) {
      setDone(true);
      return;
    }

    const timer = setTimeout(() => setCount((prev) => prev + 1), 20);
    return () => clearTimeout(timer);
  }, [count]);

  // ⚡ Atualiza com socket quando rola doação
  useDonationSocket((data: DonationData) => {
    console.log('🔥 Doação recebida em tempo real:', data);
    setCount((prev) => prev + 1);
  });

  return (
    <div
      className={`text-center text-3xl font-bold mt-4 text-orange-600 ${
        done ? 'animate-bounce glow' : ''
      }`}
    >
      +{count} vidas salvas
    </div>
  );
};

export default SavedLivesCounter;
