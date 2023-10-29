import styles from './booking.module.css'
import backButton from '../../assets/back_button.png'
import delta_icon from '../../assets/delta_icon.png'
import delta_logo from '../../assets/delta_logo.png'

const Booking = () => {
    /////////////////////////////
    /////////Booking Page////////// 
    /////////////////////////////
  return (
    <div className={styles.main}>
      <a href = '/dashboard'>
        <img src={backButton} className={styles.back}/>
      </a>
        
        <h1>Booking page</h1>
        <br/>
        <br/>
        
        <p className={styles.header}>Search Flights</p>
        <div>
          <select className={styles.dropdown}>
            <option>Hartsfield Jackson International Airport</option>
            <option>Chicago OHare International Airport</option>
          </select>
          <select className={styles.dropdown}>
            <option>Chicago OHare International Airport</option>
            <option>Hartsfield Jackson International Airport</option>
          </select>
          <input type = 'date' id = 'departure' className={styles.date}></input>
          <input type = 'date' id = 'arrival' className={styles.date}></input>
          <button id = 'submit' className={styles.submit}>Submit</button>
        </div>

        <div className={styles.wrapperWB}>
          <div className={styles.flightBox}>
            <div>
              <img src={delta_logo} className={styles.logo}></img>
              <p className={styles.airline}>Delta Airlines</p>

              <p className={styles.departArrive}>October 15, 2023 - Departure</p>
              <div className = {styles.wrapper}>
                <br/>
              
                <div>
                  <p className={styles.flightTimeDepart}>7:00 am</p>
                  <br/>
                  <p className={styles.cityAirport}>Atlanta (ATL)</p>
                </div>
              
                <div className={styles.innerSquare}>
                  <h2 className={styles.line}>
                    <span className={styles.spanText}>
                      1h15min
                    </span>
                  </h2>
                </div>
              
                <div>
                  <p className={styles.flightTimeArrive}>8:15 am</p>
                  <br/>
                  <p className={styles.cityAirport}>Chicago (ORD)</p>
                </div>
              </div>

              <br/>
              <br/>
              <p className={styles.departArrive}>October 29, 2023 - Return</p>
              <div className = {styles.wrapper}>
                <br/>
                <div>
                  <p className={styles.flightTimeDepart}>8:42 am</p>
                  <br/>
                  <p className={styles.cityAirport}>Chicago (ORD)</p>
                </div>
              
                <div className={styles.innerSquare}>
                  <h2 className={styles.line}>
                    <span className={styles.spanText}>
                      1h15min
                    </span>
                  </h2>
                </div>
                <div>
                  <p className={styles.flightTimeArrive}>11:51 am</p>
                  <br/>
                  <p className={styles.cityAirport}>Atlanta (ATL)</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.vline}></div>
          <div className={styles.priceBox}>
            <p id='price' className={styles.price}>$267</p>
            <br/>
            <a href='/passengerInformation'>
            <button className={styles.bookButton}>Book</button>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Booking