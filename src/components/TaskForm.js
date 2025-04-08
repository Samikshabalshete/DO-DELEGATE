import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [assignee, setAssignee] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && assignee) {
      addTask({ taskName, assignee, status: "To Do" });
      setTaskName("");
      setAssignee("");
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row g-2">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Assign To"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100" type="submit">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;