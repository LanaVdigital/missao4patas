import { useEffect, useState } from 'react';

const messages = [
  '“Adotamos a Nina, hoje ela dorme no sofá com minha filha.” – Família Silva',
  '“Doar salvou uma vida... e preencheu a nossa.” – João e Carla',
  '“A Bella trouxe alegria e bagunça. Não troco por nada!” – Tia Lourdes'
];

const TestimonialTyper = () => {
  const [text, setText] = useState('');
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < messages[msgIndex].length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + messages[msgIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setCharIndex(0);
        setText('');
        setMsgIndex((msgIndex + 1) % messages.length);
      }, 4000);
    }
  }, [charIndex, msgIndex]);

  return (
    <p className="mt-6 text-center italic text-white text-lg">{text}|</p>
  );
};

export default TestimonialTyper;
