
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services, professionals } from "@/data/sampleData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-salon-pink/30 to-salon-lavender/30">
          <div className="salon-container py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Realce sua beleza natural no 
                  <span className="bg-gradient-to-r from-salon-rose to-salon-mauve bg-clip-text text-transparent"> Salão Beleza</span>
                </h1>
                <p className="text-lg text-foreground/80">
                  Oferecemos uma experiência exclusiva de beleza e bem-estar com profissionais especializados e produtos de alta qualidade.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-salon-rose text-white hover:bg-salon-rose/90">
                    <Link to="/booking">Agendar Agora</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-salon-mauve text-salon-mauve hover:bg-salon-mauve/10">
                    <Link to="/services">Nossos Serviços</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Salão de Beleza" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-white">
          <div className="salon-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Descubra nossa variedade de serviços de beleza e bem-estar, todos realizados por profissionais qualificados.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.slice(0, 4).map((service) => (
                <div key={service.id} className="service-card group">
                  <div className="mb-4 overflow-hidden rounded-md">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-foreground/70 mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-salon-dark">R$ {service.price.toFixed(2)}</span>
                    <span className="text-sm text-foreground/60">{service.duration} min</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-salon-mauve text-salon-mauve hover:bg-salon-mauve/10">
                <Link to="/services">Ver Todos os Serviços</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Professionals */}
        <section className="py-16 bg-muted">
          <div className="salon-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Conheça nossos profissionais talentosos, dedicados a transformar sua aparência e elevar sua confiança.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {professionals.map((professional) => (
                <div key={professional.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="overflow-hidden">
                    <img 
                      src={professional.image} 
                      alt={professional.name} 
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{professional.name}</h3>
                    <p className="text-salon-rose mb-4">{professional.role}</p>
                    <p className="text-foreground/70 text-sm line-clamp-3">{professional.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="salon-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">O Que Dizem Nossos Clientes</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Veja o que nossos clientes satisfeitos têm a dizer sobre suas experiências em nosso salão.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-muted p-6 rounded-lg">
                <p className="italic text-foreground/80 mb-4">
                  "A equipe é incrível e sempre sai com o cabelo exatamente como eu queria. Recomendo a todos!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-salon-rose rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Ana Paula</h4>
                    <p className="text-sm text-foreground/60">Cliente desde 2022</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <p className="italic text-foreground/80 mb-4">
                  "Profissionais muito dedicados e atenciosos. O ambiente é super acolhedor e relaxante."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-salon-mauve rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Roberto Mendes</h4>
                    <p className="text-sm text-foreground/60">Cliente desde 2023</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <p className="italic text-foreground/80 mb-4">
                  "As manicures são perfeitas e duram muito mais do que em outros lugares que já frequentei."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-salon-lavender rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Carolina Silva</h4>
                    <p className="text-sm text-foreground/60">Cliente desde 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-salon-rose to-salon-mauve text-white">
          <div className="salon-container text-center">
            <h2 className="text-3xl font-bold mb-6">Pronta para Transformar seu Visual?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Agende um horário hoje mesmo e descubra por que somos o salão de beleza mais querido da cidade.
            </p>
            <Button asChild size="lg" className="bg-white text-salon-rose hover:bg-white/90">
              <Link to="/booking">Agendar Agora</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
