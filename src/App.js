import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./style.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState("tasks"); // "tasks" или "add"

  // Загрузка задач из localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Сохранение задач в localStorage
  const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTasks(tasks);
  };

  // Добавление задачи
  const handleAddTask = (text, description) => {
    const newTask = { id: Date.now(), text, description, done: false };
    const updatedTasks = [...tasks, newTask];
    saveTasks(updatedTasks);
    setView("tasks"); // Возвращаемся к списку задач
  };

  // Обновление задачи (отметить как выполненную)
  const handleUpdateTask = (id, done) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done } : task
    );
    saveTasks(updatedTasks);
  };

  // Удаление задачи
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    saveTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>ToDoList MiniApp</h1>
      {view === "add" ? (
        <TaskForm onAddTask={handleAddTask} />
      ) : (
        <TaskList
          tasks={tasks}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
        />
      )}
      <div className="buttons-container">
        <button onClick={() => setView("add")}>Добавить задачу</button>
        <button onClick={() => setView("tasks")}>Посмотреть задачи</button>
      </div>
    </div>
  );
}

export default App;
