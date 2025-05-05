
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
      <div className="salon-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-salon-rose to-salon-mauve bg-clip-text text-transparent">Beleza</span>
            </Link>
          </div>

          {isMobile ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          ) : (
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
                Serviços
              </Link>
              <Link to="/professionals" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
                Profissionais
              </Link>
              <Link to="/contact" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
                Contato
              </Link>
              <Button asChild className="bg-salon-rose text-white hover:bg-salon-rose/90">
                <Link to="/booking">Agendar</Link>
              </Button>
            </nav>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/professionals" 
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                Profissionais
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link
                to="/booking"
                className="block w-full px-3 py-2 rounded-md text-center text-white bg-salon-rose hover:bg-salon-rose/90 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
