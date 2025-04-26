import React, { useEffect, useState } from 'react';

interface DonationData {
  valor: number;
  email: string;
}

export default function LiveDonationToast({ socket }: { socket: any }) {
  const [donation, setDonation] = useState<DonationData | null>(null);

  useEffect(() => {
    socket.on('novaDoacao', (data: DonationData) => {
      setDonation(data);

      setTimeout(() => {
        setDonation(null);
      }, 5000); // some em 5s
    });

    return () => socket.off('novaDoacao');
  }, [socket]);

  if (!donation) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-orange-100 border border-orange-500 text-orange-800 px-4 py-3 rounded shadow-xl z-50 animate-bounce">
      <strong>🎉 Nova doação!</strong>
      <p>{donation.email} - R${donation.valor}</p>
    </div>
  );
}
