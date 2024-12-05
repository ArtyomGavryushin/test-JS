import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (title, description, dueDate) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toLocaleString(),
      dueDate,
      status: "active",
    };
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (id, updates) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default TaskManager;
