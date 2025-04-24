import { useEffect, useState } from 'react';

const SavedLivesCounter = () => {
  const [count, setCount] = useState(0);
  const target = 182;
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (count < target) {
      const timer = setTimeout(() => setCount(count + 1), 20);
      return () => clearTimeout(timer);
    } else {
      setDone(true);
    }
  }, [count]);

  return (
    <div className={`text-center text-3xl font-bold mt-4 text-orange-600 ${done ? 'animate-bounce glow' : ''}`}>
      +{count} vidas salvas
    </div>
  );
};

export default SavedLivesCounter;
