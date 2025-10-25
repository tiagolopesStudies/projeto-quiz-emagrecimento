import { useEffect, useState } from "react";
import { BeforeAfterCarousel } from "./BeforeAfterCarousel";
import { Check } from "lucide-react";

interface AnalyzingScreenProps {
  onComplete: () => void;
}

export const AnalyzingScreen = ({ onComplete }: AnalyzingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [visibleChecks, setVisibleChecks] = useState<number[]>([]);

  const checks = [
    "Plano adaptado ao seu nível",
    "Treinos rápidos e objetivos",
    "Sem dietas malucas",
  ];

  useEffect(() => {
    // Progress animation over 10 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    // Show checks progressively
    const checkTimers = [
      setTimeout(() => setVisibleChecks([0]), 1000),
      setTimeout(() => setVisibleChecks([0, 1]), 3500),
      setTimeout(() => setVisibleChecks([0, 1, 2]), 6000),
    ];

    return () => {
      clearInterval(progressInterval);
      checkTimers.forEach(timer => clearTimeout(timer));
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Analisando resultados…
            </h2>
            <p className="text-lg text-muted-foreground">
              Montando seu plano personalizado — isso leva cerca de 10 segundos
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Processando suas respostas</span>
              <span className="font-semibold">{progress}%</span>
            </div>
            <div className="h-3 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-cta transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <BeforeAfterCarousel />

          <div className="space-y-3">
            {checks.map((check, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-500 ${
                  visibleChecks.includes(index)
                    ? "opacity-100 translate-x-0 bg-success/10 border-2 border-success/30"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success flex items-center justify-center">
                  <Check className="w-4 h-4 text-success-foreground" />
                </div>
                <span className="font-medium text-foreground">{check}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
