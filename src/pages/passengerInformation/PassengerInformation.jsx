/*
Written by: Harrison Rosser
Date: 12/6/2023
*/

import React, { useState } from "react";
import styles from "./passengerInformation.module.css"; 
import backButton from './back_button.png'
import delta_logo from '../../assets/delta_logo.png'

const PassengerInformation = () => {
  
  // Initialize state variable for form fields
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [IdNumber, setIdNumber] = useState("");
  const [DOB, setDOB] = useState("");
  const [Address, setAddress] = useState("");
  const [CardNumber, setCardNumber] = useState("");
  const [Expiry, setExpiry] = useState("");
  const [CVV, setCVV] = useState("");
  const [FullName, setFullName] = useState("");
  const [BillingAddress, setBillingAddress] = useState("");
  const [City, setCity] = useState("");

  // Functions to handle input changes
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleIdNumberChange = (e) => {
    setIdNumber(e.target.value);
  };
  const handleDOBChange = (e) => {
    setDOB(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };
  const handleExpiryChange = (e) => {
    setExpiry(e.target.value);
  };
  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleBillingAddressChange = (e) => {
    setBillingAddress(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

   // Function to handle form submission
   const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    // Check if all fields are filled
    if (!FirstName || !LastName || !IdNumber || !DOB || !Address || ! CardNumber || !Expiry || !CVV || !FullName || !BillingAddress || !City) {
      alert("Please fill out all information."); // Show an alert for missing fields
      return;
    }

    // If all fields are filled, navigate to confirmation
    window.location.href = "/confirmation";
  };

  return (
    
    <div className={styles.pageContent}>
      {/* Back Button */}
      <a href="/booking" className={styles.backButton}>
        <img src={backButton} alt="Back" className={styles.backButtonImg}/>
      </a>

      <h2 className={styles.head2}>Enter Passenger Information</h2>

      {/* White Container */}
      <div className={styles.container}>
        <div className={styles.airline_container}>
          <img src={delta_logo} className={styles.logo}></img>
          <p className={styles.airline}>Delta Airlines</p>
        </div>

        {/* Blue Box */}
        <div className={styles.blueBox}>
          <p className={styles.blueBoxTopLine} style={{ fontSize: '1em', fontWeight: 'normal', marginBottom: '10px' }}>Confirm Your Trip Details</p>
          <p className={styles.blueBoxBottomLine} style={{ fontSize: '1em', fontWeight: '550' }}>FLIGHT 002</p>
        </div>
        
        {/* Input Prompt */}
        <div className={styles.inputContainer}>
          <p className={styles.infoText}><span style={{ color: 'red' }}>*</span>Please enter your information as it shows on your passport or ID</p>
          <div className={styles.passengerForm}>
            
            {/* Identity Information */}
            <p className={styles.infoHeading1}>Passenger 1</p>
            <div className={styles.passengerName}>
            <input
              type="text" className={styles.input50} id="FirstName" placeholder="First Name"
              value={FirstName} onChange={handleFirstNameChange}
            />
             <input type="text" className={styles.input50} id="LastName"placeholder="Last Name"
              value={LastName} onChange={handleLastNameChange} />
              </div>
            <div className={styles.passengerIdDOB}>
              <input type="text" className={styles.input67} id="IdNumber" placeholder="ID Number" 
              value={IdNumber} onChange={handleIdNumberChange} />
              <input type="text" className={styles.input33} id="DOB" placeholder="DOB" 
              value={DOB} onChange={handleDOBChange} />
            </div>
            <input type="text" className={styles.input100} id="Address" placeholder="Home Address"
              value={Address} onChange={handleAddressChange} />


            {/* Payment Information */}
            <p className={styles.infoHeading2}>Payment Information</p>
            <input type="text" className={styles.input100} id="CardNumber" placeholder="Card Number"
              value={CardNumber} onChange={handleCardNumberChange} />
            <div className={styles.expiryCcvInputs}>
              <input type="text" className={styles.input67} id="Expiry" placeholder="Expiration Date"
              value={Expiry} onChange={handleExpiryChange} />
              <input type="text" className={styles.input33} id="CVV" placeholder="CCV"
              value={CVV} onChange={handleCVVChange} />
            </div>
            <br></br>
            <input type="text" className={styles.input100} id="FullName" placeholder="Name on Card"
              value={FullName} onChange={handleFullNameChange} />
            <input type="text" className={styles.input100} id="BillingAddress" placeholder="Billing Address"
              value={BillingAddress} onChange={handleBillingAddressChange} />
            <div className={styles.billingInputs}>
              <input type="text" className={styles.input50} id="City" placeholder="City"
              value={City} onChange={handleCityChange} />
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
            <a href="/confirmation" className={styles.submitButton} onClick={handleSubmit}>
              SUBMIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerInformation;