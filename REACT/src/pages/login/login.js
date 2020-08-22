import React, { Component } from 'react';
import styles from './login.module.css';
import Wrapper from '../../components/page-wrapper/wrapper';
import {Link} from 'react-router-dom';
class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleChange =  (e, type) =>{
        const newState = {};
        newState[type] = e.target.value;
        this.setState(newState);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {
            email,
            password
        } = this.state
        try{
            
            const promise = await fetch('http://localhost:9999/api/user/login', {
            method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const authToken = promise.headers.get('Authorization');
            document.cookie = `x-auth-token=${authToken}`;
            const response = await promise.json();

            if(response.email && authToken){
                this.props.history.push('/');
            }
        } catch(e){
            console.log(e);
        }
    }
    render(){
        return(
            <Wrapper>
                <div className={styles.container}>
                    <form onSubmit={this.handleSubmit} className={styles.form}>
                        <label>Email</label>
                            <input type="text" className={styles.inputs}  onChange={(e) =>this.handleChange(e, "email")}/>
                        <label>Password</label>
                            <input type="password" className={styles.inputs}  onChange={(e) => this.handleChange(e, "password")}/>
                        <button type="submit" className={styles.login}>Log In</button>
                        <p className={styles["to-register"]}>
                            You dont have an account?
                            <Link to="register" >Register Now!</Link>   
                        </p>
                            
                    </form>
                </div>
            </Wrapper>
        )
    }
}
export default Login