import Image from 'next/image'
import React from 'react'

interface UserProps {
    avatar: string;
    name?: string;
    role?: string;
    onlyAvatar?: boolean;
}

export default function User({ avatar, name, role, onlyAvatar }: UserProps) {

    if (onlyAvatar) {
        return (
            <Image
                height={48}
                width={48}
                src={avatar}
                alt='User Avatar'
                className='max-w-12 max-h-12 rounded-lg object-cover' />
        )
    }

    return (
        <div className='flex flex-row items-center max-w-max gap-2'>
            <Image
                height={48}
                width={48}
                src={avatar}
                alt='User Avatar'
                className='w-12 h-12 rounded-lg' />
            <div className='flex flex-col'>
                <h2 className='font-bold text-start text-base text-zinc-800'>{name}</h2>
                <span className='text-sm text-zinc-500'>{role}</span>
            </div>
        </div>
    )
}
