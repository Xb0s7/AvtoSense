import React from 'react'
import NavButton from '../navButton/navButton'
import styles from './navBar.module.css'
const NavBar = () =>{
    return (
        <nav className={styles.nav}>
            <NavButton title="Home" href="/"/>
            <NavButton title="Services" href="services"/>
            <NavButton title="Reviews" href="reviews"/>
            <NavButton title="Directions" href="directions"/>
            <NavButton title="Schedule" href="schedule"/>
        </nav>
    )
}

export default NavBar