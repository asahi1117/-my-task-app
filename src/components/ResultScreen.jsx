const CHOICE_LABELS = ["A", "B", "C", "D"];

function getMessage(percent) {
  if (percent === 100) {
    return "全問正解！PH1の内容がしっかり身についています。";
  }
  if (percent >= 70) {
    return "good! あと少しで満点です。間違えた問題を見直しましょう。";
  }
  if (percent >= 40) {
    return "半分くらい。解説を読んで、もう一度挑戦してみましょう。";
  }
  return "まずは解説を読むところから。何度でも挑戦できます。";
}

function ResultScreen({ score, total, bestScore, wrongAnswers, onRestart }) {
  const percent = Math.round((score / total) * 100);

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
      <h2 className="text-center text-xl font-bold text-slate-800">結果</h2>

      <p className="mt-4 text-center">
        <span className="text-5xl font-bold text-indigo-600 sm:text-6xl">
          {score}
        </span>
        <span className="text-xl text-slate-500"> / {total} 問正解</span>
      </p>
      <p className="mt-1 text-center text-sm text-slate-500">
        正答率 {percent}％ ／ ベストスコア {bestScore} 問正解
      </p>

      <p className="mt-4 rounded-xl bg-indigo-50 px-4 py-3 text-center text-sm font-bold text-indigo-800">
        {getMessage(percent)}
      </p>

      {wrongAnswers.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-bold text-slate-700">
            間違えた問題の振り返り（{wrongAnswers.length} 問）
          </h3>
          <ul className="space-y-3">
            {wrongAnswers.map(({ question, selectedIndex }) => (
              <li
                key={question.id}
                className="rounded-xl border border-slate-200 p-4"
              >
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">
                  {question.category}
                </span>
                <p className="mt-2 font-bold text-slate-800">{question.text}</p>
                <p className="mt-2 text-sm text-rose-600">
                  あなたの回答: {CHOICE_LABELS[selectedIndex]}.{" "}
                  {question.choices[selectedIndex]}
                </p>
                <p className="text-sm text-emerald-700">
                  正解: {CHOICE_LABELS[question.answerIndex]}.{" "}
                  {question.choices[question.answerIndex]}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {question.explanation}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={onRestart}
        className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 font-bold text-white transition-colors hover:bg-indigo-700"
      >
        もう一度挑戦する
      </button>
    </section>
  );
}

export default ResultScreen;
