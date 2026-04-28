export interface Space {
  id: number;
  name: string;
  type: string;
  capacity: number;
  location: string;
  pricePerHour: number;
  available: boolean;
}

export interface Reservation extends Space {
  hours: number;
  total: number;
}

export interface Filters {
  type: string;
  available: string;
}