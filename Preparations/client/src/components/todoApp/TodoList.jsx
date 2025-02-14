import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => setTask(e.target.value);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task }]);
      setTask("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-4">Todo App ✅</h1>

      <div className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter a task..."
          className="flex-1 p-2 rounded-md border border-gray-600 text-white"
          value={task}
          onChange={handleInputChange}
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="mt-4 w-full max-w-md">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-800 text-white p-2 rounded-md mt-2"
          >
            {todo.text}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
