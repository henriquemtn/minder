"use client";

import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    
    useEffect(() => {
        // Atualiza a cada segundo
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        
        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(timer);
    }, []);
    
    // Formatar a hora (20:24)
    const formatTime = (date: Date): string => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };
    
    // Formatar a data (Junho 24, 2025)
    const formatDate = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
        };
        return date.toLocaleDateString('pt-BR', options);
    };
    
    // Capitaliza primeira letra (para português)
    const capitalizeFirstLetter = (str: string): string => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className='flex max-w-max flex-col text-zinc-500'>
            <h2 className='font-bold text-end text-xl'>{formatTime(currentTime)}</h2>
            <span className='text-sm'>{capitalizeFirstLetter(formatDate(currentTime))}</span>
        </div>
    );
}