export interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  export interface toggleComplete {
    id: number;
  }
  export interface editTask {
    id: number, 
    newText: string;
  }
  export interface deleteTask {
    id: number;
  }