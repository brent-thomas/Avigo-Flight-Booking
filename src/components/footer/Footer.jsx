import styles from './footer.module.css'
import logo from './aviogo_logo.png'
const Footer = () => {
  return (
    <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <p>
          Soaring above the cloud (computing). Remember, in our skies, turbulence is just another word for fun!
        </p>
    </div>
  )
}

export default Footer