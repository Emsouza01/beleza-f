
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada",
      description: "Agradecemos seu contato! Responderemos em breve.",
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };
  
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-r from-salon-pink/30 to-salon-lavender/30 py-16">
          <div className="salon-container text-center">
            <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Estamos à disposição para responder suas dúvidas, ouvir sugestões ou agendar um horário.
            </p>
          </div>
        </section>
        
        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="salon-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome completo" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input id="subject" placeholder="Motivo do contato" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Escreva sua mensagem aqui..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-salon-rose text-white hover:bg-salon-rose/90">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                
                <div className="bg-muted p-8 rounded-lg mb-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                      <p className="text-foreground/80">Rua das Flores, 123</p>
                      <p className="text-foreground/80">Jardim Primavera</p>
                      <p className="text-foreground/80">São Paulo, SP - CEP 04000-000</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Telefone</h3>
                      <p className="text-foreground/80">(11) 9999-9999</p>
                      <p className="text-foreground/80">(11) 8888-8888</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-foreground/80">contato@beleza.com</p>
                      <p className="text-foreground/80">agendamento@beleza.com</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Horário de Funcionamento</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-foreground/80">Segunda-Feira:</p>
                        <p className="text-foreground/80">9h às 20h</p>
                        
                        <p className="text-foreground/80">Terça-Feira:</p>
                        <p className="text-foreground/80">9h às 20h</p>
                        
                        <p className="text-foreground/80">Quarta-Feira:</p>
                        <p className="text-foreground/80">9h às 20h</p>
                        
                        <p className="text-foreground/80">Quinta-Feira:</p>
                        <p className="text-foreground/80">9h às 20h</p>
                        
                        <p className="text-foreground/80">Sexta-Feira:</p>
                        <p className="text-foreground/80">9h às 20h</p>
                        
                        <p className="text-foreground/80">Sábado:</p>
                        <p className="text-foreground/80">9h às 18h</p>
                        
                        <p className="text-foreground/80">Domingo:</p>
                        <p className="text-foreground/80">Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map Placeholder */}
                <div className="bg-muted h-[300px] rounded-lg flex items-center justify-center">
                  <p className="text-foreground/60">Mapa do Google seria exibido aqui</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-muted">
          <div className="salon-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Aqui estão algumas das perguntas mais comuns que recebemos.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Preciso agendar com antecedência?</h3>
                <p className="text-foreground/80">
                  Sim, recomendamos que agende seus serviços com pelo menos 48 horas de antecedência, especialmente para os horários mais procurados como finais de semana.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Vocês atendem em domicílio?</h3>
                <p className="text-foreground/80">
                  No momento, não oferecemos serviços em domicílio. Todos os nossos atendimentos são realizados em nosso salão.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Vocês têm estacionamento?</h3>
                <p className="text-foreground/80">
                  Sim, contamos com estacionamento próprio para nossos clientes com manobrista disponível.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Posso levar crianças?</h3>
                <p className="text-foreground/80">
                  Sim, temos um espaço kids para que as crianças possam se divertir enquanto você aproveita nossos serviços. Para crianças menores de 12 anos, oferecemos também serviços específicos.
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

export default Contact;
