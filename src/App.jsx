import { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";

const FILTERS = [
  { id: "all", label: "すべて" },
  { id: "active", label: "未完了" },
  { id: "done", label: "完了済み" },
];

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (!saved) {
    return [];
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function App() {
  const [tasks, setTasks] = useState(loadTasks);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (event) => {
    event.preventDefault();
    const text = input.trim();
    if (text === "") {
      return;
    }

    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.done;
    }
    if (filter === "done") {
      return task.done;
    }
    return true;
  });

  const remainingCount = tasks.filter((task) => !task.done).length;

  return (
    <div className="min-h-svh bg-stone-100 text-stone-800">
      <main className="max-w-md mx-auto p-4">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">タスク管理</h1>
          <p className="text-stone-600 text-sm mt-1">
            未完了 {remainingCount} 件 / 全 {tasks.length} 件
          </p>
        </header>

        <form onSubmit={addTask} className="flex gap-2 mb-4">
          <input
            className="border border-stone-300 bg-white rounded-lg px-3 py-2 flex-1 min-w-0"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="新しいタスクを入力..."
            aria-label="新しいタスク"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 shrink-0"
          >
            追加
          </button>
        </form>

        <div className="flex gap-2 mb-4" role="tablist" aria-label="フィルター">
          {FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`px-3 py-1.5 rounded-full text-sm ${
                filter === item.id
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-stone-600 hover:bg-stone-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <ul className="space-y-2">
          {visibleTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>

        {visibleTasks.length === 0 && (
          <p className="text-center text-stone-400 mt-8">
            {tasks.length === 0
              ? "タスクがありません"
              : "この条件のタスクはありません"}
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
