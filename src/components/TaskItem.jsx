function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 bg-white rounded-xl shadow-sm px-4 py-3">
      <button
        type="button"
        onClick={() => onToggle(task.id)}
        aria-pressed={task.done}
        aria-label={task.done ? `${task.text}を未完了にする` : `${task.text}を完了にする`}
        className={`size-5 shrink-0 rounded-full border-2 ${
          task.done
            ? "border-indigo-500 bg-indigo-500"
            : "border-stone-300 bg-white hover:border-indigo-400"
        }`}
      >
        {task.done && (
          <span className="block text-white text-[10px] leading-4 text-center" aria-hidden="true">
            ✓
          </span>
        )}
      </button>
      <button
        type="button"
        onClick={() => onToggle(task.id)}
        className={`flex-1 text-left ${
          task.done ? "line-through text-stone-400" : "text-stone-800"
        }`}
      >
        {task.text}
      </button>
      <button
        type="button"
        onClick={() => onDelete(task.id)}
        className="text-red-400 hover:text-red-600 text-sm shrink-0"
      >
        削除
      </button>
    </li>
  );
}

export default TaskItem;
