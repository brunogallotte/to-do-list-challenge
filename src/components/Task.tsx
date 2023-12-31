import styles from './Task.module.css'

import { Check, Trash } from 'phosphor-react'

export interface TaskProps {
    title: string
    status: 'checked' | 'unchecked'
    changeTaskStatus?: (title: string, status: 'checked' | 'unchecked') => void
    onDeleteTask?: (taskToDelete: TaskProps) => void
}

export function Task({ title, status, changeTaskStatus, onDeleteTask }: TaskProps) {
    function handleStatus() {
        if (changeTaskStatus) {
            changeTaskStatus(title, status === 'unchecked' ? 'checked' : 'unchecked')
        }
    }

    function handleDeleteTask() {
        const taskToDelete = {title: title, status: status}

        if(onDeleteTask) {
            onDeleteTask(taskToDelete)
        }
    }

    return(
        <div className="container">
            <div className={status === 'checked' ? styles.wrapperChecked : styles.wrapperUnChecked}>
                <div>
                    {status === 'checked' ? (
                        <Check 
                            className={styles.checkedCircle} 
                            onClick={handleStatus}
                        />
                    ) : (
                        <div
                            className={styles.circle}
                            onClick={handleStatus}
                        />
                    )}
                    <p className={status === 'checked' ? styles.checkedTask : styles.uncheckedTask}>{title}</p>
                </div>
                <Trash className={styles.trash} onClick={handleDeleteTask} />
            </div>
        </div>
    )
}