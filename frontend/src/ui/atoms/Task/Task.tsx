"use client";

import React, { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { Task as TaskTypes } from '@/lib/types';

// Helper function to format date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric'
  });
};

// Helper function to get priority dot color
const getPriorityColor = (priority?: string) => {
  if (!priority) return null;
  
  const colors = {
    HIGH: 'bg-red-500',
    MEDIUM: 'bg-yellow-500',
    LOW: 'bg-blue-500',
  };
  
  return colors[priority as keyof typeof colors] || null;
};

export default function Task({ task }: { task: TaskTypes }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(task.status === 'COMPLETED');
  
  const toggleStatus = () => {
    setIsCompleted(!isCompleted);
    // Here you would update the task status in your backend
  };
  
  return (
    <div 
      className="group flex items-center px-3 py-2 rounded-md border-b border-gray-100 hover:bg-gray-50 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Checkbox */}
      <button 
        onClick={toggleStatus}
        className={`flex-shrink-0 h-5 w-5 mr-3 flex items-center justify-center rounded border ${
          isCompleted ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
        }`}
      >
        {isCompleted && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      
      {/* Content */}
      <div className="flex-grow">
        {/* Title row with status pill */}
        <div className="flex items-center">
          <h3 className={`font-medium ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
            {task.title}
          </h3>
          
          {/* Small colored status indicator */}
          {task.status && task.status !== 'COMPLETED' && task.status !== 'TODO' && (
            <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
              {task.status === 'IN_PROGRESS' ? 'In progress' : task.status}
            </span>
          )}
        </div>
        
        {/* Description - only show if not too long */}
        {task.description && task.description.length < 100 && (
          <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">
            {task.description}
          </p>
        )}
      </div>
      
      {/* Right side metadata */}
      <div className="flex items-center space-x-3 ml-4">
        {/* Due date badge */}
        {task.dueDate && (
          <span className="text-xs text-gray-500 flex items-center">
            <FaCalendar className="mr-1 text-gray-400" size={10} />
            {formatDate(task.dueDate)}
          </span>
        )}
        
        {/* Priority dot */}
        {task.priority && (
          <div className={`h-2 w-2 rounded-full ${getPriorityColor(task.priority)}`}></div>
        )}
        
        {/* Action buttons - only visible on hover */}
        <div className={`flex transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
            <BsThreeDots size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}