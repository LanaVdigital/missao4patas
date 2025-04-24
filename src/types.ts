export interface DogProfile {
  id: number;
  name: string;
  imageUrl: string;
  story?: string;
}

export interface CarouselImage {
  id: number;
  beforeUrl: string;
  afterUrl: string;
  description: string;
}

export interface DonationOption {
  id: number;
  amount: number;
  icon: string;
  impact: string;
}