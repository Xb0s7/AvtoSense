import React from 'react';
import Wrapper from '../../components/page-wrapper/wrapper';
import Card from '../../components/card/card';
import styles from './home-page.module.css';
import CustomerCareSection from '../../components/customer-care/customer-care';

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
