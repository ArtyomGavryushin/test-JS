import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text, description);
    setText("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Введите название задачи"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <textarea
        placeholder="Введите описание задачи"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default TaskForm;
