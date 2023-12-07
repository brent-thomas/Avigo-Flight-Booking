import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './dashboard.module.css';
import { Link, useNavigate } from 'react-router-dom';


export default function Home() {
  
  const navigate = useNavigate();
  const [departureAirports, setDepartureAirports] = useState([]);
  const [arrivalAirports, setArrivalAirports] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  //
  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);

  
  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await axios.get('https://7wu408k6r5.execute-api.us-east-2.amazonaws.com/dev/flights');

        const airportNames = JSON.parse(response.data.body);

        console.log('Parsed Airport Names:', airportNames);

        setDepartureAirports(airportNames);
        setArrivalAirports(airportNames);
      } catch (error) {
        console.error('Error fetching airports:', error);
      }
    };

    fetchAirports();
  }, []);

  const handleSearch = (event) => {
    if(!departure || !arrival || !startDate || !endDate) {
      alert('Please select all fields to search');
      event.preventDefault();
      return;
    }

    console.log('Selected Departure Date:', startDate);
    console.log('Selected Return Date:', endDate);
    console.log('Selected Departure Airport', departure)
    console.log('Selected Arrival Airport', arrival)
  };

  const handleDepart = (e) => {
    setDeparture (e.target.value);
  };

  const handleArrive = (e) => {
    setArrival (e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>LET THE SEARCH BEGIN...</h1>
      <p>Search flights</p>
      <div className={styles.searchContainer}>
        <div>
          <label>Departure Airport</label>
          <select defaultValue={'Select Airport'} onChange={handleDepart}>
            <option value="Select Airport" hidden disabled>
              Select Airport
            </option>
            {departureAirports.map((airport, index) => (
              <option key={index} value={airport}>
                {airport !== 'Select Airport' ? airport : ''}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Arrival Airport</label>
          <select defaultValue={'Select Airport'} onChange={handleArrive}>
            <option value="Select Airport" hidden disabled >
              Select Airport
            </option>
            {arrivalAirports.map((airport, index) => (
              <option key={index} value={airport}>
                {airport !== 'Select Airport' ? airport : ''}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Departure Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Select Date"
            className={styles.datePicker}
          />
        </div>

        <div>
          <label>Return Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="Select Date"
            className={styles.datePicker}
          />
        </div>

        <div>
          <Link 
            to = {'/booking'}
            state={
              {
                dep: departure,
                arr: arrival,
                dateGo: startDate,
                dateReturn: endDate
              }
            }

            >
            
            <button 
              className={styles.searchButton}
              type="button"
              onClick={(e) => handleSearch(e)}
            >
            Search
            </button>
          </Link>
        
        </div>

      </div>
    </div>
  );
}