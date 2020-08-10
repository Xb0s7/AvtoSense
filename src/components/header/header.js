import React from 'react';
import NavBar from '../navigation/navBar';
import styles from './header.module.css';
import Logo from '../logo/logo';
const Header = () => {
    return (
        <div className={styles.header}>
                <Logo/>
            <div className={styles["pre-navigation-wrapper"]}>
                <div className={styles["pre-navigation"]}>
                <span>АВТОСЕРВИЗ ВАРНА  ***** 100 ревюта</span>
                <span><i className="fas fa-map-marker-alt"></i> ул.Перла №16</span>
                <span><strong><i className="fas fa-phone-alt"></i>0893626233</strong></span>
                </div>
                <NavBar/>    
            </div>
        </div>
    )
}

export default Header;
