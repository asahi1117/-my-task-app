function StartScreen({ totalQuestions, bestScore, onStart }) {
  return (
    <section className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200 sm:p-10">
      <p className="text-sm font-bold tracking-widest text-indigo-600">
        PH1 REVIEW QUIZ
      </p>
      <h1 className="mt-2 text-2xl font-bold text-slate-800 sm:text-3xl">
        PH1復習クイズ
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        HTML・Tailwind・JavaScript・React から全 {totalQuestions} 問。
        <br className="hidden sm:block" />
        1問ずつ答えると、その場で正解と解説が出ます。
      </p>

      <dl className="mt-6 grid grid-cols-2 gap-3 text-left">
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">問題数</dt>
          <dd className="mt-1 text-xl font-bold text-slate-800">
            {totalQuestions} 問
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">ベストスコア</dt>
          <dd className="mt-1 text-xl font-bold text-slate-800">
            {bestScore} 問正解
          </dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={onStart}
        className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 font-bold text-white transition-colors hover:bg-indigo-700"
      >
        はじめる
      </button>
    </section>
  );
}

export default StartScreen;
