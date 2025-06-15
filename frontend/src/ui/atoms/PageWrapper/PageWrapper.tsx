import React from 'react'
import { cn } from '@/lib/utils'

interface PageWrapperProps {
    children: React.ReactNode;
    topFade?: boolean;
    fullWidth?: boolean;
    className?: string;
}

export default function PageWrapper({ children, topFade, fullWidth, className }: PageWrapperProps) {
    return (
        <div className={cn('bg-white py-16', className)}>
            {topFade && (
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-100 to-transparent pointer-events-none" />
            )}
            <section className={cn(
                "px-4 sm:px-6 lg:px-8",
                fullWidth ? "w-full" : "max-w-7xl mx-auto"
            )}>
                {children}
            </section>
        </div>
    )
}