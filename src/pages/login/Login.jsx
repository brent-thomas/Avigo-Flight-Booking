import React, { useState } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/aviogo_logo.png";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    ///authenticate user
    ////redirect to dashboard
    navigate("/dashboard");
  };
  const handleSignup = () => {
    ////redirect to signup page
    navigate("/signup");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        handleLogin();
        console.log("onSuccess: ", data);
      },
      onFailure: (err) => {
        console.log("onFailure: ", err);
        setErrorMessage("Incorrect email or password. Please try again!");
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
  };

  return (
    /////////////////////////////
    /////////Login Page//////////
    /////////////////////////////
    <div className={styles.background}>
      <div className={styles.whiteBox}>
        <div className={styles.boxheader}>
          <h3 className={styles.headerContent}>Flight Booking</h3>
          <div className={styles.logobrand}>
            <img src={logo} alt="Logo"></img>
          </div>
        </div>
        <h3>Login</h3>
        <form className={styles.placeholder} onSubmit={onSubmit}>
          <div className={styles.emailInput}>
            <label htmlFor="email">Email</label>
            <input
              className={styles.inputBox}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className={styles.passwordInput}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={styles.inputBox}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className={styles.loginButton}>
            <button type="submit">Sign in</button>
          </div>
          <a
            className={styles.createAccountLink}
            onClick={() => handleSignup()}
          >
            Create account
          </a>
          {/* Wrond info message*/}
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};
export default Login;
