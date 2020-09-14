import React, { Component } from 'react';
import UserContext from './utils/context';

class UserAuth extends Component{
    constructor(props){
        super(props);

        this.state = {
            loggedIn: false,
            user: null
        }
    }

    logIn = (user) => {
        this.setState({
            loggedIn: true,
            user
        })
    }

    logOut = () => {
        this.setState({
            loggedIn: false,
            user: null,
        })
        document.cookie = "x-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    render() {
        return(
            <UserContext.Provider value={{
                ...this.state,
                logIn: this.logIn,
                logOut: this.logOut
            }}>
            {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserAuth