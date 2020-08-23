import React, { Component } from 'react';
import NavBar from '../navigation/navBar';
import styles from './header.module.css';
import Logo from '../logo/logo';
import UserContext from '../../utils/context';
class Header extends Component {

    static contextType = UserContext;
    render(){
        let name;
        if(this.context.loggedIn){
        name = <span className={styles.name}>Welcome: {this.context.user.email}</span>
        } else {
            name = null;
        }
        return (
            <div className={styles.header}>
                    <Logo/>
                <div className={styles["pre-navigation-wrapper"]}>
                    <div className={styles["pre-navigation"]}>
                    <span>AUTO SERVICE VARNA </span>
                    <span><i className="fas fa-map-marker-alt"></i> ul.Perla №16</span>
                    <span><strong><i className="fas fa-phone-alt"></i>0893626233</strong></span>
                    {name}
                    </div>
                    <NavBar/>    
                </div>
            </div>
        )
    }
}

export default Header;
