import Button from "react-bootstrap/Button";
import SignUpPopUp from "../SignUpPopUp/SignUpPopUp";
import LogInPopUP from "../LogInPopUp/LogInPopUp";
import React from "react";
import userSession from "../../../Service/userSession";
import { Dropdown } from "react-bootstrap";
const UserProfile = ({ setDisplayAccountInfo, setLogIn }) => {
  const logOut = () => {
    setLogIn(false);
    userSession.removeUser();
  };
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="light"
        id="dropdown-basic"
        className="mx-1"
        style={{
          marginBottom: "-3px",
          borderRadius: "10px",
          height: "36px",
          boxShadow: "2px 1px 3px black",
        }}
      >
        <i
          className="bi bi-person"
          style={{
            marginBottom: "2px",
            borderRadius: "10px",
            height: "36px",
          }}
        ></i>
      </Dropdown.Toggle>

      {userSession.isLoggedIn() ? (
        <Dropdown.Menu>
          <Dropdown.Item href="#/orderHistory">Order History</Dropdown.Item>
          <Dropdown.Item onClick={() => setDisplayAccountInfo(true)}>
            Account Info
          </Dropdown.Item>
          <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
        </Dropdown.Menu>
      ) : (
        <Dropdown.Menu>
          <Dropdown.Item>
            <Button>
              <SignUpPopUp
                style={{ buttonColor: "secondary", textColor: "white" }}
                setLogIn={setLogIn}
              />
            </Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Button>
              <LogInPopUP
                style={{ buttonColor: "secondary", textColor: "white" }}
                setLogIn={setLogIn}
              />
            </Button>
          </Dropdown.Item>
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

export default UserProfile;
