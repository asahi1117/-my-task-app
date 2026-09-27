import ChoiceButton from "./ChoiceButton";

const CHOICE_LABELS = ["A", "B", "C", "D"];

function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedIndex,
  isLastQuestion,
  onSelect,
  onNext,
}) {
  const isAnswered = selectedIndex !== null;
  const isCorrect = selectedIndex === question.answerIndex;

  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
          {question.category}
        </span>
        <span className="text-sm text-slate-500">
          第 {questionNumber} 問 / 全 {totalQuestions} 問
        </span>
      </div>

      <h2 className="mb-5 text-lg leading-relaxed font-bold text-slate-800 sm:text-xl">
        {question.text}
      </h2>

      <div className="space-y-3">
        {question.choices.map((choice, index) => (
          <ChoiceButton
            key={choice}
            label={choice}
            index={index}
            selectedIndex={selectedIndex}
            answerIndex={question.answerIndex}
            onSelect={onSelect}
          />
        ))}
      </div>

      {isAnswered && (
        <div
          className={`mt-5 rounded-xl border-l-4 p-4 ${
            isCorrect
              ? "border-emerald-500 bg-emerald-50"
              : "border-rose-500 bg-rose-50"
          }`}
        >
          <p
            className={`font-bold ${
              isCorrect ? "text-emerald-700" : "text-rose-700"
            }`}
          >
            {isCorrect
              ? "正解！"
              : `残念… 正解は ${CHOICE_LABELS[question.answerIndex]}`}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            {question.explanation}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={onNext}
        disabled={!isAnswered}
        className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 font-bold text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
      >
        {isLastQuestion ? "結果を見る" : "次の問題へ"}
      </button>
    </section>
  );
}

export default QuestionCard;
