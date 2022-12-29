/***
 * Will later call backend api to perform CRUD operations for user data
 */

import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

function SignUpPopUp({ style, setLogIn }) {
  // display pop up
  const [display, setDisplay] = useState(false);

  // states for Sign Up
  const [firstName, setFirstName] = useState("");
  const [firstNameLabel, setFirstNameLabel] = useState(
    <label htmlFor="first-name" className="col-form-label">
      <span style={{ color: "black" }}>
        First Name <span style={{ color: "red" }}>*</span>
      </span>
    </label>
  );
  const [lastName, setLastName] = useState("");
  const [lastNameLabel, setLastNameLabel] = useState(
    <label htmlFor="last-name" className="col-form-label">
      <span style={{ color: "black" }}>
        Last Name <span style={{ color: "red" }}>*</span>
      </span>
    </label>
  );
  const [email, setEmail] = useState("");
  const [emailLabel, setEmailLabel] = useState(
    <label htmlFor="email" className="col-form-label">
      <span style={{ color: "black" }}>
        Email <span style={{ color: "red" }}>*</span>
      </span>
    </label>
  );
  const [userName, setUserName] = useState("");
  const [userNameLabel, setUserNameLabel] = useState(
    <label htmlFor="userName" className="col-form-label">
      <span style={{ color: "black" }}>
        Create User Name <span style={{ color: "red" }}>*</span>
      </span>
    </label>
  );
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordLabel, setUserPasswordLabel] = useState(
    <label htmlFor="userPassword" className="col-form-label">
      <span style={{ color: "black" }}>
        Create Password <span style={{ color: "red" }}>*</span>
      </span>
    </label>
  );

  const resetLabels = () => {
    setFirstNameLabel(
      <label htmlFor="first-name" className="col-form-label">
        <span style={{ color: "black" }}>
          First Name <span style={{ color: "red" }}>*</span>
        </span>
      </label>
    );
    setLastNameLabel(
      <label htmlFor="last-name" className="col-form-label">
        <span style={{ color: "black" }}>
          Last Name <span style={{ color: "red" }}>*</span>
        </span>
      </label>
    );
    setEmailLabel(
      <label htmlFor="email" className="col-form-label">
        <span style={{ color: "black" }}>
          Email <span style={{ color: "red" }}>*</span>
        </span>
      </label>
    );
    setUserNameLabel(
      <label htmlFor="userName" className="col-form-label">
        <span style={{ color: "black" }}>
          Create User Name <span style={{ color: "red" }}>*</span>
        </span>
      </label>
    );
    setUserPasswordLabel(
      <label htmlFor="userPassword" className="col-form-label">
        <span style={{ color: "black" }}>
          Create Password <span style={{ color: "red" }}>*</span>
        </span>
      </label>
    );
  };

  const resetData = () => {
    setFirstName("");
    setLastName("");
    setUserName("");
    setUserPassword("");
    setEmail("");
  };

  /***
   * resets both data and lables
   */
  const reset = () => {
    resetLabels();
    resetData();
  };

  //reset all states of data & close Pop Up
  const handleClose = () => {
    reset();
    setDisplay(false);
  };

  const handleDisplay = () => setDisplay(true);

  // when user clicks on submit
  const handleSubmit = () => {
    resetLabels();
    if (firstName.length === 0) {
      setFirstNameLabel(
        <label htmlFor="first-name" className="col-form-label">
          <span style={{ color: "red" }}>
            First Name <span style={{ color: "red" }}>**</span>
          </span>
        </label>
      );
    } else if (lastName.length === 0) {
      setLastNameLabel(
        <label htmlFor="last-name" className="col-form-label">
          <span style={{ color: "red" }}>
            Last Name <span style={{ color: "red" }}>**</span>
          </span>
        </label>
      );
    } else if (email.length === 0) {
      setEmailLabel(
        <label htmlFor="email" className="col-form-label">
          <span style={{ color: "red" }}>
            Email <span style={{ color: "red" }}>**</span>
          </span>
        </label>
      );
    } else if (userName.length === 0) {
      setUserNameLabel(
        <label htmlFor="userName" className="col-form-label">
          <span style={{ color: "red" }}>
            Create User Name <span style={{ color: "red" }}>**</span>
          </span>
        </label>
      );
    } else if (userPassword.length === 0) {
      setUserPasswordLabel(
        <label htmlFor="userPassword" className="col-form-label">
          <span style={{ color: "red" }}>
            Create Password <span style={{ color: "red" }}>**</span>
          </span>
        </label>
      );
    } else {
      setLogIn(true);
      localStorage.setItem("user", JSON.stringify({ user: userName }));
      // verify data with backend then close the window
      handleClose();
    }
  };

  return (
    <>
      <Button
        variant={style.buttonColor}
        onClick={handleDisplay}
        style={{ width: "110px" }}
      >
        <span style={{ color: style.textColor, fontSize: "20px" }}>
          Sign Up
        </span>
      </Button>
      <Modal
        show={display}
        onHide={handleClose}
        style={{ fontFamily: "Signika" }}
      >
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="lead">Fill out this form and you are all set</p>
          <form>
            <div className="mb-3">
              {firstNameLabel}
              <input
                type="text"
                className="form-control"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              {lastNameLabel}
              <input
                type="text"
                className="form-control"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              {emailLabel}
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              {userNameLabel}
              <input
                type="text"
                className="form-control"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              {userPasswordLabel}
              <input
                type="password"
                className="form-control"
                id="userPassword"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant={style.buttonColor} onClick={handleClose}>
            <span style={{ color: style.textColor }}>Close</span>
          </Button>
          <Button variant={style.buttonColor} onClick={handleSubmit}>
            <span style={{ color: style.textColor }}>Submit</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignUpPopUp;
