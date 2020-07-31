import React from 'react'
import Link from '../link/link'
import styles from './nav.module.css'
const Navigation = () =>{
    return (
        <nav className={styles.nav}>
            <Link title="Home" href="#"/>
            <Link title="Services" href="#"/>
            <Link title="Reviews" href="#"/>
            <Link title="Directions" href="#"/>
            <Link title="Schedule" href="#"/>
        </nav>
    )
}

export default Navigation