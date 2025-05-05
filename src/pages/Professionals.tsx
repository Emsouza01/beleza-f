
import React, { useState, useEffect } from "react";
import { getProfessionals } from "@/services/api";
import { Professional } from "@/types/models";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Professionals = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        setLoading(true);
        const professionalsData = await getProfessionals();
        setProfessionals(professionalsData);
      } catch (error) {
        console.error("Erro ao buscar profissionais:", error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar os profissionais. Tente novamente mais tarde.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfessionals();
  }, [toast]);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-r from-salon-pink/30 to-salon-lavender/30 py-16">
          <div className="salon-container text-center">
            <h1 className="text-4xl font-bold mb-4">Nossa Equipe</h1>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Conheça os profissionais talentosos e dedicados que farão sua experiência no Salão Beleza ser inesquecível.
            </p>
          </div>
        </section>

        {/* Professionals List */}
        <section className="py-16">
          <div className="salon-container">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-lg">Carregando profissionais...</p>
              </div>
            ) : professionals.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg">Nenhum profissional encontrado.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-16">
                {professionals.map((professional, index) => (
                  <div key={professional.id} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={professional.image} 
                          alt={professional.name} 
                          className="w-full h-[400px] object-cover"
                        />
                      </div>
                    </div>
                    <div className={`space-y-6 order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                      <h2 className="text-3xl font-bold text-salon-dark">{professional.name}</h2>
                      <p className="text-xl text-salon-rose">{professional.role}</p>
                      <p className="text-foreground/80">{professional.description}</p>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Especialidades:</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {professional.specialties.map((specialty, idx) => (
                            <span 
                              key={idx} 
                              className="px-3 py-1 text-sm bg-salon-pink/20 text-salon-rose rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Disponibilidade:</h3>
                        <p className="text-foreground/80 mb-1">
                          <span className="font-medium">Dias:</span> {professional.availability.days.join(", ")}
                        </p>
                        <p className="text-foreground/80 mb-4">
                          <span className="font-medium">Horários:</span> {professional.availability.hours[0]} - {professional.availability.hours[professional.availability.hours.length - 1]}
                        </p>
                      </div>
                      
                      <Button asChild className="bg-salon-rose text-white hover:bg-salon-rose/90">
                        <Link to={`/booking?professionalId=${professional.id}`}>Agendar com {professional.name.split(" ")[0]}</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Team Values */}
        <section className="py-16 bg-muted">
          <div className="salon-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Conheça os princípios que guiam nossa equipe e nosso trabalho.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-salon-pink/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-salon-rose">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Excelência</h3>
                <p className="text-foreground/70">
                  Buscamos a excelência em cada serviço, com atenção aos detalhes e dedicação a resultados impecáveis.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-salon-lavender/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-salon-mauve">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ética Profissional</h3>
                <p className="text-foreground/70">
                  Trabalhamos com integridade, respeito e confidencialidade em todos os nossos atendimentos.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-salon-pink/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-salon-rose">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Educação Contínua</h3>
                <p className="text-foreground/70">
                  Investimos constantemente na formação e atualização de nossa equipe com as últimas tendências e técnicas.
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

export default Professionals;
