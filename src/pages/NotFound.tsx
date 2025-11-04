import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <ThemeToggle />
      <div className="max-w-2xl w-full animate-fade-in">
        <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 text-center space-y-6">
          <div className="text-8xl md:text-9xl font-bold text-primary/20">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Página Não Encontrada
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
          <Button
            variant="cta"
            size="lg"
            onClick={() => navigate("/")}
            className="mt-8"
          >
            <Home className="w-5 h-5 mr-2" />
            Voltar para a Página Inicial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
