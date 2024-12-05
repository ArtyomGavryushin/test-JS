import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function TaskCalendar({ tasks = [] }) {
  const getTasksByDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString();
    return tasks.filter((task) => task.dueDate === formattedDate);
  };

  const tileContent = ({ date }) => {
    const tasksForDate = getTasksByDate(date);
    return (
      <div className="calendar-tile">
        {tasksForDate.length > 0 && (
          <span className="tile-indicator">{tasksForDate.length} задач</span>
        )}
      </div>
    );
  };

  return (
    <div>
      <h2>Календарь задач</h2>
      <Calendar tileContent={tileContent} />
    </div>
  );
}

export default TaskCalendar;
