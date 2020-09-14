import React from 'react';
import Map from '../../components/map/map';
import Wrapper from '../../components/page-wrapper/wrapper';
import styles from './mapPage.module.css';
const MapPage = () =>{
    return(
        <Wrapper>
            <div className={styles["map-page"]}>
                    <Map/>
            </div>
        </Wrapper>
          
    )
}

export default MapPage