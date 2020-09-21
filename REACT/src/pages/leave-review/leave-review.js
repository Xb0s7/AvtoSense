import React, { useContext, useState } from 'react';
import Wrapper from '../../components/page-wrapper/wrapper';
import UserContext from '../../utils/context';
import styles from './leave-review.module.css'

const LeaveReview = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [review, setReview] = useState("")

    const {user } = useContext(UserContext)

    const handleChange = (e, type) => {
        switch (type) {
            case 'firstName':
                setFirstName(e.target.value)
                break;
            case 'lastName':
                setLastName(e.target.value)
                break;
            case 'review':
                setReview(e.target.value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const promise = await fetch('http://localhost:9999/api/reviews', {
                method: 'POST',
                body: JSON.stringify({
                    firstName,
                    lastName,
                    review,
                    email: user.email
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const response = await promise.json();
            if (response) {
                props.history.push('/reviews');
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Wrapper>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label>First Name</label>
                    <input type="text" className={styles.inputs} onChange={(e) => handleChange(e, "firstName")} />
                    <label>Last Name</label>
                    <input type="text" className={styles.inputs} onChange={(e) => handleChange(e, "lastName")} />
                    <label>Review</label>
                    <textarea type="text" maxLength="450" className={styles.review}  onChange={(e) => handleChange(e, "review")} />
                    <button type="submit" className={styles.post}>Post</button>
                </form>
            </div>
        </Wrapper>
    )

}
export default LeaveReview