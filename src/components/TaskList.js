import React from "react";

function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
            {task.text}
          </span>
          <button onClick={() => onUpdateTask(task.id, !task.done)}>
            {task.done ? "❌" : "✅"}
          </button>
          <button onClick={() => onDeleteTask(task.id)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
