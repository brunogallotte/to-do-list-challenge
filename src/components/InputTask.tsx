import { useState } from 'react'

import styles from './InputTask.module.css'

import plusIcon from '../assets/plus.svg'
import { TaskProps } from './Task'

interface InputTaskProps {
    changeTask: (task: TaskProps) => void
}

export function InputTask({ changeTask }: InputTaskProps) {
    const [input, setInput] = useState<TaskProps>({title: '', status: 'unchecked'})

    function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
        const title = event.target.value

        setInput({title: title, status: 'unchecked'})
    }

    function handleChangeTask() {
        changeTask(input)
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