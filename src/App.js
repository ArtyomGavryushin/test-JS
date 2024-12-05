import React, { useState } from "react";
import TaskManager from "./TaskManager";
import TaskCalendar from "./components/Calendar/TaskCalendar";
import TaskCheck from "./Check/TaskCheck";
import "./style.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Task");
  const [tasks, setTasks] = useState([]);

  const renderPage = () => {
    switch (currentPage) {
      case "Task":
        return <TaskManager tasks={tasks} setTasks={setTasks} />;
      case "Check":
        return <TaskCheck />;
      case "Calendar":
        return <TaskCalendar tasks={tasks} />;
      default:
        return <TaskManager tasks={tasks} setTasks={setTasks} />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <button onClick={() => setCurrentPage("Task")}>Task</button>
        <button onClick={() => setCurrentPage("Check")}>Check</button>
        <button onClick={() => setCurrentPage("Calendar")}>Calendar</button>
      </header>
      <main className="app-content">{renderPage()}</main>
    </div>
  );
}

export default App;
