import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, updateStatus }) {
  const statuses = ["To Do", "In Progress", "Done"];

  return (
    <div className="row">
      {statuses.map((status) => (
        <div className="col-md-4" key={status}>
          <h4 className="text-center mb-3">{status}</h4>
          {tasks
            .filter((task) => task.status === status)
            .map((task, index) => (
              <TaskCard key={index} task={task} index={index} updateStatus={updateStatus} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default TaskList;