import React from 'react'
import styles from './directions.module.css'

class Directions extends Component {
    constructor (props) {
      super(props)
  
      this.state = {
        response: null,
        travelMode: 'DRIVING',
        origin: ''
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
    }
    
        checkDriving = ({ target: { checked } }) => {
        checked &&
        this.setState(
            () => ({
            travelMode: 'DRIVING'
            })
        )
    }

    getOrigin = (ref) => {
        this.origin = ref
    }

    onClick = () => {
        if (this.origin.value !== '') {
          this.setState(
            () => ({
              origin: this.origin.value,
            })
          )
        }
      }
    
    render(){
        return(
            <div className={styles.directions}>                
              <form className='form-group'>
                <label htmlFor='ORIGIN'>Origin</label>
                <br />
                <input id='ORIGIN' className='form-control' type='text' ref={this.getOrigin} />
              </form>
                <button className={styles.button} type='button' onClick={this.onClick}>
                 Build Route
                </button>
            </div>
        )
    }
}

export default Directons