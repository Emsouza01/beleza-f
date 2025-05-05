
export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // Duration in minutes
  image: string;
  category: string;
}

export interface Professional {
  id: string;
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
  id: string;
  serviceId: string;
  professionalId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "cancelled";
}
