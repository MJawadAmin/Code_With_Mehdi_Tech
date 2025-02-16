import React, { useEffect, useState } from "react";

const Todo2 = () => {
  const [data, setData] = useState(""); // Stores input value
  const [task, setTask] = useState([]); // Stores list of tasks

  useEffect(() => {}, []);

  // ✅ Add new task
  const handleClick = (e) => {
    e.preventDefault();
    if (data.trim() !== "") {
      setTask([...task, data]); // Correctly updating 'task'
      setData(""); // Clear input after adding
    }
  };

  // ✅ Delete task function
  const handleDelete = (index) => {
    const newTasks = task.filter((_, i) => i !== index); // Remove task at index
    setTask(newTasks);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter the data here"
        className="border-4"
        value={data} // Make input controlled
        onChange={(e) => setData(e.target.value)} // Use onChange instead of onClick
      />
      <button className="bg-blue-600 w-20 h-10" onClick={handleClick}>
        Add Data
      </button>

      <ul>
        {task.map((todos, index) => (
          <li key={index}>
            {todos} 
            <button className="bg-red-500 ml-2" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo2;
