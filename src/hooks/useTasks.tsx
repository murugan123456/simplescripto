
import { useState, useEffect } from 'react';

export interface Task {
  id: string;
  text: string;
  description: string;
  completed: boolean;
}

export function useTasks() {
  // Initialize tasks from localStorage if available
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: '1', text: 'Create wireframes', description: 'Design user interface mockups for the new project', completed: false },
      { id: '2', text: 'Update documentation', description: 'Review and update API documentation with latest changes', completed: false },
      { id: '3', text: 'Schedule meeting', description: 'Set up a team meeting to discuss project progress', completed: false },
    ];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (text: string, description: string) => {
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      text,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle a task's completed status
  const toggleTaskCompleted = (id: string) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return {
    tasks,
    addTask,
    toggleTaskCompleted,
    deleteTask
  };
}
