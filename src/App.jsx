import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css'
import NavBar from './components/navBar/NavBar';
import ContextProvider from '../context/ContextProvider';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
    <Router>
        <NavBar/>
        <div className='pd-hz ht-100 pd-vt bg-light-gray'>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/dashboard" element={<Home/>} />
          </Routes>
        </div>
        <Footer/>
    </Router>
    </ContextProvider>
  
  )
}

export default App
