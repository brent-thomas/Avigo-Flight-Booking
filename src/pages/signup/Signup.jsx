"use client";
import styles from "./signup.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import UserPool from "../UserPool";
import logo from "../../assets/aviogo_logo.png";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [verificationRequired, setVerificationRequired] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (verificationRequired) {
      verifyAccount();
    } else {
      UserPool.signUp(email, password, [], null, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
          setSuccessMessage(
            "Created account successfully. Please check your email for a verification code."
          );
          setVerificationRequired(true);
        }
      });
    }
  };

  const verifyAccount = () => {
    // Create a new CognitoUser instance
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    // Confirm the registration using the confirmRegistration method
    user.confirmRegistration(confirmationCode, true, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
        setSuccessMessage("Account verified successfully.");

        // Redirect to the /dashboard route after successful verification
        navigate("/dashboard");
      }
    });
  };

  // Handle "Back to Signin" button click
  const handleBackToSignin = () => {
    navigate("/");
  };

  return (
    /////////////////////////////
    /////////Signup Page//////////
    /////////////////////////////
    <div className={styles.background}>
      <div className={styles.whiteBox}>
        <div className={styles.boxheader}>
          <h3 className={styles.headerContent}>Flight Booking</h3>
          <div className={styles.logobrand}>
            <img src={logo} alt="Logo"></img>
          </div>
        </div>
        <h3>Sign up</h3>

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
          {verificationRequired && (
            <div className={styles.confirmationCodeInput}>
              <label htmlFor="confirmationCode">Confirmation Code</label>
              <input
                className={styles.inputBox}
                value={confirmationCode}
                onChange={(event) => setConfirmationCode(event.target.value)}
                required
              />
            </div>
          )}
          <div className={styles.signupButton}>
            <button type="submit">
              {verificationRequired ? "Verify" : "Sign up"}
            </button>
          </div>

          <a onClick={handleBackToSignin} className={styles.backToSigninLink}>
            Back to Sign-in
          </a>
          {/* Success message*/}
          {successMessage && (
            <div className={styles.successMessage}>{successMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};
export default Signup;
