import React, { useState, useContext } from 'react';
import styles from './login.module.css';
import Wrapper from '../../components/page-wrapper/wrapper';
import { Link } from 'react-router-dom';
import UserContext from '../../utils/context';
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { logIn } = useContext(UserContext);

    const handleChange = (e, type) => {
        switch (type) {
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const promise = await fetch('http://localhost:9999/api/user/login', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const authToken = promise.headers.get('Authorization');
            document.cookie = `Autorization=${authToken}`;
            const response = await promise.json();
            const user = {
                email: response.email,
                id: response._id
            }
            await logIn(user);

            if (response.email && authToken) {

                props.history.push('/');
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
                    <input type="text" className={styles.inputs} onChange={(e) => handleChange(e, "email")} />
                    <label>Password</label>
                    <input type="password" className={styles.inputs} onChange={(e) => handleChange(e, "password")} />
                    <button type="submit" className={styles.login}>Log In</button>
                    <p className={styles["to-register"]}>
                        You dont have an account?
                            <Link to="register" className={styles.register}>Register Now!</Link>
                    </p>
                </form>
            </div>
        </Wrapper>
    )
}
export default Login