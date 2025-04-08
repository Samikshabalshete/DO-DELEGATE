import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // custom styles

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const updateStatus = (index, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Do & Delegate – Employee Work Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateStatus={updateStatus} />
    </div>
  );
}

export default App;