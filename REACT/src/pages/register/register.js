import React, { useState} from 'react';
import styles from './register.module.css';
import Wrapper from '../../components/page-wrapper/wrapper';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e, type) => {
        switch (type) {
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'rePassword':
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const promise = await fetch('http://localhost:9999/api/user/register', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const response = await promise.json();
            if (response.email) {
                props.history.push('/login');
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Wrapper>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label>Email</label>
                    <input type="text" className={styles.inputs}  onChange={(e) => handleChange(e, "email")} />
                    <label>Password</label>
                    <input type="password" className={styles.inputs}  onChange={(e) => handleChange(e, "password")} />
                    <label>Re-Password</label>
                    <input type="password" className={styles.inputs} v onChange={(e) => handleChange(e, "rePassword")} />
                    <button type="submit" className={styles.register}>Register</button>
                </form>
            </div>
        </Wrapper>
    )
}
export default Register