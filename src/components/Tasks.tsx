import styles from './Tasks.module.css'

import clipboarIcon from '../assets/clipboard.svg'

export function Tasks() {
    return(
        <>
            <header className="container">
                <div className={styles.wrapper}>
                    <div className={styles.totalTasks}>
                        <strong>Tarefas criadas</strong>
                        <span>0</span>
                    </div>
                    <div className={styles.completedTasks}>
                        <strong>Concluídas</strong>
                        <span>0</span>
                    </div>
                </div>
            </header>

            <main className="container">
                <div className={styles.tasksContent}>
                    <img src={clipboarIcon} alt="Ícone de tarefas" />
                    <div>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <strong>Crie tarefas e organize seus itens a fazer</strong>
                    </div>
                </div>
            </main>
        </>
    )
}