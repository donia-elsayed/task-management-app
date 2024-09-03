import React, { useState } from "react";
import TasksList from "./TasksList";

const TaskForm = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      name: taskInput,
      completed: false,
    };
    setTasks((prevTask) => [...prevTask, newTask]);
    setTaskInput("");
  };

  const toggleTaskToComplete = (id) => {
    const allTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, completed: !task.completed };
      else return task;
    });
    setTasks(allTasks);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  return (
    <div className="w-50 m-auto my-3" onSubmit={addTask}>
      <form className="d-flex gap-3 justify-content-center">
        <input
          className="border rounded w-50 p-2"
          type="text"
          placeholder="Enter Task Name..."
          value={taskInput}
          onChange={handleInputChange}
        />
        <button className="btn btn__add text-white px-3">Add Task</button>
      </form>
      <TasksList
        tasks={tasks}
        onDeleting={deleteTask}
        onToggling={toggleTaskToComplete}
      />
    </div>
  );
};

export default TaskForm;
