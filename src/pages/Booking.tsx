
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getServices, getProfessionals, createAppointment } from "@/services/api";
import { Service, Professional } from "@/types/models";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  // Data states
  const [services, setServices] = useState<Service[]>([]);
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [loading, setLoading] = useState(true);

  // Form states
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedProfessional, setSelectedProfessional] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Available times based on professional's schedule
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  
  // Fetch services and professionals
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [servicesData, professionalsData] = await Promise.all([
          getServices(),
          getProfessionals()
        ]);
        
        setServices(servicesData);
        setProfessionals(professionalsData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar os dados. Tente novamente mais tarde.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);
  
  // Get any pre-selected service or professional from URL
  useEffect(() => {
    const serviceId = searchParams.get("serviceId");
    const professionalId = searchParams.get("professionalId");
    
    if (serviceId) {
      setSelectedService(serviceId);
    }
    
    if (professionalId) {
      setSelectedProfessional(professionalId);
    }
  }, [searchParams]);
  
  // Update available times when professional or date changes
  useEffect(() => {
    if (selectedProfessional && selectedDate) {
      const professional = professionals.find(p => p.id === selectedProfessional);
      if (professional) {
        const dayOfWeek = format(selectedDate, "EEEE");
        // Convert English day name to Portuguese
        const dayMap: Record<string, string> = {
          "Monday": "Segunda",
          "Tuesday": "Terça",
          "Wednesday": "Quarta",
          "Thursday": "Quinta",
          "Friday": "Sexta",
          "Saturday": "Sábado",
          "Sunday": "Domingo"
        };
        
        // Check if professional works on selected day
        if (professional.availability.days.includes(dayMap[dayOfWeek])) {
          setAvailableTimes(professional.availability.hours);
        } else {
          setAvailableTimes([]);
          setSelectedTime("");
          toast({
            title: "Profissional indisponível",
            description: `${professional.name} não atende neste dia.`,
            variant: "destructive"
          });
        }
      }
    } else {
      setAvailableTimes([]);
      setSelectedTime("");
    }
  }, [selectedProfessional, selectedDate, professionals, toast]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!selectedService || !selectedProfessional || !selectedDate || !selectedTime || !name || !email || !phone) {
      toast({
        title: "Formulário incompleto",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Create appointment
      const appointment = await createAppointment({
        serviceId: selectedService,
        professionalId: selectedProfessional,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        date: format(selectedDate, "yyyy-MM-dd"),
        time: selectedTime,
        status: "pending"
      });
      
      if (appointment) {
        // Find service and professional objects
        const service = services.find(s => s.id === selectedService);
        const professional = professionals.find(p => p.id === selectedProfessional);
        
        // Success message
        toast({
          title: "Agendamento realizado com sucesso!",
          description: `Seu horário com ${professional?.name} para ${service?.name} no dia ${format(selectedDate, "dd/MM/yyyy")} às ${selectedTime} foi agendado. Enviaremos uma confirmação por email.`,
        });
        
        // Reset form
        setSelectedService("");
        setSelectedProfessional("");
        setSelectedDate(undefined);
        setSelectedTime("");
        setName("");
        setEmail("");
        setPhone("");
        setNotes("");
      }
    } catch (error) {
      console.error("Erro ao criar agendamento:", error);
      toast({
        title: "Erro no agendamento",
        description: "Não foi possível realizar o agendamento. Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Filter professionals based on selected service
  const filteredProfessionals = selectedService
    ? professionals.filter(pro => {
        const service = services.find(s => s.id === selectedService);
        return service && pro.specialties.some(spec => spec.includes(service.category));
      })
    : professionals;

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen">
          <div className="salon-container py-20 text-center">
            <p className="text-lg">Carregando...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-r from-salon-pink/30 to-salon-lavender/30 py-16">
          <div className="salon-container text-center">
            <h1 className="text-4xl font-bold mb-4">Agendamento</h1>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Agende seu horário em poucos passos e prepare-se para uma experiência de beleza transformadora.
            </p>
          </div>
        </section>
        
        {/* Booking Form */}
        <section className="py-16">
          <div className="salon-container max-w-4xl">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Service Selection */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="service">Serviço</Label>
                  <Select
                    value={selectedService}
                    onValueChange={(value) => {
                      setSelectedService(value);
                      setSelectedProfessional("");
                    }}
                  >
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} - R$ {service.price.toFixed(2)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Professional Selection */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="professional">Profissional</Label>
                  <Select
                    value={selectedProfessional}
                    onValueChange={setSelectedProfessional}
                    disabled={!selectedService}
                  >
                    <SelectTrigger id="professional">
                      <SelectValue placeholder={selectedService ? "Selecione um profissional" : "Selecione um serviço primeiro"} />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredProfessionals.map((professional) => (
                        <SelectItem key={professional.id} value={professional.id}>
                          {professional.name} - {professional.role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Date Selection */}
                <div className="space-y-2">
                  <Label>Data</Label>
                  <div className="border rounded-md p-3">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => {
                        return date < new Date(new Date().setHours(0, 0, 0, 0));
                      }}
                      className="mx-auto pointer-events-auto"
                    />
                  </div>
                </div>
                
                {/* Time and Personal Info */}
                <div className="space-y-6">
                  {/* Time Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="time">Horário</Label>
                    <Select
                      value={selectedTime}
                      onValueChange={setSelectedTime}
                      disabled={availableTimes.length === 0}
                    >
                      <SelectTrigger id="time">
                        <SelectValue placeholder={
                          !selectedProfessional 
                            ? "Selecione um profissional primeiro" 
                            : !selectedDate 
                            ? "Selecione uma data primeiro"
                            : availableTimes.length === 0
                            ? "Sem horários disponíveis"
                            : "Selecione um horário"
                        } />
                      </SelectTrigger>
                      <SelectContent>
                        {availableTimes.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Personal Information */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                {/* Notes */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="notes">Observações (opcional)</Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Alguma informação adicional que devemos saber?"
                    rows={3}
                  />
                </div>
                
                {/* Submit Button */}
                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    className="w-full bg-salon-rose text-white hover:bg-salon-rose/90"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processando..." : "Confirmar Agendamento"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </section>
        
        {/* Information Section */}
        <section className="py-12 bg-muted">
          <div className="salon-container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-salon-dark">Política de Cancelamento</h3>
                <p className="text-foreground/70">
                  Você pode cancelar ou remarcar seu agendamento com até 24 horas de antecedência sem custos adicionais.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-salon-dark">Pagamento</h3>
                <p className="text-foreground/70">
                  Aceitamos dinheiro, cartões de débito e crédito, PIX e transferências bancárias no momento do atendimento.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-salon-dark">Horário de Chegada</h3>
                <p className="text-foreground/70">
                  Recomendamos chegar 10-15 minutos antes do horário agendado para check-in e preparação.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Booking;
