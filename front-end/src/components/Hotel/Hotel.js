import { useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import React from "react";
import "./Hotel.css";

const Hotel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = ()=>{
    setIsLoggedIn(true); 
  };
  const logInBox = () => {
    return (
      <div
        className="container min-vh-100 align-items-center d-flex justify-content-center"
        style={{ fontFamily: "Signika" }}
      >
        <form
          style={{ backgroundColor: "rgb(247, 193, 68)", padding: "20px" }}
          className="rounded"
        >
          <Row className="mb-4">
            <div class="form-group">
              <label for="exampleInputEmail1" className="mb-2">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
          </Row>

          <Row className="mb-4">
            <div class="form-group">
              <label for="exampleInputPassword1" className="mb-2">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
          </Row>

          <Button variant="dark" onClick={handleSubmit}>Log In</Button>
        </form>
      </div>
    );
  };

  const actualPortal = ()=>{
    return(<Button variant="light" className="text-dark text-center" onClick={()=>setIsLoggedIn(false)}>Log Out</Button>)
    // return(<p className="text-dark text-center" >Logged In</p>)
  };
  return <>{!isLoggedIn ? logInBox():actualPortal()}</>;
};

export default Hotel;
