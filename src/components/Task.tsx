import styles from './Task.module.css'

import checkBoxIcon from '../assets/checkbox.svg'
import trashIcon from '../assets/trashIcon.svg'

export function Task() {
    return(
        <div className="container">
            <div className={styles.wrapper}>
                <img src={checkBoxIcon} className={styles.checkBox}/>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <img src={trashIcon} className={styles.trash} />
            </div>
        </div>
    )
}