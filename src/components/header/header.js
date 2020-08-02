import React from 'react'
import Navigation from '../navigation/nav'
import styles from './header.module.css'
import logo from './logo2.jpg'
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.link}>
                <a href="#">
                    <img  src={logo} className={styles.logo}/>
                </a>
            </div>
            <div className={styles["pre-navigation-wrapper"]}>
                <div className={styles["pre-navigation"]}>
                <span>АВТОСЕРВИЗ ВАРНА  ***** 100 ревюта</span>
                <span><i className="fas fa-map-marker-alt"></i> ул.Перла №16</span>
                <span><strong><i className="fas fa-phone-alt"></i>0893626233</strong></span>
                </div>
                <Navigation className={styles.nav}/>    
            </div>
        </div>
    )
}

export default Header
