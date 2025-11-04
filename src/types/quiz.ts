export interface QuizAnswers {
  gender?: string;
  age_group?: string;
  main_goal?: string;
  motivation_reason?: string;
  unhappy_period?: string;
  activity_frequency?: string;
  daily_availability?: string;
  previous_methods?: string;
  training_preference?: string;
  fitness_level?: string;
  desired_loss?: string;
  email_opt_in?: boolean;
  name?: string;
  email?: string;
}

export interface Question {
  id: number;
  key: keyof QuizAnswers;
  question: string;
  microcopy?: string;
  options: Array<{
    value: string;
    label: string;
    icon?: string;
  }>;
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    key: "gender",
    question: "Qual é o seu gênero?",
    microcopy: "Isso nos ajuda a adaptar linguagem e recomendações.",
    options: [
      { value: "female", label: "Feminino" },
      { value: "male", label: "Masculino" },
      { value: "not_specified", label: "Prefiro não informar" },
    ],
  },
  {
    id: 2,
    key: "age_group",
    question: "Qual sua faixa etária?",
    options: [
      { value: "under_25", label: "Menos de 25 anos" },
      { value: "25_34", label: "25 a 34 anos" },
      { value: "35_44", label: "35 a 44 anos" },
      { value: "45_plus", label: "45 anos ou mais" },
    ],
  },
  {
    id: 3,
    key: "main_goal",
    question: "Qual o seu principal objetivo com esse desafio?",
    microcopy: "Escolha o que mais te motiva — isso guiará o plano.",
    options: [
      { value: "lose_belly_fat", label: "Perder gordura abdominal" },
      { value: "lose_weight", label: "Emagrecer de forma geral e recuperar autoestima" },
      { value: "tone_muscles", label: "Definir músculos e ganhar tonicidade" },
      { value: "improve_fitness", label: "Melhorar condicionamento e energia diária" },
    ],
  },
  {
    id: 4,
    key: "motivation_reason",
    question: "Por que alcançar esse objetivo é importante para você agora?",
    options: [
      { value: "feel_good", label: "Quero me sentir bem comigo novamente" },
      { value: "health", label: "Quero mais saúde e disposição" },
      { value: "fit_clothes", label: "Quero caber nas roupas que amo" },
      { value: "definitive_change", label: "Quero uma mudança definitiva (chega de tentar e falhar)" },
    ],
  },
  {
    id: 5,
    key: "unhappy_period",
    question: "Há quanto tempo você não está satisfeito(a) com seu corpo?",
    options: [
      { value: "less_3_months", label: "Menos de 3 meses" },
      { value: "3_to_12_months", label: "3 meses a 1 ano" },
      { value: "more_1_year", label: "Mais de 1 ano" },
      { value: "always", label: "Sempre senti incômodo com isso" },
    ],
  },
  {
    id: 6,
    key: "activity_frequency",
    question: "Como você avalia sua rotina de atividade física atualmente?",
    options: [
      { value: "none", label: "Não pratico atividades" },
      { value: "1_2_week", label: "1-2x por semana" },
      { value: "3_4_week", label: "3-4x por semana" },
      { value: "almost_daily", label: "Quase todos os dias" },
    ],
  },
  {
    id: 7,
    key: "daily_availability",
    question: "Qual é a sua disponibilidade diária para treinos?",
    options: [
      { value: "10_20_min", label: "10-20 minutos (treinos curtos)" },
      { value: "20_35_min", label: "20-35 minutos (tempo moderado)" },
      { value: "35_60_min", label: "35-60 minutos (tempo confortável)" },
      { value: "60_plus_min", label: "Mais de 60 minutos" },
    ],
  },
  {
    id: 8,
    key: "previous_methods",
    question: "Você já tentou algum método antes?",
    options: [
      { value: "yes_worked", label: "Sim, e tive resultado" },
      { value: "yes_not_maintained", label: "Sim, mas não mantive" },
      { value: "tried_many", label: "Já tentei muitas vezes e desisti" },
      { value: "never_tried", label: "Nunca tentei nada sério" },
    ],
  },
  {
    id: 9,
    key: "training_preference",
    question: "Qual estilo de treino te motiva mais?",
    options: [
      { value: "home_no_equipment", label: "Treinos rápidos em casa (sem equipamentos)" },
      { value: "gym_weights", label: "Treinos com peso/academia" },
      { value: "hiit", label: "HIIT/treino que acelera metabolismo" },
      { value: "strength_flexibility", label: "Treinos que unem força + alongamento" },
    ],
  },
  {
    id: 10,
    key: "fitness_level",
    question: "Em qual nível você se considera hoje?",
    options: [
      { value: "beginner", label: "Iniciante total" },
      { value: "intermediate", label: "Intermediário (já treinei antes)" },
      { value: "advanced", label: "Avançado (treino regular)" },
      { value: "returning", label: "Retomando depois de um tempo parado" },
    ],
  },
  {
    id: 11,
    key: "desired_loss",
    question: "Quanto você quer perder / qual mudança deseja ver?",
    microcopy: "Escolha a expectativa realista — sua jornada começa aqui.",
    options: [
      { value: "up_to_3kg", label: "Perder até 3 kg / diminuir medidas locais" },
      { value: "3_to_6kg", label: "Perder 3-6 kg / notar boa definição" },
      { value: "6_to_10kg", label: "Perder 6-10 kg / transformação visível" },
      { value: "more_10kg", label: "Mais de 10 kg (objetivo ambicioso)" },
    ],
  },
  {
    id: 12,
    key: "email_opt_in",
    question: "Você está verdadeiramente comprometido(a) a seguir o plano pelos próximos 25 dias para alcançar a transformação que sempre sonhou?",
    options: [
      { value: "yes_1", label: "SIM, ESTOU COMPROMETIDO(A)!" },
      { value: "yes_2", label: "ABSOLUTAMENTE, VOU DAR O MEU MELHOR!" },
      { value: "yes_3", label: "COM CERTEZA, QUERO COMEÇAR HOJE!" },
      { value: "yes_4", label: "AINDA ESTOU PENSANDO" },
    ],
  },
];
