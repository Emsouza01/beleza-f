
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-salon-dark text-white">
      <div className="salon-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-salon-pink to-salon-lavender bg-clip-text text-transparent">Beleza</h3>
            <p className="text-white/80 mb-4">
              Transformando sua beleza e elevando sua confiança com cuidados profissionais e personalizados.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/professionals" className="text-white/70 hover:text-white transition-colors">
                  Profissionais
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-white/70 hover:text-white transition-colors">
                  Agendamento
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <address className="not-italic">
              <p className="mb-2">Rua das Flores, 123</p>
              <p className="mb-2">São Paulo, SP</p>
              <p className="mb-2">Tel: (11) 9999-9999</p>
              <p className="mb-2">Email: contato@beleza.com</p>
            </address>
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">Horário de Funcionamento:</h5>
              <p className="text-sm text-white/70">Seg-Sex: 9h às 20h</p>
              <p className="text-sm text-white/70">Sáb: 9h às 18h</p>
              <p className="text-sm text-white/70">Dom: Fechado</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© 2025 Beleza Salão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
