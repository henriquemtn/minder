import React from 'react';
import { Task as TaskType } from '@/lib/types';
import { BiCalendar } from 'react-icons/bi';

interface KanbanCardProps {
  task: TaskType;
  onDragStart: (e: React.DragEvent) => void;
}

export default function KanbanCard({ task, onDragStart }: KanbanCardProps) {
  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric'
    });
  };

  // Get priority color
  const getPriorityColor = (priority?: string) => {
    if (!priority) return null;
    
    const colors = {
      HIGH: 'bg-red-500',
      MEDIUM: 'bg-yellow-500',
      LOW: 'bg-blue-500',
    };
    
    return colors[priority as keyof typeof colors] || null;
  };

  return (
    <div 
      className="bg-white rounded-md shadow-sm p-3 cursor-move hover:shadow transition-shadow"
      draggable
      onDragStart={onDragStart}
    >
      {/* Priority indicator if applicable */}
      {task.priority && (
        <div className="flex mb-2">
          <div className={`h-1.5 w-12 rounded-full ${getPriorityColor(task.priority)}`}></div>
        </div>
      )}
      
      {/* Task title */}
      <h4 className="font-medium text-gray-800 mb-1.5">{task.title}</h4>
      
      {/* Task description preview */}
      {task.description && (
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{task.description}</p>
      )}
      
      {/* Metadata footer */}
      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
        {/* Due date if available */}
        {task.dueDate && (
          <div className="flex items-center">
            <BiCalendar className="h-3 w-3 mr-1" />
            <span>{formatDate(task.dueDate)}</span>
          </div>
        )}
        
        {/* Created date */}
        <div className="flex items-center">
          <span>{task.createdAt && formatDate(task.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}