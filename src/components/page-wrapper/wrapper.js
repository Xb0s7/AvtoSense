import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
const Wrapper = (props) => {
    return (
    <div className="app">
      <Header/>
      <div className="container">
          {props.children}
      </div>
      <Footer/>
    </div>
    )
}

export default Wrapper;