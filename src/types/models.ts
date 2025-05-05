
export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number; // Duration in minutes
  image: string;
  category: string;
}

export interface Professional {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  specialties: string[];
  availability: {
    days: string[];
    hours: string[];
  };
}

export interface Appointment {
  id: number;
  serviceId: number;
  professionalId: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "cancelled";
}
