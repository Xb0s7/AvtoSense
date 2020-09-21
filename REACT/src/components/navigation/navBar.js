import React, { useContext } from 'react';
import NavButton from '../navButton/navButton';
import styles from './navBar.module.css';
import UserContext from '../../utils/context';
const NavBar = () => {

    const { loggedIn, logOut } = useContext(UserContext);

    let button;
    if (loggedIn) {
        button = <button className={styles.logout} onClick={logOut}>Logout</button>;
    } else {
        button = <NavButton title="Login" href="login" />
    }
    return (
        <nav className={styles.nav}>
            <NavButton title="Home" href="/" />
            <NavButton title="Services" href="services" />
            <NavButton title="Reviews" href="reviews" />
            <NavButton title="Directions" href="directions" />
            {button}
        </nav>
    )
}

export default NavBar