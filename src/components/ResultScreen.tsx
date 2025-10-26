import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QuizAnswers } from "@/types/quiz";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { CheckCircle2, Clock, Salad, TrendingUp } from "lucide-react";

interface ResultScreenProps {
  answers: QuizAnswers;
}

const chartData = [
  { day: 0, weight: 0 },
  { day: 3, weight: 1.5 },
  { day: 6, weight: 2.8 },
  { day: 9, weight: 4.2 },
  { day: 12, weight: 5.5 },
  { day: 15, weight: 7.0 },
  { day: 18, weight: 9.5 },
];

const goalLabels: Record<string, string> = {
  lose_belly_fat: "perder gordura abdominal",
  lose_weight: "emagrecer de forma geral",
  tone_muscles: "definir músculos",
  improve_fitness: "melhorar condicionamento",
};

const levelLabels: Record<string, string> = {
  beginner: "Iniciante",
  intermediate: "Intermediário",
  advanced: "Avançado",
  returning: "Retomando",
};

const availabilityLabels: Record<string, string> = {
  "10_20_min": "10-20 minutos",
  "20_35_min": "20-35 minutos",
  "35_60_min": "35-60 minutos",
  "60_plus_min": "mais de 60 minutos",
};

export const ResultScreen = ({ answers }: ResultScreenProps) => {
  const goal = goalLabels[answers.main_goal || ""] || "transformar seu corpo";
  const level = levelLabels[answers.fitness_level || ""] || "seu nível";
  const availability = availabilityLabels[answers.daily_availability || ""] || "seu tempo disponível";

  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Seu Plano Ideal para o Desafio Corpo Definido em 18 Dias
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Com base nas suas respostas, montamos um plano com foco em{" "}
              <span className="text-primary font-semibold">{goal}</span> — treinos de{" "}
              <span className="text-primary font-semibold">{availability}</span> e adaptações para seu nível{" "}
              <span className="text-primary font-semibold">{level}</span>.
            </p>
          </div>

          {/* Chart */}
          <Card className="p-6 md:p-8 shadow-card">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Projeção de Evolução em 18 Dias
              </h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis
                      dataKey="day"
                      label={{ value: "Dias do Desafio", position: "insideBottom", offset: -5 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis
                      label={{ value: "Evolução (referência)", angle: -90, position: "insideLeft" }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`${value} kg`, "Progresso"]}
                      labelFormatter={(day) => `Dia ${day}`}
                    />
                    <Line
                      type="monotone"
                      dataKey="weight"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", r: 5 }}
                      activeDot={{ r: 7 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Projeção média para o Desafio Corpo Definido em 18 Dias. Resultados individuais variam.
              </p>
            </div>
          </Card>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center space-y-4 shadow-card hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground">Treinos Curtos</h3>
              <p className="text-muted-foreground">
                20–35 min — feitos para encaixar na rotina
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4 shadow-card hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Salad className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground">Alimentação Simples</h3>
              <p className="text-muted-foreground">
                Plano de alimentação simples — sem dietas malucas
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4 shadow-card hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground">Acompanhamento</h3>
              <p className="text-muted-foreground">
                Motivação e acompanhamento de progressos
              </p>
            </Card>
          </div>

          {/* CTA */}
          <Card className="p-8 md:p-12 text-center space-y-6 shadow-card bg-gradient-to-br from-card to-secondary/30">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Pronto para começar sua transformação?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Seu plano personalizado está pronto. Comece hoje e veja resultados em 18 dias.
              </p>
            </div>

            <Button
              variant="cta"
              size="xl"
              className="mx-auto w-full sm:w-auto text-sm sm:text-base px-4 sm:px-8"
              onClick={() => console.log("CTA clicked")}
            >
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="whitespace-normal sm:whitespace-nowrap">
                Quero meu Plano Personalizado — Garantia 7 dias
              </span>
            </Button>

            <p className="text-sm text-muted-foreground">
              Sem riscos — cancele em até 7 dias
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};
