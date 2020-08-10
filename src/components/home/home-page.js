import React from 'react';
import Wrapper from '../page-wrapper/wrapper';
import Card from '../card/card';
import styles from './home-page.module.css';
import CustomerCareSection from '../customer-care/customer-care';

function Home() {
  return(
    <Wrapper>
        <div className={styles.main}>
            <Card/>
        </div>
        <CustomerCareSection/>
    </Wrapper>
      
  )
}

export default Home;
