import React, { Component } from 'react';
import styles from './card.module.css'
import UserContext from '../../utils/context';
import {Link} from 'react-router-dom';
class Card extends Component {
    static contextType = UserContext;
    render() {
    
        return (
            <div className={styles.card}>
                <h2>YOU'RE IN GOOD HANDS</h2>
                <p>At AvtoSense, your satisfaction is our top priority. If you are already our client and you want to help us improve please leave a review. </p>
                <div className={styles["schedule-button"]}>
                    <Link to="reviews"><span>Reviews</span></Link>
                </div>
            </div>
        )
    }
}

export default Card;