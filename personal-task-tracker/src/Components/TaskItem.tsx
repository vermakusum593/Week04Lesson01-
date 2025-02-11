import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  toggleComplete: (id: number) => void;
  editTask: (id: number, newText: string) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
        />
      ) : (
        <span onClick={() => toggleComplete(task.id)}>
          {task.text}
        </span>
      )}

      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <>
           <button onClick={() => console.log("Checked!")}>
        <FaEdit />
      </button>
      <button onClick={() => console.log("Deleted!")}>
        <FaTrash />
      </button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
