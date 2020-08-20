import React from 'react';
import styles from './navButton.module.css'
import {Link} from 'react-router-dom'

const NavButton = ({title, href}) => {
    return (
        <li className={styles.link}>
            <Link to={href} className={styles.tag}>
                {title}
            </Link>
        </li>
    )
}

export default NavButton