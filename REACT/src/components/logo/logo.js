import React from 'react'
import styles from './logo.module.css'
import logo from '../../images/logo2.jpg'
const Logo = () => {
    return (
        <div className={styles.link}>
                <a href="/">
                    <img  src={logo} alt="logo" className={styles.logo}/>
                </a>
        </div>
    )
}

export default Logo