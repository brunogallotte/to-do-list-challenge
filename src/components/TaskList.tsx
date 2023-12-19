import { Task } from './Task'
import { TaskProps } from './Task'
import { useState } from 'react'
import { InputTask } from './InputTask'
import { HeaderTaskList } from './HeaderTaskList'

import styles from './TaskList.module.css'

import clipboarIcon from '../assets/clipboard.svg'

const Tasks: TaskProps[] = []

export function TaskList() {
    const [tasks, setTasks] = useState<TaskProps[]>(Tasks)

    const totalChecked: TaskProps[] = tasks.filter((task) => {
        if(task.status === 'checked') {
            return task
        }
    })
    
    function addTask(task: TaskProps) {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].title === task.title) {
              alert('Tarefa já cadastrada!')

              return
            }
          }
        
          setTasks([...tasks, task])
    }

    function changeTaskStatus(title: string, status: 'checked' | 'unchecked') {
        const updatedTasks = tasks.map(task => {
            if(task.title === title) {
                return { ...task, status}
            }

            return task
        })
        
        setTasks(updatedTasks)
    }

    function onDeleteTask(taskToDelete: TaskProps) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.title != taskToDelete.title
        })

        setTasks(tasksWithoutDeletedOne)
    }

    return(
        <>
            <InputTask addTask={addTask}/>
            <HeaderTaskList totalTasks={tasks.length} totalChecked={totalChecked.length}/>

            <main className="container">

                {tasks.length > 0 ? (
                    tasks.map((task: TaskProps) => (
                        <Task key={task.title} changeTaskStatus={changeTaskStatus} onDeleteTask={onDeleteTask} title={task.title} status={task.status} />
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