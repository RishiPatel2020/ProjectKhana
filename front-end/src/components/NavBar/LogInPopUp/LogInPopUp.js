/***
 * Will call backend API to authenticate user based on username and password
 */

import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

function LogInPopUP({ style, setLogIn }) {
  // display pop up
  const [display, setDisplay] = useState(false);

  // states for userName, userNameLabel
  const [userName, setUserName] = useState("");
  const [userNameLabel, setUserNameLabel] = useState(
    <label htmlFor="userName" className="col-form-label">
      Enter User Name <span style={{ color: "red" }}>*</span>
    </label>
  );

  // states for password, passwordLabel
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordLabel, setUserPasswordLabel] = useState(
    <label htmlFor="userPassword" className="col-form-label">
      Enter Password <span style={{ color: "red" }}>*</span>
    </label>
  );

  // restores labels to black text and replace ** with *
  // for eg. User Name ** in red will become User Name * in black
  const resetLabels = () => {
    setUserNameLabel(
      <label htmlFor="userName" className="col-form-label">
        <span style={{ color: "black" }}>
          Enter User Name <span style={{ color: "red" }}>*</span>
        </span>
      </label>
    );
    setUserPasswordLabel(
      <label htmlFor="userPassword" className="col-form-label">
        <span style={{ color: "black" }}>
          Enter Password <span style={{ color: "red" }}>*</span>
        </span>
      </label>
    );
  };

  // resets state of data
  const resetData = () => {
    setUserName("");
    setUserPassword("");
  };

  // reset data & lables
  const reset = () => {
    resetData();
    resetLabels();
  };

  //reset ALL states of data & CLOSE Pop Up
  const handleClose = () => {
    reset();
    setDisplay(false);
  };

  const handleDisplay = () => setDisplay(true);

  /** User clicked on submit
   * all fields were entered
   * API interaction happens here
   * Authenticate user from backend based on userName & password
   * get userinfo from backend and update userInfo global state
   */
  const handleSubmit = () => {
    resetLabels();
    if (userName.length === 0) {
      setUserNameLabel(
        <label htmlFor="userName" className="col-form-label">
          <span style={{ color: "red" }}>
            Enter User Name <span style={{ color: "red" }}>**</span>
          </span>
        </label>
      );
    } else if (userPassword.length === 0) {
      setUserPasswordLabel(
        <label htmlFor="userPassword" className="col-form-label">
          <span style={{ color: "red" }}>
            Enter Password <span style={{ color: "red" }}>**</span>
          </span>
        </label>
      );
    } else {
      // IF username && password valid => following things
      setLogIn(true);
      localStorage.setItem("user", JSON.stringify({ user: userName }));
      handleClose();

      // IF username || password invalid => take some action
    }
  };

  return (
    <>
      {/* Log In Button on Red Box in Showcase */}
      <button
        onClick={handleDisplay}
        className="buttonAdjustments"
      >
        <span style={{ color: style.textColor}}>Log In</span>
      </button>

      {/* Content in Pop Up */}
      <Modal
        show={display}
        onHide={handleClose}
        style={{ fontFamily: "Signika" }}
      >
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="lead">Enter username and password to log in</p>
          <form>
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
          {/* Submit Button Clicked */}
          <Button variant={style.buttonColor} onClick={handleSubmit}>
            <span style={{ color: style.textColor }}>Submit</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default LogInPopUP;
