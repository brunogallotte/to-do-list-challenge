import { useState } from 'react'

import styles from './InputTask.module.css'

import plusIcon from '../assets/plus.svg'

import { TaskProps } from './Task'

interface InputTaskProps {
    addTask: (task: TaskProps) => void
}

export function InputTask({ addTask }: InputTaskProps) {
    const [input, setInput] = useState<TaskProps>({title: '', status: 'unchecked'})

    function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
        const title = event.target.value

        setInput({title: title, status: 'unchecked'})
    }

    function handleChangeTask() {
        addTask(input)
        setInput({title: '', status: 'unchecked'})
    }
    

    return(
        <div className="container">
            <div className={styles.wrapper}>
                <input type="text" value={input.title} placeholder="Adicione uma nova tarefa" onChange={onChangeInput} />
                <button type="button" onClick={handleChangeTask}>
                    Criar <img src={plusIcon} />
                </button>
            </div>
        </div>
    )
}