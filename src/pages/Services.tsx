
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getServices } from "@/services/api";
import { Service } from "@/types/models";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const servicesData = await getServices();
        setServices(servicesData);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar os serviços. Tente novamente mais tarde.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [toast]);

  const categories = [...new Set(services.map(service => service.category))];
  
  const filteredServices = selectedCategory
    ? services.filter(service => service.category === selectedCategory)
    : services;

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-r from-salon-pink/30 to-salon-lavender/30 py-16">
          <div className="salon-container text-center">
            <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Descubra toda a gama de serviços de beleza e bem-estar que oferecemos para realçar sua beleza natural.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="salon-container">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                className={selectedCategory === null ? "bg-salon-rose text-white" : ""}
                onClick={() => setSelectedCategory(null)}
              >
                Todos
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-salon-rose text-white" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-muted">
          <div className="salon-container">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-lg">Carregando serviços...</p>
              </div>
            ) : filteredServices.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg">Nenhum serviço encontrado.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map(service => (
                  <div key={service.id} className="service-card group">
                    <div className="mb-4 overflow-hidden rounded-md">
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className="w-full h-56 object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <div className="mb-3">
                      <span className="inline-block text-sm px-3 py-1 bg-salon-pink/20 text-salon-rose rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <p className="text-foreground/70 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-salon-dark text-lg">R$ {service.price.toFixed(2)}</span>
                      <span className="text-sm text-foreground/60">{service.duration} min</span>
                    </div>
                    <Button asChild className="w-full bg-salon-rose text-white hover:bg-salon-rose/90">
                      <Link to={`/booking?serviceId=${service.id}`}>Agendar Este Serviço</Link>
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="salon-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Respostas para as dúvidas mais comuns sobre nossos serviços.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Como posso agendar um serviço?</h3>
                <p className="text-foreground/80">
                  Você pode agendar online através do nosso site, por telefone ou pessoalmente no salão. Recomendamos agendamento com antecedência para garantir sua vaga.
                </p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Quanto tempo antes devo chegar para o meu horário?</h3>
                <p className="text-foreground/80">
                  Recomendamos chegar 10-15 minutos antes do seu horário marcado para fazer o check-in e se preparar para o serviço.
                </p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Posso remarcar ou cancelar um agendamento?</h3>
                <p className="text-foreground/80">
                  Sim, você pode remarcar ou cancelar seu agendamento com até 24 horas de antecedência sem custo adicional. Cancelamentos com menos de 24 horas podem estar sujeitos a uma taxa.
                </p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Quais métodos de pagamento são aceitos?</h3>
                <p className="text-foreground/80">
                  Aceitamos dinheiro, cartões de débito e crédito, PIX e transferências bancárias. Você pode pagar após a conclusão do serviço.
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

export default Services;
