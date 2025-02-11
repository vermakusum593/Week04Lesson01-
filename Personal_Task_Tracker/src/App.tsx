import React, { useState } from "react";
import TaskForm from "./Components/TaskForm.tsx";
import TaskList from "./Components/TaskList.tsx";
import TaskItem from "./Components/TaskItem.tsx";
import { Task } from "./types/Task.ts";
import "../src/styles.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskText: string) => {
    const newTask: Task = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (id: number, newText: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Personal Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        toggleComplete={toggleComplete} 
        editTask={editTask} 
        deleteTask={deleteTask} 
      />
    </div>
  );
};

export default App;
