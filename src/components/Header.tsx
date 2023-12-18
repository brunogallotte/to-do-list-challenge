import styles from './Header.module.css'

import logo from '../assets/rocket.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <img src={logo} />
                <strong>to<span>do</span></strong>
            </div>
        </header>
    )
}