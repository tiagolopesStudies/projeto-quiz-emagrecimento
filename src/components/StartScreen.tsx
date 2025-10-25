import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="bg-card rounded-2xl shadow-card overflow-hidden">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={heroImage}
              alt="Transformação fitness"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-12 text-center space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Desafio Corpo Definido em 18 Dias
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Descubra seu Plano Personalizado
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Responda 12 perguntas rápidas — levando menos de 2 minutos — e receba seu plano personalizado do Desafio Corpo Definido em 18 Dias.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span className="text-sm">~2 minutos</span>
            </div>

            <Button
              variant="cta"
              size="xl"
              onClick={onStart}
              className="mt-8"
            >
              Começar o Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
