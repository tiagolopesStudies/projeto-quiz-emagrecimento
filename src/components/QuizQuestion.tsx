import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Question } from "@/types/quiz";
import { ProgressBar } from "./ProgressBar";
import { toast } from "sonner";

interface QuizQuestionProps {
  question: Question;
  onAnswer: (key: string, value: string) => void;
  onBack: () => void;
  onNext: () => void;
  currentAnswer?: string;
  currentStep: number;
  totalSteps: number;
  emailData?: { name?: string; email?: string };
  onEmailDataChange?: (data: { name?: string; email?: string }) => void;
}

export const QuizQuestion = ({
  question,
  onAnswer,
  onBack,
  onNext,
  currentAnswer,
  currentStep,
  totalSteps,
}: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(currentAnswer);

  // Sincronizar selectedOption quando a pergunta mudar
  useEffect(() => {
    setSelectedOption(currentAnswer);
  }, [question.key, currentAnswer]);

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    onAnswer(question.key, value);
  };

  const handleNext = () => {
    if (!selectedOption) {
      toast.error("Responda para continuar");
      return;
    }
    onNext();
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="max-w-3xl w-full animate-fade-in">
        <div className="mb-6">
          <ProgressBar current={currentStep} total={totalSteps} />
        </div>

        <Card className="p-8 md:p-12 shadow-card">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {question.question}
              </h2>
              {question.microcopy && (
                <p className="text-sm text-muted-foreground">
                  {question.microcopy}
                </p>
              )}
            </div>

            <div className="space-y-3">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect(option.value)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                    selectedOption === option.value
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border hover:border-primary/30 hover:bg-primary/5"
                  }`}
                >
                  <span className="font-medium text-foreground">{option.label}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                onClick={onBack}
                disabled={currentStep === 1}
                className="flex-1"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <Button
                variant="cta"
                onClick={handleNext}
                disabled={!selectedOption}
                className="flex-1"
              >
                {currentStep === totalSteps ? "Ver Resultado" : "Próxima"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {currentStep < totalSteps && (
              <p className="text-center text-sm text-muted-foreground">
                {currentStep < 4 && "Quase lá!"}
                {currentStep >= 4 && currentStep < 8 && "Você está indo muito bem!"}
                {currentStep >= 8 && currentStep < 11 && "Falta pouco!"}
                {currentStep >= 11 && "Última pergunta!"}
              </p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
