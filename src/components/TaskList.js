import React from "react";

function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <h3
            style={{
              textDecoration: task.done ? "line-through" : "none",
            }}
          >
            {task.text}
          </h3>
          <p>{task.description}</p>
          <div className="task-buttons">
            <button
              onClick={() => onUpdateTask(task.id, !task.done)}
              className={task.done ? "undo-button" : "done-button"}
            >
              {task.done ? "Отменить" : "Выполнено"}
            </button>
            <button onClick={() => onDeleteTask(task.id)} className="delete-button">
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
