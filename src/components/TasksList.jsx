import React from "react";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  const { tasks, onDeleting, onToggling } = props;

  return (
    <div className="tasks__container m-auto my-5 rounded">
      {tasks?.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          onDelete={onDeleting}
          onToggle={onToggling}
        />
      ))}
    </div>
  );
};

export default TasksList;
