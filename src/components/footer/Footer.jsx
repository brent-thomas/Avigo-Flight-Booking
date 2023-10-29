import styles from './footer.module.css'
import logo from './aviogo_logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <p>
          Soaring above the cloud (computing). Remember, in our skies, turbulence is just another word for fun!
        </p>

        <h3>Quick Nav(temporary for dev use)</h3>
        <div className={styles.flex}>
          <Link to="/">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/passengerinformation">Passenger Information</Link>
          <Link to="/confirmation">Confirmation</Link>
          <Link to="/userprofile">User Profile</Link>
        </div>
    </div>
  )
}

export default Footer