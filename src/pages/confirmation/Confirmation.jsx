import styles from './confirmation.module.css'
const Confirmation = () => {
  return (
    ////////////////////////////////////////////
    /////////Confirmation Page////////// 
    ////////////////////////////////////////////
    //redeploy
    <div className={styles.confirmationPage}>
      <h1>Order confirmed!</h1>
      <p>Your order has been successfully confirmed.</p>
      <p>Thank you for choosing Aviogo.</p>
    </div>
  )
}

export default Confirmation
