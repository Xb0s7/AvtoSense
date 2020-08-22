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


    handleChange = (e, type) =>{
        this.setState({type: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }
    render(){
        return(
            <Wrapper>
                <div className={styles.container}>
                    <form onSubmit={this.handleSubmit} className={styles.form}>
                        <label>Email</label>
                            <input type="text" className={styles.inputs} value={this.state.value} onChange={(e) =>this.handleChange(e, "email")}/>
                        <label>Password</label>
                            <input type="password" className={styles.inputs} value={this.state.value} onChange={(e) => this.handleChange(e, "password")}/>
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