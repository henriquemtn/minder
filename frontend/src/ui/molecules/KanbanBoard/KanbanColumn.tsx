import React from 'react';
import { Task as TaskType } from '@/lib/types';
import KanbanCard from './KanbanCard';
import { BiPlus } from 'react-icons/bi';

interface KanbanColumnProps {
  id: string;
  title: string;
  tasks: TaskType[];
  color: string;
  onDragStart: (e: React.DragEvent, taskId: string, columnId: string) => void;
  onDrop: (e: React.DragEvent, columnId: string) => void;
  onDragOver: (e: React.DragEvent) => void;
}

export default function KanbanColumn({
  id,
  title,
  tasks,
  color,
  onDragStart,
  onDrop,
  onDragOver
}: KanbanColumnProps) {
  return (
    <div 
      className="flex-shrink-0 w-72 bg-white/80 backdrop-blur-sm rounded-lg max-h-[calc(100vh-180px)] flex flex-col shadow-md"
      onDrop={(e) => onDrop(e, id)}
      onDragOver={onDragOver}
    >
      {/* Column Header */}
      <div className="p-3 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-sm rounded-t-lg z-10 border-b border-gray-100">
        <div className="flex items-center">
          <div className={`h-3 w-3 rounded-full mr-2 ${color}`}></div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <span className="ml-2 bg-gray-200 text-gray-600 text-xs rounded-full px-2 py-0.5">
            {tasks.length}
          </span>
        </div>
        <button className="text-gray-500 hover:text-gray-700 p-1 rounded-md hover:bg-gray-100">
          <BiPlus className="h-5 w-5" />
        </button>
      </div>
      
      {/* Task Cards */}
      <div className="p-2 flex-grow overflow-y-auto space-y-2 min-h-[200px]">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <KanbanCard 
              key={task.id} 
              task={task} 
              onDragStart={(e) => onDragStart(e, task.id, id)} 
            />
          ))
        ) : (
          <div className="h-20 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-md bg-white/40">
            <p className="text-sm text-gray-400">Drop tasks here</p>
          </div>
        )}
      </div>
    </div>
  );
}