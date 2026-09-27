function ProgressBar({ current, total }) {
  const percent = Math.round((current / total) * 100);

  return (
    <div
      className="h-2 w-full overflow-hidden rounded-full bg-slate-200"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label="進捗"
    >
      <div
        className="h-full rounded-full bg-indigo-500 transition-all duration-300"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

export default ProgressBar;
