"use client"
import styles from './navbar.module.css'
import { useContext} from 'react'
import AppContext from '../../../context/AppContext';
import userIcon from './icon.png'
import logo from './aviogo_logo.png'
import { Link } from 'react-router-dom';
const NavBar = () => {
  const { state, setState } = useContext(AppContext);
  console.log(state)
  return (
    <div className={`${styles.container} pd-hz`}>
        <Link to="/">
          <img alt='AVIOGO LOGO' src={logo} className={styles.logo}/>
        </Link>
        
        <div>
            {! state.isLoggedIn ?
              <Link to="/login">Log in</Link>
              :
              <div className={styles.toggle}>
              <Link to="/userprofile">
                <img  alt="user profile icon" src={userIcon} width={30} height={30}/>
              </Link>
              <Link to="/login">Log out</Link>
              </div>
            }
        </div>
    </div>
  )
}

export default NavBar