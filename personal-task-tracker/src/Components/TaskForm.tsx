import React, { useState } from "react";

interface TaskFormProps {
  addTask: (taskText: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter a task..." 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
