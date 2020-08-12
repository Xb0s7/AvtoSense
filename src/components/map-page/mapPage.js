import React from 'react';
import Map from '../map/map';
import Wrapper from '../page-wrapper/wrapper';
import styles from './mapPage.module.css';
const MapPage = () =>{
    return(
        <Wrapper>
            <div className={styles["map-page"]}>
                <div className={styles["map-page-container"]}>
                    <Map/>
                </div>
            </div>
        </Wrapper>
          
    )
}

export default MapPage