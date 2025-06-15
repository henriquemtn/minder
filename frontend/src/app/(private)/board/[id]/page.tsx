import getTasks from '@/lib/tasks'
import KanbanBoard from '@/ui/molecules/KanbanBoard/KanbanBoard'
import React from 'react'

export default async function Page() {
    const allTasks = await getTasks();
    return (
        <>
            <KanbanBoard tasks={allTasks} />
        </>
    )
}
