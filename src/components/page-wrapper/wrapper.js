import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './wrapper.module.css'
const Wrapper = (props) => {
    return (
    <div className="app">
      <Header/>
      <div className={styles.container}>
          {props.children}
      </div>
      <Footer/>
    </div>
    )
}

export default Wrapper;