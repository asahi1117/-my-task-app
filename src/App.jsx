import { useEffect, useState } from "react";
import { QUESTIONS } from "./data/questions";
import StartScreen from "./components/StartScreen";
import ProgressBar from "./components/ProgressBar";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";

const BEST_SCORE_KEY = "ph1-quiz-best-score";

function loadBestScore() {
  const saved = localStorage.getItem(BEST_SCORE_KEY);
  const parsed = Number(saved);

  if (!Number.isInteger(parsed) || parsed < 0 || parsed > QUESTIONS.length) {
    return 0;
  }

  return parsed;
}

function App() {
  const [screen, setScreen] = useState("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [bestScore, setBestScore] = useState(loadBestScore);

  useEffect(() => {
    localStorage.setItem(BEST_SCORE_KEY, String(bestScore));
  }, [bestScore]);

  const currentQuestion = QUESTIONS[currentIndex];
  const score = answers.filter((answer) => answer.isCorrect).length;
  const wrongAnswers = answers
    .filter((answer) => !answer.isCorrect)
    .map((answer) => ({
      question: QUESTIONS.find((question) => question.id === answer.questionId),
      selectedIndex: answer.selectedIndex,
    }));

  const startQuiz = () => {
    setScreen("quiz");
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswers([]);
  };

  const selectChoice = (choiceIndex) => {
    if (selectedIndex !== null) {
      return;
    }

    setSelectedIndex(choiceIndex);
    setAnswers([
      ...answers,
      {
        questionId: currentQuestion.id,
        selectedIndex: choiceIndex,
        isCorrect: choiceIndex === currentQuestion.answerIndex,
      },
    ]);
  };

  const goNext = () => {
    const isLastQuestion = currentIndex === QUESTIONS.length - 1;

    if (!isLastQuestion) {
      setCurrentIndex(currentIndex + 1);
      setSelectedIndex(null);
      return;
    }

    if (score > bestScore) {
      setBestScore(score);
    }
    setScreen("result");
  };

  return (
    <div className="min-h-svh bg-gradient-to-b from-indigo-50 via-white to-sky-50 text-slate-800">
      <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:py-12">
        {screen === "start" && (
          <StartScreen
            totalQuestions={QUESTIONS.length}
            bestScore={bestScore}
            onStart={startQuiz}
          />
        )}

        {screen === "quiz" && (
          <>
            <div className="mb-4">
              <ProgressBar current={answers.length} total={QUESTIONS.length} />
            </div>
            <QuestionCard
              question={currentQuestion}
              questionNumber={currentIndex + 1}
              totalQuestions={QUESTIONS.length}
              selectedIndex={selectedIndex}
              isLastQuestion={currentIndex === QUESTIONS.length - 1}
              onSelect={selectChoice}
              onNext={goNext}
            />
            <p className="mt-4 text-center text-sm text-slate-500">
              ここまで {score} 問正解
            </p>
          </>
        )}

        {screen === "result" && (
          <ResultScreen
            score={score}
            total={QUESTIONS.length}
            bestScore={bestScore}
            wrongAnswers={wrongAnswers}
            onRestart={startQuiz}
          />
        )}
      </main>
    </div>
  );
}

export default App;
