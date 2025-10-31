import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Clock, Shield } from "lucide-react";
import transformationBefore from "@/assets/transformation-1.jpg";
import transformationAfter from "@/assets/transformation-2.jpg";

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Bloco 1 - Cabeçalho Heroico */}
      <div className="bg-gradient-to-b from-background to-secondary/20 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">
            Seu plano Corpo Definido em 18 Dias está pronto!{" "}
            <span className="inline-flex items-center">
              💪
              <CheckCircle2 className="w-8 h-8 ml-2 text-primary animate-scale-in" />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Com base no seu perfil, você terá todas as ferramentas para secar a barriga em 18 dias, 
            sem dietas extremas e treinando apenas 30 minutos por dia!
          </p>
          <Separator className="max-w-xs mx-auto mt-8" />
        </div>
      </div>

      {/* Bloco 2 - Transformação Visual */}
      <div className="bg-secondary/30 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-center font-semibold text-lg text-foreground">Você hoje</p>
              <img 
                src={transformationBefore} 
                alt="Antes da transformação"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-center font-semibold text-lg text-foreground">Você depois</p>
              <img 
                src={transformationAfter} 
                alt="Depois da transformação"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-8">
            Transformações reais de pessoas que seguiram o método Corpo Definido em 18 Dias.
          </p>
        </div>
      </div>

      {/* Bloco 3 - O que você vai receber */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Ao participar do desafio, você vai receber:
          </h2>
          <div className="space-y-4">
            {[
              "Plano de treinos prático de 18 dias",
              "Guia nutricional simples e sem dietas malucas",
              "Acesso a vídeos exclusivos de treino",
              "Checklist de progresso semanal",
              "Suporte motivacional e acompanhamento online"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-primary font-semibold mt-12">
            Tudo o que você precisa para transformar seu corpo e sua mente em menos de 3 semanas!
          </p>
        </div>
      </div>

      {/* Bloco 4 - Selo de Garantia */}
      <div className="py-16 px-4 bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 text-center shadow-lg">
            <Shield className="w-20 h-20 mx-auto text-primary mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Garantia incondicional de 7 dias
            </h3>
            <p className="text-muted-foreground text-lg">
              Se dentro de uma semana você não amar o desafio, devolvemos 100% do seu dinheiro. 
              Sem burocracia, sem pegadinhas.
            </p>
          </Card>
        </div>
      </div>

      {/* Bloco 5 - Preço e Oferta */}
      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Oferta especial por tempo limitado
            </h2>
          </div>
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground line-through">
              De R$ 69,90
            </p>
            <p className="text-5xl md:text-6xl font-bold text-primary">
              R$ 19,90
            </p>
          </div>
          <p className="text-muted-foreground">
            Aproveite o desconto de lançamento — apenas hoje!
          </p>
        </div>
      </div>

      {/* Bloco 6 - Botão de Compra */}
      <div className="py-8 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <Button
            variant="cta"
            size="xl"
            className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-6 uppercase font-bold hover-scale"
            onClick={() => console.log("Compra iniciada")}
          >
            Participar do Desafio Agora!
          </Button>
          <p className="text-sm text-muted-foreground">
            Vagas limitadas — garanta o preço promocional antes que acabe!
          </p>
        </div>
      </div>

      {/* Bloco 7 - Depoimentos */}
      <div className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            O que os participantes dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Perdi 7kg em 18 dias e voltei a usar minhas roupas antigas!",
                name: "Mariana, 32 anos"
              },
              {
                text: "Treinos rápidos, práticos e resultados reais.",
                name: "André, 41 anos"
              },
              {
                text: "Finalmente algo que funciona sem dieta maluca!",
                name: "Juliana, 29 anos"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 space-y-4 shadow-card">
                <p className="text-foreground italic">"{testimonial.text}"</p>
                <p className="text-sm text-muted-foreground font-semibold">
                  — {testimonial.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bloco 8 - Rodapé */}
      <div className="py-8 px-4 bg-background border-t">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © 2025 Corpo Definido — Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Imagens meramente ilustrativas. Resultados individuais podem variar.
          </p>
        </div>
      </div>
    </div>
  );
}
