import React from "react";

function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  const handleUpdate = (id) => {
    const updatedTitle = prompt("Введите новое название задачи:");
    const updatedDescription = prompt("Введите новое описание задачи:");
    const updatedDueDate = prompt("Введите новую дату выполнения (YYYY-MM-DD):");

    if (updatedTitle || updatedDescription || updatedDueDate) {
      onUpdateTask(id, {
        title: updatedTitle || undefined,
        description: updatedDescription || undefined,
        dueDate: updatedDueDate || undefined,
      });
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>
            <strong>Создано:</strong> {task.createdAt}
          </p>
          {task.dueDate && (
            <p>
              <strong>Дата выполнения:</strong> {task.dueDate}
            </p>
          )}
          <button onClick={() => handleUpdate(task.id)}>Редактировать</button>
          <button onClick={() => onDeleteTask(task.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
