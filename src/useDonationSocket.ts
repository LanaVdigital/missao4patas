import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

type DonationData = {
  valor: number;
  email: string;
};

const socket: Socket = io('http://localhost:3000');

export default function useDonationSocket(onDonation: (data: DonationData) => void) {
  useEffect(() => {
    const handler = (data: DonationData) => {
      onDonation(data);
    };

    socket.on('novaDoacao', handler);
    return () => {
      socket.off('novaDoacao', handler);
    };
  }, [onDonation]);
}
