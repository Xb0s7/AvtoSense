import React from 'react';
import styles from './preFooter.module.css'
const PreFooter = () => {
 return (
     <div className={styles.preFooter}>
         <div className={styles.container}>
             <div className={styles.extra}>
                <i className="fas fa-tools"></i>
                 <h2>SERVICE</h2>
                 <p>
                     Come to us for a variety of automotive services ranging from basic maintenance to heavy repair.
                </p>
             </div>
             <div className={styles.extra}>
                <i className="far fa-clock"></i>
                 <h2>VALUE</h2>
                 <p>
                 With competitive rates and fast service, we’ll give you the best value for your time and money.
                 </p>
             </div>
             <div className={styles.extra}>
                <i className="far fa-star"></i>
                 <h2>INTEGRITY</h2>
                 <p>
                     We believe in treating our customers fairly because we want your business now, and far into the future.
                 </p>
             </div>
         </div>
     </div>
 )
}
export default PreFooter