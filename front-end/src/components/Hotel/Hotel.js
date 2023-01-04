import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import React from "react";
import "./Hotel.css";
import { Form } from "react-bootstrap";

const Hotel = () => {
  return (
    <div
      className="container min-vh-100 align-items-center d-flex justify-content-center"
      style={{fontFamily: "Signika" }}
    >
{/* rgb(212,106,25)
rgb(247, 193, 68)
rgb(98, 10, 21) */}
      <form style={{backgroundColor:"rgb(247, 193, 68)", padding:"20px"}} className="rounded">
        <Row className="mb-4">
          <div class="form-group">
            <label for="exampleInputEmail1" className="mb-2">Email address</label>
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
            <label for="exampleInputPassword1" className="mb-2">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
        </Row>

        <Button variant="dark">Log In</Button>
      </form>
    </div>
  );
};

export default Hotel;
