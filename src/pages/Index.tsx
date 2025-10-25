import { useState } from "react";
import { StartScreen } from "@/components/StartScreen";
import { QuizQuestion } from "@/components/QuizQuestion";
import { AnalyzingScreen } from "@/components/AnalyzingScreen";
import { ResultScreen } from "@/components/ResultScreen";
import { QUIZ_QUESTIONS, QuizAnswers } from "@/types/quiz";

type Screen = "start" | "quiz" | "analyzing" | "result";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [emailData, setEmailData] = useState<{ name?: string; email?: string }>({});

  const handleStart = () => {
    setScreen("quiz");
  };

  const handleAnswer = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Save email data if provided
      if (emailData.email) {
        setAnswers((prev) => ({
          ...prev,
          name: emailData.name,
          email: emailData.email,
        }));
      }
      setScreen("analyzing");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleAnalyzingComplete = () => {
    setScreen("result");
  };

  if (screen === "start") {
    return <StartScreen onStart={handleStart} />;
  }

  if (screen === "quiz") {
    const question = QUIZ_QUESTIONS[currentQuestion];
    const isLastQuestion = currentQuestion === QUIZ_QUESTIONS.length - 1;

    return (
      <QuizQuestion
        question={question}
        onAnswer={handleAnswer}
        onBack={handleBack}
        onNext={handleNext}
        currentAnswer={answers[question.key] as string}
        currentStep={currentQuestion + 1}
        totalSteps={QUIZ_QUESTIONS.length}
        showEmailCapture={isLastQuestion}
        emailData={emailData}
        onEmailDataChange={setEmailData}
      />
    );
  }

  if (screen === "analyzing") {
    return <AnalyzingScreen onComplete={handleAnalyzingComplete} />;
  }

  return <ResultScreen answers={answers} />;
};

export default Index;
