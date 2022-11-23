/***
 * Will later call backend api to perform CRUD operations for user data
 */

 import React from "react";
 import { Modal } from "react-bootstrap";
 import {Button} from "react-bootstrap";
 import { useState } from "react";
 
 function LogInPopUP({style,setLogIn}) {
 
   // display pop up
   const [display, setDisplay] = useState(false);

   // data for sign up
   const [userName, setUserName] = useState("");
   const [userPassword, setUserPassword] = useState("");
   const [userNameLabel, setUserNameLabel] = useState(<label htmlFor="userName" className="col-form-label" >Enter User Name <span style={{color:"red"}}>*</span></label>);
   const [userPasswordLabel, setUserPasswordLabel] = useState(<label htmlFor="userPassword" className="col-form-label" >Enter Password <span style={{color:"red"}}>*</span></label>);

   


   const resetData = ()=>{
    setUserName("");
    setUserPassword(""); 
   };

   const resetLabels=()=>{
     setUserNameLabel(<label htmlFor="userName" className="col-form-label" >Enter User Name <span style={{color:"red"}}>*</span></label>);
     setUserPasswordLabel(<label htmlFor="userPassword" className="col-form-label" >Enter Password <span style={{color:"red"}}>*</span></label>);
   };

   
   
 

   const reset = ()=>{

      resetData();
      resetLabels();
     
   }
   
   //reset all states of data & close Pop Up
   const handleClose = () => {
     reset(); 
     setDisplay(false);
     
   }
   
   const handleDisplay = () => setDisplay(true);
   

   // when user clicks on submit AUTHENTICATE USER based on credentials provided
   const handleSubmit = ()=>{
    resetLabels();
     if(userName.length===0){
      setUserNameLabel(<label htmlFor="userName" className="col-form-label" style={{color:"red"}} >Enter User Name <span style={{color:"red"}}>**</span></label>); 
      }else if(userPassword.length===0){
        setUserPasswordLabel(<label htmlFor="userPassword" className="col-form-label"  style={{color:"red"}}>Enter Password <span style={{color:"red"}}>*</span></label>);
      }else{       

        setLogIn(true); 
        localStorage.setItem("user",JSON.stringify({user:userName})); 
       // verify data with backend then close the window 
        handleClose();

     }
   }
 
 
   
   return (
     <>
        <Button variant={style.buttonColor} onClick={handleDisplay} style={{width:"100px"}}><span style = {{color:style.textColor, fontSize:"20px"}}>Log In</span></Button>
         <Modal show={display} onHide={handleClose} style={{fontFamily:"Comfortaa"}} >

            <Modal.Header closeButton style={{textAlign:"center"}}>
                <Modal.Title  >Log In</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p className="lead">Enter username and password to log in</p>
                <form>

                    <div className="mb-3">
                        {userNameLabel}
                        <input type="text" className="form-control" id="userName" value={userName} onChange={(e)=>setUserName(e.target.value)} />
                    </div>
                    
                    <div className="mb-3">
                        {userPasswordLabel}
                        <input type="password" className="form-control" id="userPassword" value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} />
                    </div>

                    
                </form>
           </Modal.Body>


           <Modal.Footer>
             <Button variant={style.buttonColor} onClick={handleClose}>
               <span style={{color: style.textColor}}>Close</span>
             </Button>
             <Button variant={style.buttonColor} onClick={handleSubmit}>
             <span style={{color: style.textColor}}>Submit</span>
             </Button>
           </Modal.Footer>

       </Modal>
     </>
   );
 }
 export default LogInPopUP;