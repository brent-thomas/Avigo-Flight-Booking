import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css'
import NavBar from './components/navBar/NavBar';
import ContextProvider from '../context/ContextProvider';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Booking from './pages/booking/Booking'
import PassengerInformation from './pages/passengerInformation/PassengerInformation';
import Confirmation from './pages/confirmation/Confirmation';
import UserProfile from './pages/userprofile/UserProfile';
import NotFound from './pages/notfound/NotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
    <Router>
        <NavBar/>
        <div className='pd-hz ht-100 pd-vt bg-light-gray'>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/booking" element={<Booking/>}/>
              <Route path="/passengerinformation" element={<PassengerInformation/>}/>
              <Route path="/confirmation" element={<Confirmation/>} />
              <Route path="/userprofile" element={<UserProfile/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
        <Footer/>
    </Router>
    </ContextProvider>
  
  )
}

export default App
