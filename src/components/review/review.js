import React from 'react';
import styles from './review.module.css';

const Review = ({firstName, lastName, createdOn, review}) => {
    return (
        <div className={styles.row}>
            <div className={styles.info}>
                <div className={styles.name}>{firstName} {lastName}</div>
                <div className={styles.date}>
                    {`${createdOn.slice(8, 10)}/${createdOn.slice(5, 7)}/${createdOn.slice(0, 4)}`}
                </div>
            </div>
            <div className={styles.comment}>
                <span>{review}</span>
            </div>
        </div>
    )
}

export default Review