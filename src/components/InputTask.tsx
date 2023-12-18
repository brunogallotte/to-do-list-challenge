import styles from './InputTask.module.css'

import plusIcon from '../assets/plus.svg'

export function InputTask() {
    return(
        <div className="container">
            <div className={styles.wrapper}>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <button type="button">
                    Criar <img src={plusIcon} />
                </button>
            </div>
        </div>
    )
}