// makes APIcall
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import React from "react";
import { Modal } from "react-bootstrap";
import userSession from "../../Service/userSession";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AccountInfo = ({ show, setShow }) => {
  // email value displayed on inputfield
  const [email, setEmail] = useState(userSession.getUser().emailAddress);

  // toggle password visibility
  const [eyeIcon, setEyeIcon] = useState(<i className="bi bi-eye"></i>);

  // passwd displayed on input field
  const [userPassword, setUserPassword] = useState(
    userSession.getUser().password
  );

  /**
   * closed without saving
   * set email and pass to what original was original email and password were
   */
  const handleClose = () => {
    disableEmail();
    disablePassword();
    setEmail(userSession.getUser().emailAddress);
    setUserPassword(userSession.getUser().password);
    setShow(false);
  };

  /**
   * case 1: both fields are empty
   * case 2: nothing is changed
   * case 3: email is missing
   * case 4: password is missing
   * API call made and local session should be updated with updated Info
   */
  const handleSubmit = () => {
    // both fields empty
    if (
      (email.length === 0 && userPassword.length === 0) ||
      (email === userSession.getUser().emailAddress &&
        userPassword === userSession.getUser().password)
    ) {
      setEmail(userSession.getUser().emailAddress);
      setUserPassword(userSession.getUser().password);
    } else if (email.length === 0) {
      setEmail(userSession.getUser().emailAddress);
      // perform API work to update password
      // check if email is really changed
    } else if (userPassword.length === 0) {
      setUserPassword(userSession.getUser().password);
      // perform API work to update email
      // check if password is really changed
    } else {
      // API call to update both email and password
    }
    setShow(false);
  };

  const disableEmail = () => {
    const element = document.getElementById("emailAddressChange");
    element.setAttribute("disabled", true);
  };
  const enableEmail = () => {
    const element = document.getElementById("emailAddressChange");
    if (element.hasAttribute("disabled")) {
      element.removeAttribute("disabled");
    }
  };

  const disablePassword = () => {
    const element = document.getElementById("passwordChange");
    element.setAttribute("disabled", true);
  };
  const enablePassword = () => {
    const element = document.getElementById("passwordChange");
    if (element.hasAttribute("disabled")) {
      element.removeAttribute("disabled");
    }
  };

  const passwordVisibility = () => {
    const element = document.getElementById("passwordChange");
    if (element.type === "text") {
      // hide
      setEyeIcon(<i className="bi bi-eye"></i>);
      element.type = "password";
    } else {
      // show
      setEyeIcon(<i className="bi bi-eye-slash"></i>);
      element.type = "text";
    }
  };

  return (
    <Modal show={show} onHide={handleClose} style={{ fontFamily: "Signika" }}>
      <Modal.Header closeButton style={{ textAlign: "center" }}>
        <Modal.Title>Account Info</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="lead">
          <span>{userSession.getUser().fname} </span>
          <span>{userSession.getUser().lname}</span>
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="col-form-label">
              <span style={{ color: "black" }}>Email</span>
            </label>
            <Button
              variant="light"
              style={{
                height: "21px",
                width: "26px",
                padding: "1px",
                fontSize: "small",
                marginLeft: "10px",
              }}
              onClick={enableEmail}
            >
              <i className="bi bi-pencil"></i>
            </Button>
            <input
              type="email"
              className="form-control"
              id="emailAddressChange"
              value={email}
              disabled
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="userPassword" className="col-form-label">
              <span style={{ color: "black" }}>Password</span>
            </label>
            <Button
              variant="light"
              style={{
                height: "21px",
                width: "26px",
                padding: "1px",
                fontSize: "small",
                marginLeft: "10px",
              }}
              onClick={passwordVisibility}
            >
              {eyeIcon}
            </Button>
            <Button
              variant="light"
              style={{
                height: "21px",
                width: "26px",
                padding: "1px",
                fontSize: "small",
                marginLeft: "10px",
              }}
              onClick={enablePassword}
            >
              <i className="bi bi-pencil"></i>
            </Button>

            <input
              type="password"
              className="form-control"
              id="passwordChange"
              value={userPassword}
              disabled
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="light" onClick={handleClose}>
          <span className="text-dark">Close</span>
        </Button>
        {/* Submit Button Clicked */}
        <Button variant="light" onClick={handleSubmit}>
          <span className="text-dark">Save</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccountInfo;
