import Image from 'next/image'
import React from 'react'

export default function User() {
    return (
        <div className='flex flex-row items-center max-w-max gap-2'>
            <Image
                height={48}
                width={48}
                src='https://avatars.githubusercontent.com/u/92762031?v=4'
                alt='User Avatar'
                className='w-12 h-12 rounded-full' />
            <div className='flex flex-col'>
                <h2 className='font-bold text-start text-base text-zinc-800'>Henrique</h2>
                <span className='text-sm text-zinc-500'>FullStack Developer</span>
            </div>
        </div>
    )
}
