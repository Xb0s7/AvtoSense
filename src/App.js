import React from 'react';
import Header from './components/header/header'
import styles from './app.module.css'
import CustomerCareSection from './components/customer-care/customer-care';
function App() {
  return(
    <div className={styles.container}>
      <Header/>
      <div className={styles.intro}>
        <div className={styles.card}>
          <h2>YOU'RE IN GOOD HANDS</h2>
          <p>At AvtoSense, your satisfaction is our top priority. Give us a call to schedule your next service today. </p>
          <a className={styles["schedule-button"]} href="/schedule">
            <span>Schedule</span>
          </a>
        </div>
      </div>
      <CustomerCareSection/>
    </div>
  )
}

export default App;
