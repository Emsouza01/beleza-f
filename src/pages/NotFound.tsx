
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-salon-pink/20 to-salon-lavender/20">
      <div className="text-center max-w-md px-4">
        <h1 className="text-9xl font-bold text-salon-rose">404</h1>
        <p className="text-2xl font-medium mb-6 text-salon-dark">Página não encontrada</p>
        <p className="text-foreground/70 mb-8">
          Parece que você se perdeu. A página que você está procurando não existe ou foi movida.
        </p>
        <Button asChild className="bg-salon-rose text-white hover:bg-salon-rose/90">
          <Link to="/">Voltar para a Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
