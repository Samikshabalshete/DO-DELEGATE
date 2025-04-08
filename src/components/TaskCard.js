import React from "react";

function TaskCard({ task, index, updateStatus }) {
  const nextStatus = {
    "To Do": "In Progress",
    "In Progress": "Done",
    "Done": "To Do",
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{task.taskName}</h5>
        <p className="card-text">Assigned to: {task.assignee}</p>
        <button
          className="btn btn-primary"
          onClick={() => updateStatus(index, nextStatus[task.status])}
        >
          Move to {nextStatus[task.status]}
        </button>
      </div>
    </div>
  );
}

export default TaskCard;