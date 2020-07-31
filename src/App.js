import React from 'react';
import Header from './components/header/header'
import PreFooter from './components/preFooter/preFooter'
import styles from './app.module.css'
function App() {
  return(
    <div className={styles.container}>
      <Header/>
      <div className={styles.intro}>
        <div className={styles.card}>
          <h2>YOU'RE IN GOOD HANDS</h2>
          <p>At AvtoSense, your satisfaction is our top priority. Give us a call to schedule your next service today. </p>
          <a className={styles.schedule} href="/schedule">
            <span>Запази</span>
          </a>
        </div>
      </div>
      <PreFooter/>
    </div>
  )
}

export default App;
