import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../features/todos/todoSlice";

export default function TodoApp() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      
      {/* Card */}
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-6 w-[400px] text-white">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          ✨ Todo App
        </h2>

        {/* Input */}
        <div className="flex gap-2 mb-5">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 rounded-xl bg-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={handleAdd}
            className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-xl hover:bg-gray-200 transition"
          >
            Add
          </button>
        </div>

        {/* List */}
        <ul className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-white/20 px-3 py-2 rounded-xl hover:bg-white/30 transition"
            >
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`cursor-pointer text-sm ${
                  todo.completed
                    ? "line-through text-gray-200"
                    : "text-white"
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-red-300 hover:text-red-500 transition text-lg"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <p className="text-center text-xs text-white/70 mt-5">
          Click task to mark complete
        </p>

      </div>
    </div>
  );
}