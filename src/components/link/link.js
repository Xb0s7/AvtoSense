import React from 'react';
import styles from './link.module.css'

const Link = ({title, href}) => {
    return (
        <li className={styles.link}>
            <a href={href} className={styles.tag}>
                {title}
            </a>
        </li>
    )
}

export default Link