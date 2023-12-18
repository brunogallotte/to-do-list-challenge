import styles from './HeaderTaskList.module.css'
import { TaskProps } from './Task'

interface HeaderTaskListProps {
    totalTasks: number
    totalChecked: TaskProps[]
}

export function HeaderTaskList({ totalTasks, totalChecked }: HeaderTaskListProps) {
    return(
        <header className="container">
            <div className={styles.wrapper}>
                <div className={styles.totalTasks}>
                    <strong>Tarefas criadas</strong>
                    <span>{totalTasks}</span>
                </div>
                <div className={styles.completedTasks}>
                    <strong>Concluídas</strong>
                    <span>{totalChecked.length} de {totalTasks}</span>
                </div>
            </div>
        </header>
    )
}