import React, { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete React project", completed: false },
    { id: 2, text: "Read a tech article", completed: false },
    { id: 3, text: "Exercise for 30 minutes", completed: false }
  ]);

  const [newTask, setNewTask] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask(""); // Clear input field
  };

  // Function to toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            {task.text}
            <button onClick={() => removeTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskList;
