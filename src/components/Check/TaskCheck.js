import React from "react";

function TaskCheck({ tasks, onUpdateTask }) {
  const activeTasks = tasks.filter((task) => task.status === "active");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div>
      <h2>Активные задачи</h2>
      {activeTasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <button onClick={() => onUpdateTask(task.id, { status: "completed" })}>
            Завершить
          </button>
        </div>
      ))}

      <h2>Завершённые задачи</h2>
      {completedTasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default TaskCheck;
