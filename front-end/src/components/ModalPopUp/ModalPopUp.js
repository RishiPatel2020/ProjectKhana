/***
 * This pop up is for sign up. It also includes bootstrap alter which informs user if some field is missing
 * Show alert after each attempt of signing up 
 */


import React from "react";
import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { useState } from "react";

function ModalPopUp() {


  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  // used to decided whether to display alert or not 
  const [displayAlert, setdisplayAlert] = useState(false);
  
  // message to be displayed in alert
  const [alertMessage, setAlertMessage] = useState("");

  const [alertColor, setAlertColor] = useState("");

  

  const resetState = ()=>{
    setFirstName(""); 
    setLastName("");
    setEmail("");
    setPhone("");
  }
  
  //reset all states for user inputs
  const handleClose = () => {
    resetState(); 
    setShow(false); 
  }
  
  const handleShow = () => setShow(true);
  
  // When user clicks on submit 
  const handleSubmit = ()=>{
    if(firstName.length===0){
      // alert("Enter First Name");

      setdisplayAlert(true); 
      setAlertMessage("Enter First Name");
      setAlertColor("danger");
      
    }else if(lastName.length===0){
      setdisplayAlert(true); 
      setAlertMessage("Enter Last Name"); 
      setAlertColor("danger");
    }else if(email.length===0){
      setdisplayAlert(true); 
      setAlertMessage("Enter Email"); 
      setAlertColor("danger");
    }else if(phone.length===0){
      setdisplayAlert(true); 
      setAlertMessage("Enter Phone"); 
      setAlertColor("danger");
    }else{
      

      const rslt = firstName+" "+lastName+" "+email+" "+phone;
      setdisplayAlert(true); 
      setAlertMessage(rslt); 
      setAlertColor("success");
      resetState(); 
    }
  }



  return (
    <>

      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{textAlign:"center"}}>
          <Modal.Title >Sign Up</Modal.Title>
          {displayAlert && <Alert key={alertColor} variant={alertColor} dismissible onClose={()=>setdisplayAlert(false)} style={{left:"20px"}}>
            {alertMessage}
        </Alert>}
        </Modal.Header>
        <Modal.Body>
  
        <p className="lead">Fill out this form and you are all set</p>
            <form>
              <div className="mb-3">
                <label htmlFor="first-name" className="col-form-label">
                  First Name
                </label><span style={{color:"red"}}>*</span>
                <input type="text" className="form-control" id="first-name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="last-name" className="col-form-label">Last Name</label> <span style={{color:"red"}}>*</span>
                <input type="text" className="form-control" id="last-name" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="col-form-label" >Email</label><span style={{color:"red"}}>*</span>
                <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="col-form-label" >Phone:</label> <span style={{color:"red"}}>*</span>
                <input type="tel" className="form-control" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
              </div>
            </form>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPopUp;


