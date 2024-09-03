import React from "react";

const TaskItem = (props) => {
  const { task, onDelete, onToggle } = props;
  return (
    <div className="d-flex bg-white p-3 border rounded mb-3 justify-content-between align-items-baseline">
      <div className="d-flex align-items-baseline gap-2">
        <input type="checkbox" name="" onChange={() => onToggle(task.id)} />
        <p className={`mb-0 text-capitalize ${task.completed ? "done" : ""}`}>
          {task.name}
        </p>
      </div>
      <button className="btn btn-danger py-1" onClick={() => onDelete(task.id)}>
        X
      </button>
    </div>
  );
};

export default TaskItem;
