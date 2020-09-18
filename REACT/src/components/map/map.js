import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import mapStyles from './mapStyles';
import styles from './map.module.css'

const Map = () => {
    const [travelMode, setTravelMode] = useState("DRIVING");
    const [origin, setOrigin] = useState('');
    const [response, setResponse] = useState(null);
    const [destination, setDestination] = useState('ул.Перла 16')
    let origins;
    const directionsCallback = (resp) => {
        console.log(resp)
       
        if (resp !== null) {
            if (resp.status === 'OK') {
                setResponse(resp)
            } else {
                console.log('response: ', resp)
            }
        }
    }

    const getOrigin = (ref) => {
        origins = ref;
    }
    const onClick = (e) => {
        console.log(origins.value)
        let text = origins.value;
        e.preventDefault();
        if (origins.value !== '') {
            setOrigin(origins.value)
        }
    }

    return (
        <div className={styles["map-page-container"]}>
            <div className={styles.directions}>
                <form className={styles["directions-form"]} >
                    <label htmlFor='ORIGIN' className={styles.label}>Origin</label>
                    <br />
                    <input id='ORIGIN' className={styles.origin} type='text' defaultValue="Варна" ref={getOrigin}   />
                </form>
                <button className={styles.button} type='submit' onClick={onClick}>
                    Build Route
                </button>
            </div>
            <div className={styles["map-container"]}>

                <LoadScript googleMapsApiKey="AIzaSyAw0IprErbXJabz_WCmpaNxFTm3nq35vi8">
                    <GoogleMap
                        mapContainerClassName={styles["map"]}
                        zoom={17}
                        center={{ lat: 43.219715, lng: 27.868872 }}
                        options={{ styles: mapStyles }}
                    >
                        {
                            (
                                origins !== ''
                            ) && (
                                <DirectionsService
                                    options={{
                                        destination: destination,
                                        origin: origin,
                                        travelMode: travelMode
                                    }}
                                    callback={directionsCallback}
                                />
                            )
                        }
                        {
                            response !== null && (
                                <DirectionsRenderer
                                    options={{
                                        directions: response
                                    }}
                                />
                            )
                        }
                        <Marker position={{ lat: 43.219695, lng: 27.868946 }} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )
}
export default Map