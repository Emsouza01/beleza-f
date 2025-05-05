
import { supabase } from "@/integrations/supabase/client";
import { Service, Professional, Appointment } from "@/types/models";

export async function getServices(): Promise<Service[]> {
  const { data, error } = await supabase
    .from('services')
    .select('*');

  if (error) {
    console.error('Erro ao buscar serviços:', error);
    return [];
  }

  return data.map(service => ({
    id: service.id,
    name: service.name,
    description: service.description,
    price: Number(service.price),
    duration: service.duration,
    image: service.image,
    category: service.category
  }));
}

export async function getProfessionals(): Promise<Professional[]> {
  const { data, error } = await supabase
    .from('professionals')
    .select('*');

  if (error) {
    console.error('Erro ao buscar profissionais:', error);
    return [];
  }

  return data.map(professional => ({
    id: professional.id,
    name: professional.name,
    role: professional.role,
    image: professional.image,
    description: professional.description,
    specialties: professional.specialties,
    availability: professional.availability as Professional['availability']
  }));
}

export async function createAppointment(appointment: Omit<Appointment, 'id'>): Promise<Appointment | null> {
  const { data, error } = await supabase
    .from('appointments')
    .insert({
      service_id: appointment.serviceId,
      professional_id: appointment.professionalId,
      customer_name: appointment.customerName,
      customer_email: appointment.customerEmail,
      customer_phone: appointment.customerPhone,
      date: appointment.date,
      time: appointment.time,
      status: appointment.status
    })
    .select()
    .single();

  if (error) {
    console.error('Erro ao criar agendamento:', error);
    return null;
  }

  return {
    id: data.id,
    serviceId: data.service_id,
    professionalId: data.professional_id,
    customerName: data.customer_name,
    customerEmail: data.customer_email,
    customerPhone: data.customer_phone,
    date: data.date,
    time: data.time,
    status: data.status
  };
}
