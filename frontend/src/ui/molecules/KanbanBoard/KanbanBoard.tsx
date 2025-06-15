"use client";

import React, { useState } from 'react';
import { Task as TaskType } from '@/lib/types';
import KanbanColumn from './KanbanColumn';
import { BiPlus } from 'react-icons/bi';
import Image from 'next/image';

interface KanbanBoardProps {
  tasks: TaskType[];
  backgroundImage?: string;
}

export default function KanbanBoard({ tasks, backgroundImage = "/images/garden.jpg" }: KanbanBoardProps) {
  const [columns, setColumns] = useState([
    {
      id: 'todo',
      title: 'To Do',
      tasks: tasks.filter(task => task.status === 'TODO'),
      color: 'bg-blue-500'
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: tasks.filter(task => task.status === 'IN_PROGRESS'),
      color: 'bg-yellow-500'
    },
    {
      id: 'completed',
      title: 'Completed',
      tasks: tasks.filter(task => task.status === 'COMPLETED'),
      color: 'bg-green-500'
    }
  ]);

  // Function to handle drag start
  const handleDragStart = (e: React.DragEvent, taskId: string, sourceColumnId: string) => {
    e.dataTransfer.setData('taskId', taskId);
    e.dataTransfer.setData('sourceColumnId', sourceColumnId);
  };

  // Function to handle drop
  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');

    if (sourceColumnId === targetColumnId) return;

    // Clone columns array to avoid direct state mutation
    const updatedColumns = [...columns];
    
    // Find source and target columns
    const sourceColumnIndex = updatedColumns.findIndex(col => col.id === sourceColumnId);
    const targetColumnIndex = updatedColumns.findIndex(col => col.id === targetColumnId);
    
    if (sourceColumnIndex === -1 || targetColumnIndex === -1) return;
    
    // Find task to move
    const taskToMove = updatedColumns[sourceColumnIndex].tasks.find(task => task.id === taskId);
    
    if (!taskToMove) return;
    
    // Remove task from source column
    updatedColumns[sourceColumnIndex] = {
      ...updatedColumns[sourceColumnIndex],
      tasks: updatedColumns[sourceColumnIndex].tasks.filter(task => task.id !== taskId)
    };
    
    // Add task to target column with updated status
    const newStatus = targetColumnId === 'todo' ? 'TODO' : 
                      targetColumnId === 'in-progress' ? 'IN_PROGRESS' : 'COMPLETED';
    
    updatedColumns[targetColumnIndex] = {
      ...updatedColumns[targetColumnIndex],
      tasks: [...updatedColumns[targetColumnIndex].tasks, { ...taskToMove, status: newStatus }]
    };
    
    // Update state
    setColumns(updatedColumns);
  };
  
  // Function to allow drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  
  // Function to add a new column
  const handleAddColumn = () => {
    const newColumnId = `column-${columns.length + 1}`;
    setColumns([
      ...columns,
      {
        id: newColumnId,
        title: 'New Column',
        tasks: [],
        color: 'bg-purple-500'
      }
    ]);
  };

  return (
    <div className="relative h-full overflow-hidden">
     <div className="absolute inset-0 z-0">
        <div className="w-full min-h-screen relative">
          <Image
            src={backgroundImage}
            alt="Kanban Background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>
      
      {/* Kanban content */}
      <div className="relative z-10 overflow-x-auto py-8 px-6">
        <div className="flex space-x-4 max-w-7xl mx-auto pb-4">
          {columns.map(column => (
            <KanbanColumn 
              key={column.id}
              id={column.id}
              title={column.title}
              tasks={column.tasks}
              color={column.color}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            />
          ))}
          
          <div 
            className="flex-shrink-0 w-72 bg-white/80 backdrop-blur-sm rounded-lg h-auto flex flex-col items-center justify-center cursor-pointer hover:bg-white/90 transition-colors shadow-md"
            onClick={handleAddColumn}
          >
            <div className="p-4 flex flex-col items-center">
              <BiPlus className="h-6 w-6 text-gray-500" />
              <span className="text-gray-500 mt-1">Add Column</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}