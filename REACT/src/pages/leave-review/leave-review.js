import React, { Component } from 'react';
import Wrapper from '../../components/page-wrapper/wrapper';
import UserContext from '../../utils/context';
import styles from './leave-review.module.css'

class LeaveReview extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            review: ''
        };
    }
    static contextType = UserContext
    handleChange =  (e, type) =>{
        const newState = {};
        newState[type] = e.target.value;
        this.setState(newState);
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const {
            firstName,
            lastName,
            review
        } = this.state;
        console.log(this.context.user);
        try{
            const promise = await fetch('http://localhost:9999/api/reviews', {
            method: 'POST',
                body: JSON.stringify({
                    firstName,
                    lastName,
                    review,
                    email: this.context.user.email
                }),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const response = await promise.json();
            if(response){
                this.props.history.push('/reviews');
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
                        <label>First Name</label>
                            <input type="text" className={styles.inputs} value={this.state.value} onChange={(e) =>this.handleChange(e, "firstName")}/>
                        <label>Last Name</label>
                            <input type="text" className={styles.inputs} value={this.state.value} onChange={(e) => this.handleChange(e, "lastName")}/>
                        <label>Review</label>
                            <textarea type="text" maxLength="450" className={styles.review} value={this.state.value} onChange={(e) => this.handleChange(e, "review")}/>    
                        <button type="submit" className={styles.post}>Post</button>
                    </form>
                </div>
            </Wrapper>
        )
    }

    
}
export default LeaveReview