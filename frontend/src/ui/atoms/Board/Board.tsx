"use client";

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

interface BoardProps {
    title?: string;
    description?: string;
    imageUrl?: string;
}

export default function Board({ title, description, imageUrl }: BoardProps) {
    const router = useRouter();

    const navigateToBoard = () => {
        router.push(`/board/${title}`);
    }
    return (
        <div
            className="relative hover:scale-105 duration-300 cursor-pointer aspect-square size-[225px] rounded-lg overflow-hidden"
            onClick={navigateToBoard}
        >
            {/* Imagem de fundo */}
            <Image
                src={imageUrl || "/images/garden.jpg"}
                alt="Hero background"
                fill
                priority
                className="object-cover rounded-lg"
            />

            {/* Gradiente escuro para melhorar legibilidade */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"
            />

            {/* Conteúdo sobreposto */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-xl font-bold text-white mb-4 max-w-3xl">
                    {title || "Kanban Board"}
                </h1>
                <p className="text-xs text-gray-200 mb-8 max-w-xl">
                    {description || "A simple and intuitive board to manage your tasks and projects. Drag and drop cards, add comments, and collaborate with your team."}
                </p>
            </div>
        </div>
    )
}
