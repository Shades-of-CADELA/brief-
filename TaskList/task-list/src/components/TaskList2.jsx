import React from "react";

function TaskList() {
  const tasks = ["Complete React project", "Read a tech article", "Exercise for 30 minutes"];

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
