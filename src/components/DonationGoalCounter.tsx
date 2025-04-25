import React from 'react';

export default function DonationGoalCounter() {
  const goal = 200;
  const current = 65;
  const remaining = goal - current;

  return (
    <div className="mt-4 text-orange-300 font-semibold text-sm">
      🥅 Meta de hoje: R${goal} <br />
      📈 Atingido: R${current} <br />
      🔥 Faltam: R${remaining}
    </div>
  );
}
