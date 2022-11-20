/***
 * Will later call backend api to perform CRUD operations for user data
 */

 import React from "react";
 import { Modal } from "react-bootstrap";
 import {Button} from "react-bootstrap";
 import { Alert } from "react-bootstrap";
 import { useState } from "react";
 import SessionMaintain from "../../Service/SessionMaintain";
 
 function SignUpPopUp() {
 
   // display pop up
   const [display, setDisplay] = useState(false);

   // data for sign up
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [userName, setUserName] = useState("");
   const [userPassword, setUserPassword] = useState("");
   const [phone, setPhone] = useState("");
   


   // display alert
   const [displayAlert, setDisplayAlert] = useState(false);
   const [alertMessage, setAlertMessage] = useState("");
   const [alertColor, setAlertColor] = useState("");
 
   
 

   const resetState = ()=>{
     setFirstName(""); 
     setLastName("");
     setUserName("");
     setUserPassword("");
     setEmail("");
     setPhone("");
   }
   
   //reset all states of data & close Pop Up
   const handleClose = () => {
     resetState(); 
     setDisplay(false);
     setDisplayAlert(false); 
   }
   
   const handleDisplay = () => setDisplay(true);
   

   // when user clicks on submit
   const handleSubmit = ()=>{
     if(firstName.length===0){ 
       setDisplayAlert(true); 
       setAlertMessage("Enter First Name");
       setAlertColor("danger");
       
     }else if(lastName.length===0){
       setDisplayAlert(true); 
       setAlertMessage("Enter Last Name"); 
       setAlertColor("danger");
     }else if(email.length===0){
       setDisplayAlert(true); 
       setAlertMessage("Enter Email"); 
       setAlertColor("danger");
     }else if(phone.length===0){
       setDisplayAlert(true); 
       setAlertMessage("Enter Phone"); 
       setAlertColor("danger");
     }else if(userName.length===0){
        setDisplayAlert(true); 
        setAlertMessage("Create User Name"); 
        setAlertColor("danger");
      }else if(userPassword.length===0){
        setDisplayAlert(true); 
        setAlertMessage("Create Password"); 
        setAlertColor("danger");
      }else{
        
       setDisplayAlert(true);        
       setAlertMessage("Logged In"); 
       setAlertColor("success");
       resetState(); 

     }
   }
 
 
   
   return (
     <>
        <Button variant="primary" onClick={handleDisplay}>Sign Up</Button>
         <Modal show={display} onHide={handleClose}>

            <Modal.Header closeButton style={{textAlign:"center"}}>
                <Modal.Title >Sign Up</Modal.Title>
                    {   displayAlert && 
                        <Alert key={alertColor} variant={alertColor} dismissible onClose={()=>setDisplayAlert(false)} style={{left:"20px"}}> 
                            {alertMessage}
                        </Alert>
                    }
            </Modal.Header>

            <Modal.Body>
                <p className="lead">Fill out this form and you are all set</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="first-name" className="col-form-label">First Name</label><span style={{color:"red"}}>*</span>
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
                        <label htmlFor="userName" className="col-form-label" >Create User Name</label><span style={{color:"red"}}>*</span>
                        <input type="text" className="form-control" id="userName" value={userName} onChange={(e)=>setUserName(e.target.value)} />
                    </div>


                    
                    <div className="mb-3">
                        <label htmlFor="userPassword" className="col-form-label" >Create Password</label><span style={{color:"red"}}>*</span>
                        <input type="password" className="form-control" id="userPassword" value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} />
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
 export default SignUpPopUp;