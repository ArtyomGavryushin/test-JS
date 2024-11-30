import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите задачу"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default TaskForm;
