import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";

import mapStyles from './mapStyles';
import styles from './map.module.css'
class Map extends Component {

    constructor(props) {
        super(props)

        this.state = {
            response: null,
            travelMode: 'DRIVING',
            origin: 'AS',
            destination: 'ул.Перла 16'
        }

    }
    directionsCallback = (response) => {
        console.log(response)

        if (response !== null) {
            if (response.status === 'OK') {
                this.setState(
                    () => ({
                        response
                    })
                )
            } else {
                console.log('response: ', response)
            }
        }
    }

    getOrigin = (ref) => {
        this.origin = ref
    }

    onClick = (e) => {
        e.preventDefault();
        if (this.origin.value !== '') {
            this.setState(
                () => ({
                    origin: this.origin.value,
                })
            )
        }
    }

    render() {

        return (
            <div className={styles["map-page-container"]}>
                <div className={styles.directions}>
                    <form className={styles["directions-form"]}>
                        <label htmlFor='ORIGIN' className={styles.label}>Origin</label>
                        <br />
                        <input id='ORIGIN' className={styles.origin} type='text' defaultValue="Please enter your adress" ref={this.getOrigin} />
                    </form>
                    <button className={styles.button} type='button' onClick={this.onClick}>
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
                                    this.state.origin !== ''
                                ) && (
                                    <DirectionsService
                                        options={{
                                            destination: this.state.destination,
                                            origin: this.state.origin,
                                            travelMode: this.state.travelMode
                                        }}
                                        callback={this.directionsCallback}
                                    />
                                )
                            }
                            {
                                this.state.response !== null && (
                                    <DirectionsRenderer
                                        options={{
                                            directions: this.state.response
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
}

export default Map