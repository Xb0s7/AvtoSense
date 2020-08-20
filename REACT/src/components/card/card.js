import React from 'react';
import styles from './card.module.css'
const Card = () => {
    return (
        <div className={styles.card}>
            <h2>YOU'RE IN GOOD HANDS</h2>
            <p>At AvtoSense, your satisfaction is our top priority. Give us a call to schedule your next service today. </p>
            <div className={styles["schedule-button"]}>
                <a  href="/schedule">
                <span>Schedule</span>
                </a>
            </div>
        </div>
    )
}

export default Card;