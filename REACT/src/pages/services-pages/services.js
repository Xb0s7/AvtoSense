import React from 'react';
import Wrapper from '../../components/page-wrapper/wrapper';
import styles from './service.module.css'
const Services = () => {
    return(
        <Wrapper>
            <div className={styles['service-container']}>
                <h1 className={styles.title}>Avtosense Services</h1>

                <p className={styles.about}>Avtosense offers top-quality auto repair and maintenance services to residents of Varna city
                 and surrounding communities. We have a team of skilled  technicians who only use the latest diagnostic
                 tools and equipment in the automotive industry. Our technicians receive ongoing training to deliver
                 the highest quality of service possible. When you bring your car to us for a repair or maintenance
                 service, we'll treat you with respect and dignity. We won't bother you with any unnecessary expenses.
                 From transmission repair to oil changes, we’re here for all of your auto repair needs! 
                 Our shop is a full-service, auto repair facility that offers free Wi-Fi, 
                 and an exceptional customer service.</p>

                 <ul>
                     <li>Steering & Suspension Systems</li>
                     <li>Tune-up’s</li>
                     <li>Brakes</li>
                     <li>Engine Performance & Maintenance</li>
                     <li>Check Engine Light Diagnosis</li>
                     <li>Electrical</li>
                     <li>Exhaust & Muffler</li>
                     
                 </ul>
                 <ul>
                     <li>Transmission & Driveline Repair</li>
                     <li>Belts & Hoses</li>
                     <li>Batteries & Charging Systems</li>
                     <li>Lights, Wipers & Accessories</li>
                     <li>Heating & Air Conditioning</li>
                     <li>Anything else that you can think of!</li>
                 </ul>
            </div>
        </Wrapper>
    )
}

export default Services