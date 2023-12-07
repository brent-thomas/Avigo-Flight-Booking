import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './dashboard.module.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [departureAirports, setDepartureAirports] = useState([]);
  const [arrivalAirports, setArrivalAirports] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');

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

  const handleSearch = () => {
    if (!departureAirport || !arrivalAirport || !startDate || !endDate) {
      alert('Please fill out all information.'); // Show an alert for missing fields
      return;
    }

    console.log('Selected Departure Date:', startDate);
    console.log('Selected Return Date:', endDate);
    navigate('/booking');
  };

  return (
    <div className={styles.container}>
      <h1>LET THE SEARCH BEGIN...</h1>
      <p>Search flights</p>
      <div className={styles.searchContainer}>
        <div>
          <label>Departure Airport</label>
          <select value={departureAirport} onChange={(e) => setDepartureAirport(e.target.value)}>
            <option value="" hidden disabled>
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
          <select value={arrivalAirport} onChange={(e) => setArrivalAirport(e.target.value)}>
            <option value="" hidden disabled>
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
        <button className={styles.searchButton} type="button" onClick={() => handleSearch()}>
            Search
          </button>
        </div>

      </div>
    </div>
  );
}
