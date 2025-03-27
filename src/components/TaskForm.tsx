
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';

interface TaskFormProps {
  onAddTask: (text: string, description: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (text.trim()) {
      onAddTask(text.trim(), description.trim());
      setText('');
      setDescription('');
      setIsExpanded(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-border p-4 shadow-sm">
      <div className="space-y-3">
        <Input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          className="border-none bg-secondary/50 focus-visible:ring-1 focus-visible:ring-primary/30 placeholder:text-gray-400 text-base"
        />
        
        {isExpanded && (
          <div className="animate-fade-in">
            <Textarea
              placeholder="Add details (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="resize-none border-none bg-secondary/50 focus-visible:ring-1 focus-visible:ring-primary/30 placeholder:text-gray-400 text-sm"
            />
          </div>
        )}
        
        <div className={`flex justify-end ${isExpanded ? 'animate-fade-in' : 'hidden'}`}>
          <Button 
            type="button" 
            variant="ghost" 
            className="mr-2 text-gray-500 hover:text-gray-700 hover:bg-secondary/70"
            onClick={() => {
              setText('');
              setDescription('');
              setIsExpanded(false);
            }}
          >
            Cancel
          </Button>
          
          <Button 
            type="submit" 
            disabled={!text.trim()}
            className="bg-primary hover:bg-primary/90 transition-colors duration-200"
          >
            <Plus className="h-4 w-4 mr-1" /> Add Task
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
