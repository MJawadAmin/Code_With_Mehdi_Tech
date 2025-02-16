import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [task, setTask] = useState(""); // For input value
  const [tasks, setTasks] = useState([]); // To store the list of tasks

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever 'tasks' change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a task
  const addTask = (e) => {
    e.preventDefault(); // Prevent form refresh
    if (task.trim() === "") return; // Prevent adding empty tasks
    const updatedTasks = [...tasks, task]; // Add new task to the list
    setTasks(updatedTasks); // Update state
    setTask(""); // Clear input field
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Remove selected task
    setTasks(newTasks); // Update tasks
  };

  return (
    <div>
      <h2>Simple To-Do App</h2>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>
      
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
