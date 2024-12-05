import React from "react";

function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <h3
            style={{
              textDecoration: task.done ? "line-through" : "none",
            }}
          >
            {task.text}
          </h3>
          <p className="task-description">{task.description}</p>
          <div className="task-actions">
            <button
              className="btn-complete"
              onClick={() => onUpdateTask(task.id, !task.done)}
            >
              {task.done ? "Отменить" : "Выполнено"}
            </button>
            <button
              className="btn-delete"
              onClick={() => onDeleteTask(task.id)}
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
