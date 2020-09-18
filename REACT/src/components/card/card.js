import React, { useContext } from 'react';
import styles from './card.module.css'
import UserContext from '../../utils/context';
import { Link } from 'react-router-dom';
const Card = () => {
    const {loggedIn} = useContext(UserContext);
    let button;
    if (loggedIn) {
        button = <Link to="reviews"><span>Reviews</span></Link>
    }
    else {
        button = <Link to="login"><span>Log In</span></Link>
    }
    return (
        <div className={styles.card}>
            <h2>YOU'RE IN GOOD HANDS</h2>
            <p>At AvtoSense, your satisfaction is our top priority. If you are already our client and you want to help us improve please Log In leave a review. </p>
            <div className={styles["schedule-button"]}>
                {button}
            </div>
        </div>
 )
}

export default Card;