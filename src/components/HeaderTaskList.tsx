import styles from './HeaderTaskList.module.css'

interface HeaderTaskListProps {
    totalTasks: number
    totalChecked: number
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
                    <span>{totalChecked} de {totalTasks}</span>
                </div>
            </div>
        </header>
    )
}