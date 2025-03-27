
import React from 'react';
import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';
import { useTasks } from '@/hooks/useTasks';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const { tasks, addTask, toggleTaskCompleted } = useTasks();
  
  // Count completed tasks
  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 container max-w-2xl py-12 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="animate-slide-in">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl mb-1">Tasks</h1>
          <p className="text-muted-foreground">
            {totalCount > 0 
              ? `${completedCount} of ${totalCount} task${totalCount !== 1 ? 's' : ''} complete`
              : 'Add some tasks to get started'
            }
          </p>
          
          <Separator className="my-6" />
          
          <TaskForm onAddTask={addTask} />
          
          <TaskList 
            tasks={tasks}
            onToggleTask={toggleTaskCompleted}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
