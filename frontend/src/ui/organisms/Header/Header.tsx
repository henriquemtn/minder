import Clock from '@/ui/atoms/Clock'
import User from '@/ui/atoms/User'
import React from 'react'

export default function Header() {
    return (
        <div className='p-4 border-b'>
            <div className='flex flex-row justify-between items-center max-w-7xl mx-auto'>
                <User />
                <Clock />
            </div>
        </div>
    )
}
