/***
 * Will later call backend api to perform CRUD operations for user data
 */

 import React from "react";
 import { Modal } from "react-bootstrap";
 import {Button} from "react-bootstrap";
 import { Alert } from "react-bootstrap";
 import { useState } from "react";
 
 function LogInPopUP() {
 
   // display pop up
   const [display, setDisplay] = useState(false);

   // data for sign up
   const [userName, setUserName] = useState("");
   const [userPassword, setUserPassword] = useState("");

   


   // display alert
   const [displayAlert, setDisplayAlert] = useState(false);
   const [alertMessage, setAlertMessage] = useState("");
   const [alertColor, setAlertColor] = useState("");
 
   
 

   const resetState = ()=>{
    
     setUserName("");
     setUserPassword("");
     
   }
   
   //reset all states of data & close Pop Up
   const handleClose = () => {
     resetState(); 
     setDisplay(false);
     setDisplayAlert(false); 
   }
   
   const handleDisplay = () => setDisplay(true);
   

   // when user clicks on submit AUTHENTICATE USER based on credentials provided
   const handleSubmit = ()=>{
     if(userName.length===0){
        setDisplayAlert(true); 
        setAlertMessage("Create User Name"); 
        setAlertColor("danger");
      }else if(userPassword.length===0){
        setDisplayAlert(true); 
        setAlertMessage("Enter Password"); 
        setAlertColor("danger");
      }else{
       const rslt = userName+" "+userPassword;
       setDisplayAlert(true); 
       setAlertMessage(rslt); 
       setAlertColor("success");
       resetState(); 

     }
   }
 
 
   
   return (
     <>
        <Button variant="primary" onClick={handleDisplay}>Log In</Button>
         <Modal show={display} onHide={handleClose}>

            <Modal.Header closeButton style={{textAlign:"center"}}>
                <Modal.Title >Log In</Modal.Title>
                    {   displayAlert && 
                        <Alert key={alertColor} variant={alertColor} dismissible onClose={()=>setDisplayAlert(false)} style={{left:"20px"}}> 
                            {alertMessage}
                        </Alert>
                    }
            </Modal.Header>

            <Modal.Body>
                <p className="lead">Enter username and password to log in</p>
                <form>

                    <div className="mb-3">
                        <label htmlFor="userName" className="col-form-label" >Enter User Name</label><span style={{color:"red"}}>*</span>
                        <input type="text" className="form-control" id="userName" value={userName} onChange={(e)=>setUserName(e.target.value)} />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="userPassword" className="col-form-label" >Enter Password</label><span style={{color:"red"}}>*</span>
                        <input type="password" className="form-control" id="userPassword" value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} />
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
 export default LogInPopUP;