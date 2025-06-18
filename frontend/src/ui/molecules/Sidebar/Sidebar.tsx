"use client";

import React from 'react';
import User from '@/ui/atoms/User';
import { useSidebar } from '@/context/SidebarContext';
import { BiChevronLeft, BiHomeAlt, BiTask, BiCalendar, BiCog, BiChevronRight, BiUser, BiBox, BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/ui/atoms/Button';
import { FaGithub } from 'react-icons/fa';

export default function Sidebar() {
    const { isOpen, toggleSidebar } = useSidebar();
    const pathname = usePathname();

    // Menu items
    const menuItems = [
        { name: 'Dashboard', icon: <BiHomeAlt size={20} />, path: '/dashboard' },
        { name: 'All Task', icon: <BiTask size={20} />, path: '/tasks' },
        { name: 'All Projects', icon: <BiBox size={20} />, path: '/projects' },
        { name: 'Team Schedule', icon: <BiUser size={20} />, path: '/team' },
    ];

    const settingsItems = [
        { name: 'Settings', icon: <BiCog size={20} />, path: '/settings' },
        { name: 'Sign out', icon: <BiLogOut size={20} />, path: '#' },
    ];

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    fixed md:static h-screen z-50 bg-white transition-all duration-300 flex flex-col
                    ${isOpen ? 'w-86' : 'w-20'}
                `}
            >
                {/* Header com usuário e botão toggle */}
                <div className="flex justify-between items-center p-4 border-b relative">
                    {isOpen ? (
                        <>
                            <User
                                avatar="https://avatars.githubusercontent.com/u/92762031?v=4"
                                name="Henrique Silveira"
                                role="Fullstack Developer"
                                onlyAvatar={false}
                            />
                            <div className="absolute -right-2 top-0 bottom-0 flex items-center justify-center">
                                <button onClick={toggleSidebar} className="bg-white rounded-full hover:bg-gray-100 text-gray-500">
                                    <BiChevronLeft size={20} />
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="w-full flex justify-center">
                            <User
                                avatar='https://avatars.githubusercontent.com/u/92762031?v=4'
                                onlyAvatar={true}
                            />
                            <div className="absolute -right-2 top-0 bottom-0 flex items-center justify-center">
                                <button onClick={toggleSidebar} className="bg-white rounded-full hover:bg-gray-100 text-gray-500">
                                    <BiChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Menu de navegação principal */}
                <nav className="flex-grow overflow-y-auto my-4">
                    <ul className="space-y-1 px-2">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className={`
                                            flex items-center p-2 rounded-lg transition-colors
                                            ${!isOpen ? 'justify-center' : ''}
                                            ${isActive
                                                ? 'bg-green-50 text-green-800'
                                                : 'text-gray-600 hover:bg-gray-100'}
                                        `}
                                    >
                                        <span className={`flex items-center justify-center ${!isOpen ? 'w-full' : ''}`}>
                                            {item.icon}
                                        </span>
                                        {isOpen && (
                                            <span className="ml-3 font-medium text-xs">{item.name}</span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* GitHub support section - versão expandida ou minimizada */}
                {isOpen ? (
                    <div className='p-4 mx-4 mb-4 bg-white border rounded-lg'>
                        <div className='flex flex-row gap-2 mb-2'>
                            <h2 className='text-base font-medium text-zinc-800'>Support with a Star</h2>
                        </div>
                        <p className='text-xs text-gray-400 mb-6'>If you like this project, please consider giving it a star on Github.</p>
                        <Button variant='outline' className='flex rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white items-center gap-2 text-xs w-full justify-center'>
                            <FaGithub size={20} className='text-white' />
                            Go to Github
                        </Button>
                    </div>
                ) : (
                    <div className='px-2 mb-4'>
                        <Button variant='outline' className='flex rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white items-center justify-center w-full h-10'>
                            <FaGithub size={20} className='text-white' />
                        </Button>
                    </div>
                )}

                {/* Menu de configurações fixo na parte inferior */}
                <div className="mt-auto border-t pb-6">
                    <ul className="px-2 py-3 space-y-1">
                        {settingsItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className={`
                                            flex items-center p-2 rounded-lg transition-colors
                                            ${!isOpen ? 'justify-center' : ''}
                                            ${isActive
                                                ? 'bg-green-50 text-green-800'
                                                : 'text-gray-600 hover:bg-gray-100'}
                                        `}
                                    >
                                        <span className={`flex items-center justify-center ${!isOpen ? 'w-full' : ''}`}>
                                            {item.icon}
                                        </span>
                                        {isOpen && (
                                            <span className="ml-3 font-medium text-xs">{item.name}</span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'w-86' : 'w-20'}`} />
        </>
    );
}