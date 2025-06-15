import React from 'react'
import Boards from '@/ui/molecules/Boards/Boards'

async function BoardPage() {
    return (
        <div className='bg-zinc-50 min-h-screen'>
            <div className='flex max-w-7xl gap-4 mx-auto mt-8'>
                <Boards />
            </div>
        </div>
    )
}

export default BoardPage