import React, { Component } from 'react';
import styles from './register.module.css';
import Wrapper from '../../components/page-wrapper/wrapper';

class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            rePassword: ""
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
                        <label>Re-Password</label>
                            <input type="password" className={styles.inputs} value={this.state.value} onChange={(e) => this.handleChange(e, "rePassword")}/>    
                        <button type="submit" className={styles.register}>Register</button>
                    </form>
                </div>
            </Wrapper>
        )
    }
}
export default Register