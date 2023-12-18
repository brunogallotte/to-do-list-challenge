import styles from './Task.module.css'

import checkBoxIcon from '../assets/checkbox.svg'
import checkedIcon from '../assets/checkedIcon.svg'
import trashIcon from '../assets/trashIcon.svg'

export interface TaskProps {
    title: string
    status: 'checked' | 'unchecked'
    changeStatus?: (title: string, status: 'checked' | 'unchecked') => void
}

export function Task({ title, status, changeStatus  }: TaskProps) {
    function handleStatus() {
        if (changeStatus) {
            changeStatus(title, status === 'unchecked' ? 'checked' : 'unchecked')
        }

        console.log(status)
    }

    return(
        <div className="container">
            <div className={styles.wrapper}>
                <div>
                    <img src={status === 'checked' ? checkedIcon : checkBoxIcon} className={styles.checkBox} onClick={handleStatus}/>
                    <p className={status === 'checked' ? styles.checkedTask : styles.uncheckedTask}>{title}</p>
                </div>
                <img src={trashIcon} className={styles.trash} />
            </div>
        </div>
    )
}