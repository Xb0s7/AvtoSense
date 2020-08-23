import React from 'react'
import Logo from '../logo/logo'
import styles from './footer.module.css'
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.backround}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                    <Logo/>
                    </div>
                    <div className={styles.information}>
                        <p>0893626233 </p>
                        <p>Adress: ul.Perla №16</p>
                        <p>Monday - Friday: 9:00 - 18:00</p>
                        <p>Saturday: 9:00 - 14:00</p>
                    </div>
                    <div className={styles.directions}>
                        <a href="/directions"> 
                        <span>Get Directions</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer