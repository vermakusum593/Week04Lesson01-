import React from "react";
import TaskItem from "./TaskItem.tsx";
import { Task } from "../types/Task";

interface TaskListProps {
  tasks: Task[];
  toggleComplete: (id: number) => void;
  editTask: (id: number, newText: string) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete, editTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleComplete={toggleComplete} 
          editTask={editTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;
