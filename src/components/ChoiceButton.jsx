const LABELS = ["A", "B", "C", "D"];

function ChoiceButton({ label, index, selectedIndex, answerIndex, onSelect }) {
  const isAnswered = selectedIndex !== null;
  const isAnswer = index === answerIndex;
  const isPicked = index === selectedIndex;

  let boxClass =
    "border-slate-200 bg-white hover:border-indigo-400 hover:bg-indigo-50";
  let badgeClass = "border-slate-300 text-slate-500";
  let mark = "";

  if (isAnswered && isAnswer) {
    boxClass = "border-emerald-500 bg-emerald-50 text-emerald-900";
    badgeClass = "border-emerald-500 bg-emerald-500 text-white";
    mark = "○";
  } else if (isAnswered && isPicked) {
    boxClass = "border-rose-500 bg-rose-50 text-rose-900";
    badgeClass = "border-rose-500 bg-rose-500 text-white";
    mark = "×";
  } else if (isAnswered) {
    boxClass = "border-slate-200 bg-white text-slate-400";
    badgeClass = "border-slate-200 text-slate-300";
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      disabled={isAnswered}
      className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-colors ${boxClass}`}
    >
      <span
        className={`flex size-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${badgeClass}`}
        aria-hidden="true"
      >
        {LABELS[index]}
      </span>
      <span className="flex-1 text-sm sm:text-base">{label}</span>
      {mark !== "" && (
        <span className="shrink-0 text-lg font-bold" aria-hidden="true">
          {mark}
        </span>
      )}
    </button>
  );
}

export default ChoiceButton;
