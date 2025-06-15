import React from 'react'
import { GoContainer } from 'react-icons/go'
import { IoAnalytics } from 'react-icons/io5'

export default function Sidebar() {
    return (
        <div className='w-64 bg-zinc-600 p-4 rounded-lg'>
            <ul>
                <li className='font-semibold p-2 rounded-lg text-zinc-100'>
                    <GoContainer className='inline-block mr-2' />
                    Boards
                </li>
                <li className='font-semibold p-2 rounded-lg text-zinc-100'>
                    <IoAnalytics className='inline-block mr-2' />
                    Activity
                </li>
            </ul>
        </div>
    )
}
