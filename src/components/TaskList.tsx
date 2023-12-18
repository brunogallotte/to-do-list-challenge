import styles from './TaskList.module.css'

import clipboarIcon from '../assets/clipboard.svg'
import { Task } from './Task'
import { TaskProps } from './Task'
import { useState } from 'react'
import { InputTask } from './InputTask'

const Tasks: TaskProps[] = [
]

export function TaskList() {
    const [tasks, setTasks] = useState<TaskProps[]>(Tasks)

    function changeTask(task: TaskProps) {
        setTasks([...tasks, task])        
    }

    function changeStatus(title: string, status: 'checked' | 'unchecked') {
        const updatedTasks = tasks.map(task => {
            if(task.title === title) {
                return { ...task, status}
            }

            return task
        })
        
        setTasks(updatedTasks)
    }

    return(
        <>
            <InputTask changeTask={changeTask}/>
            <header className="container">
                <div className={styles.wrapper}>
                    <div className={styles.totalTasks}>
                        <strong>Tarefas criadas</strong>
                        <span>{tasks.length}</span>
                    </div>
                    <div className={styles.completedTasks}>
                        <strong>Concluídas</strong>
                        <span>2 de 5</span>
                    </div>
                </div>
            </header>

            <main className="container">

                {tasks.length > 0 ? (
                    tasks.map((task: TaskProps) => (
                        <Task key={task.title} changeStatus={changeStatus} title={task.title} status={task.status} />
                    ))
                ) : (
                    <div className={styles.tasksContent}>
                        <img src={clipboarIcon} alt="Ícone de tarefas" />
                        <div>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <strong>Crie tarefas e organize seus itens a fazer</strong>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}