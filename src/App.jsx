import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div>
      <Routes>
            <Route path="/" element={<Home/>} />
      </Routes>
      </div>
  </Router>
  )
}

export default App
