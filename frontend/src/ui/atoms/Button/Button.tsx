import React from 'react';
import { twMerge } from 'tailwind-merge'; // Você precisará instalar: npm install tailwind-merge

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'warning' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  // Estilos base compartilhados por todas as variantes
  const baseStyles = 'rounded font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Mapeamento de variantes para estilos
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-zinc-800 text-white hover:bg-zinc-700 focus:ring-zinc-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400',
    ghost: 'bg-transparent text-zinc-800 hover:bg-zinc-100 focus:ring-zinc-300'
  };
  
  // Mapeamento de tamanhos para estilos
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg'
  };
  
  // Estilos para o estado desativado
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Estilo para largura total
  const widthStyles = fullWidth ? 'w-full' : '';
  
  // Combinar todos os estilos
  const buttonStyles = twMerge(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabledStyles,
    widthStyles,
    className
  );
  
  return (
    <button
      type={type}
      className={buttonStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}