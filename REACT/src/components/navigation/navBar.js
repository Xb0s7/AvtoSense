import React, { Component } from 'react';
import NavButton from '../navButton/navButton';
import styles from './navBar.module.css';
import UserContext from '../../utils/context';
class NavBar extends Component {
    
        static contextType = UserContext;

    render() {
        return (
            <nav className={styles.nav}>
                <NavButton title="Home" href="/"/>
                <NavButton title="Services" href="services"/>
                <NavButton title="Reviews" href="reviews"/>
                <NavButton title="Directions" href="directions"/>
            </nav>
        )
    }
}

export default NavBar