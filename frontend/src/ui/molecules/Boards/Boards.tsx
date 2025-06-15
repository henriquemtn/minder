import Board from '@/ui/atoms/Board'
import React from 'react'

export default function Boards() {
    return (
        <div>
            <h1 className='font-bold text-zinc-800'>Your boards</h1>
            <div className='flex flex-row gap-4 mt-4'>
                <Board imageUrl='/images/fuji.jpg' title='Estudos' description='Meus estudos e projetos pessoais, onde pratico novas tecnologias e conceitos.' />
                <Board imageUrl='/images/montain.jpg' title='Trabalho' description='Projetos e tarefas relacionadas ao meu trabalho.' />
                <Board imageUrl='/images/garden.jpg' title='Pessoal' description='Atividades e hobbies que me relaxam e trazem alegria.' />
            </div>
        </div>
    )
}
