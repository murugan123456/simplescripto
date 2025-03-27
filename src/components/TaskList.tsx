
import React from 'react';
import { Task } from '@/hooks/useTasks';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
  return (
    <div className="mt-6 max-h-[60vh] overflow-y-auto overflow-x-hidden">
      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li
            key={task.id}
            className={cn(
              "task-item group relative rounded-md px-4 py-3 bg-white border border-border task-item-transition animate-fade-in",
              "hover:bg-task-hover hover:shadow-sm",
              task.completed && "bg-task-completed"
            )}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex items-start gap-3">
              <button
                onClick={() => onToggleTask(task.id)}
                className={cn(
                  "flex-shrink-0 h-5 w-5 mt-1 rounded-full border task-checkbox",
                  "flex items-center justify-center",
                  task.completed ? "border-primary bg-primary" : "border-gray-300"
                )}
                aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
              >
                {task.completed && <Check className="h-3 w-3 text-white animate-check-mark" />}
              </button>
              
              <div className="flex-1">
                <h3 
                  className={cn(
                    "font-medium text-lg task-text",
                    task.completed && "text-gray-500 line-through"
                  )}
                >
                  {task.text}
                </h3>
                <p 
                  className={cn(
                    "text-sm text-gray-600 mt-1 task-text",
                    task.completed && "text-gray-400"
                  )}
                >
                  {task.description}
                </p>
              </div>
            </div>
          </li>
        ))}

        {tasks.length === 0 && (
          <div className="text-center py-10 text-gray-500 animate-fade-in">
            <p>No tasks yet. Add one to get started.</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
