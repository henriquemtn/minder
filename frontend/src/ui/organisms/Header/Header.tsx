import Clock from '@/ui/atoms/Clock'
import User from '@/ui/atoms/User'
import React from 'react'

export default function Header() {
    return (
        <header className='sticky top-0 z-50 w-full bg-zinc-100 border-b shadow-sm'>
            <div className='flex flex-row justify-between items-center max-w-7xl mx-auto p-4'>
                <User />
                <Clock />
            </div>
        </header>
    )
}