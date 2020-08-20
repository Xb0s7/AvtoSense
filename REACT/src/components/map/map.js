import React from 'react';
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import mapStyles from './mapStyles';
import styles from './map.module.css'
const Map = () => {
    console.log(GoogleMap);
    return (
            <div className={styles["map-container"]}>
        <LoadScript googleMapsApiKey="AIzaSyAw0IprErbXJabz_WCmpaNxFTm3nq35vi8">
                <GoogleMap 
                mapContainerClassName={styles["map"]}
                zoom={17} 
                center={{lat:43.219715, lng:27.868872}}
                options = { {styles: mapStyles}}
                >
                    <Marker position={{lat:43.219695, lng:27.868946}}/>
                </GoogleMap>
        </LoadScript>
            </div>
    )
}

export default Map