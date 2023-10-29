import React from "react";
import styles from "./passengerInformation.module.css"; 
import backButton from './back_button.png'

const PassengerInformation = () => {
  return (
    
    <div className={styles.pageContent}>

      {/* Back Button */}
      <a href="/booking" className={styles.backButton}>
        <img src={backButton} alt="Back" className={styles.backButtonImg}/>
      </a>

      <h2 className={styles.head2}>Enter Passenger Information</h2>

      {/* White Container */}
      <div className={styles.container}>
        <div className={styles.airlineName}>AirlineName</div>

        {/* Blue Box */}
        <div className={styles.blueBox}>
          <p className={styles.blueBoxTopLine} style={{ fontSize: '1em', fontWeight: 'normal', marginBottom: '10px' }}>Confirm Your Trip Details</p>
          <p className={styles.blueBoxBottomLine} style={{ fontSize: '1em', fontWeight: '550' }}>FLIGHT FlightId</p>
        </div>
        
        {/* Input Prompt */}
        <div className={styles.inputContainer}>
          <p className={styles.infoText}><span style={{ color: 'red' }}>*</span>Please enter your information as it shows on your passport or ID</p>
          <div className={styles.passengerForm}>
            
            {/* Identity Information */}
            <p className={styles.infoHeading1}>Passenger 1</p>
            <div className={styles.passengerName}>
              <input type="text" className={styles.input50} id="FirstName" placeholder="First Name" />
              <input type="text" className={styles.input50} id="LastName"placeholder="Last Name" />
              </div>
            <div className={styles.passengerIdDOB}>
              <input type="text" className={styles.input67} id="IdNumber" placeholder="ID Number" />
              <input type="text" className={styles.input33} id="DOB" placeholder="DOB" />
            </div>
            <input type="text" className={styles.input100} id="Address" placeholder="Home Address" />


            {/* Payment Information */}
            <p className={styles.infoHeading2}>Payment Information</p>
            <input type="text" className={styles.input100} id="CardNumber" placeholder="Card Number" />
            <div className={styles.expiryCcvInputs}>
              <input type="text" className={styles.input67} id="Expiry" placeholder="Expiration Date" />
              <input type="text" className={styles.input33} id="CVV" placeholder="CCV" />
            </div>
            <br></br>
            <input type="text" className={styles.input100} id="FullName" placeholder="Name on Card" />
            <input type="text" className={styles.input100} id="BillingAddress" placeholder="Billing Address" />
            <div className={styles.billingInputs}>
              <input type="text" className={styles.input50} id="City" placeholder="City" />
              <select className={styles.selectState} id="State">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <a href="/confirmation" className={styles.submitButton}>
              SUBMIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerInformation;