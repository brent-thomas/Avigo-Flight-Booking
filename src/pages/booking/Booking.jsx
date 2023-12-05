import styles from './booking.module.css'
import backButton from '../../assets/back_button.png'
import delta_icon from '../../assets/delta_icon.png'
import delta_logo from '../../assets/delta_logo.png'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const Booking = () => {
  const [departureF, setDeparture] = useState([]);
  const [arrivalF, setArrival] = useState([]);

  const location = useLocation();
  const data = location;
  const airports = [
    "Hartsfield-Jackson Atlanta International Airport",
    "Denver International Airport",
    "Dallas/Fort Worth International Airport",
    "John F. Kennedy International Airport",
    "McCarran International Airport",
    "Los Angeles International Airport",
    "Orlando International Airport",
    "Miami International Airport",
    "Chicago O'Hare International Airport",
    "Seattle-Tacoma International Airport",
    "San Francisco International Airport"
  ];

  const code = [
    "ATL",
    "DEN",
    "DFW",
    "JFK",
    "LAS",
    "LAX",
    "MCO",
    "MIA",
    "ORD",
    "SEA",
    "SFO"
  ];

  const cities = [
    "Atlanta",
    "Denver",
    "Dallas/Fort Worth",
    "New York City",
    "Las Vegas",
    "Los Angeles",
    "Orlando",
    "Miami",
    "Chicago",
    "Seattle",
    "San Francisco"
  ];
  
    /////////////////////////////
    /////////Booking Page////////// 
    /////////////////////////////

    useEffect(() => {
      
      const fetchAirports = async () => {
        if(airports.includes(data.state.dep)){
          var indexDep = code[airports.indexOf(data.state.dep)];
        }
      
        if(airports.includes(data.state.arr)){
          var indexArr = code[airports.indexOf(data.state.arr)];
        }
        try {
          const Depresponse = await axios.post('https://k8ueu9903m.execute-api.us-east-2.amazonaws.com/dev',
            {
              'arrival': indexArr,
              'departure': indexDep
            });
            setDeparture(Depresponse.data.body[0]);
            
            const arrive = await axios.post('https://k8ueu9903m.execute-api.us-east-2.amazonaws.com/dev',
            {
              'arrival': indexDep,
              'departure': indexArr
            });
             
             setArrival(arrive.data.body[0]);

        } 
        catch (error) {
          console.error('Error fetching airports:', error);
        }
      };
      fetchAirports();
    }, []);
    

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
            <option hidden>{data.state.dep}</option>
            {airports.map((airport, index) => (
              <option key={index} value={airport}>
                {airport !== 'Select Airport' ? airport : ''}
              </option>
            ))}
          </select>
          <select className={styles.dropdown}>
            <option hidden>{data.state.arr}</option>
            {airports.map((airport, index) => (
              <option key={index} value={airport}>
                {airport !== 'Select Airport' ? airport : ''}
              </option>
            ))}
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

              <p className={styles.departArrive}>Departure: {(departureF.Date)} </p>
              <div className = {styles.wrapper}>
                <br/>
              
                <div>
                  <p className={styles.flightTimeDepart}>7:00 am</p>
                  <br/>
                  <p className={styles.cityAirport}>{cities[code.indexOf(departureF.DepartureLocation)]} ({departureF.DepartureLocation})</p>
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
                  <p className={styles.cityAirport}>{cities[code.indexOf(departureF.ArrivalLocation)]}  ({departureF.ArrivalLocation})</p>
                </div>
              </div>

              <br/>
              <br/>
              <p className={styles.departArrive}>Return: {(arrivalF.Date)}</p>
              <div className = {styles.wrapper}>
                <br/>
                <div>
                  <p className={styles.flightTimeDepart}>8:42 am</p>
                  <br/>
                  <p className={styles.cityAirport}>{cities[code.indexOf(arrivalF.DepartureLocation)]} ({arrivalF.DepartureLocation})</p>
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
                  <p className={styles.cityAirport}>{cities[code.indexOf(arrivalF.ArrivalLocation)]} ({arrivalF.ArrivalLocation})</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.vline}></div>
          <div className={styles.priceBox}>
            <p id='price' className={styles.price}>${parseFloat(arrivalF.Price)+parseFloat(departureF.Price)}</p>
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