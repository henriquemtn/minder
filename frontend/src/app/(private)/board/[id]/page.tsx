import getTasks from '@/lib/tasks'
import KanbanBoard from '@/ui/molecules/KanbanBoard/KanbanBoard'
import React from 'react'

export default async function Page() {
    const allTasks = await getTasks();
  return (
    <div className='max-w-7xl mx-auto mt-8 min-h-screen'>
        <KanbanBoard tasks={allTasks} />
    </div>
  )
}
