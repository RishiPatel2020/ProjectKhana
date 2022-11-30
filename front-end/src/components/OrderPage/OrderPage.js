import { Link, useNavigate, useNavigation } from 'react-router-dom';
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import ZipCode from '../ZipCode/ZipCode';
import { useState, useRef} from 'react';
import InformationGrid from '../InformationGrid/InformationGrid';
import Scroll from '../../Service/ScrollTop';
import { Modal } from 'react-bootstrap';



const data = {

    backColor:"primary",
    headingColor:"dark",
    titleColor:"secondary",
    textColor:"dark",
    heading:"",
    image1:require("../../Resources/Vector/fresh.png"),
    image1Height:"150px",
    image1Width:"250px",
    title1:"Fresh",
    description1:"Meals cooked by our partner kitchens when ordered",
  
    
    image2:require("../../Resources/Vector/tasty.png"),
    image2Width:"250px",
    image2Height:"150px",
    title2:"Tasty",
    description2:"Authentically sourced and spiced, for the right taste",
  
    image3:require("../../Resources/Vector/convinient.png"),
    image3Width:"250px",
    image3Height:"150px",
    title3:"Convinient",
    description3:"Contact-less delivery right to your doorstep, just in-time"
    
  };

const OrderPage = ({numMeals,setNumMeals,zipCode,setZipCode, freq, setFreq, delivDate, setDelivDate}) => {

  Scroll.scrollUp();

  
  // For pop up if something is missing
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");


  const [plan, setPlan] = useState(numMeals);

    // because we could be getting this from Home Page when we click either 4,6,8, or 10 meals
    if(plan===0){
      setPlan("Select Plan"); 
    }

  const navigate = useNavigate();

  

    


    


    // our global state stores int but local needs string to display 
    const handlePlanChange = (size)=>{
        if(size===4){

          setPlan("4 Meals");
          

        }else if (size===8){
          setPlan("8 Meals");
        }else{ // 12 
          setPlan("12 Meals");

        }
        setNumMeals(size);
    };
    
    const handlePickMeals = ()=>{
      // all valid 
      if (zipCode.length===0){
        // more validations on zip code needed
        handleDisplay("Enter Proper Zip Code"); 
      }else if(numMeals===0){
        handleDisplay("Select Plan"); 
      }else if (freq==="Select Frequency"){
        handleDisplay("Select Frequency"); 
      }else if (delivDate==="Select Day"){
        handleDisplay("Select Day"); 
      }else{
        navigate("/pickMeals"); 
      }





    };


    


    const handleDisplay = (msg)=>{
        
      setMsg(msg); 
      setShow(true);

    }


    const handleClose = ()=>{
      setMsg("");
      setShow(false); 
    };

    


  return (

    <>
        <section
    className="bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start"

    id = "Showcase" style={{fontFamily:"Signika", marginBottom:"0px"}}

  >

    <div className="container" style={{paddingBottom:"10px"}}>

        
    
      <div className="d-sm-flex align-items-center my-2" >



        <img  className="img-fluid w-50 d-none d-sm-block" src= {require('../../Resources/Meals/pavbhaji.png')}  alt ="lorem" style={ {padding:"10px",height:"450px",width:"450px%", borderRadius:"17px", marginBottom:"6px",marginRight:"60px"}}/>


      
      
            
                           
            {/* Right Stuff */}
               <Container>

                <Row>

                <h1 className='text-center'>Enter Zip Code</h1>

                </Row>

               

                <Row>

                    

                    <ZipCode zipCode = {zipCode} setZipCode = {setZipCode}/>

                    
                </Row>
           
                   <Row>

                        <Col style={{marginBottom:"35px"}}>
                            <h2 className='text-center'>Plan Size</h2>
                            <h6 className='text-center'>Each meal is made for 1 adult</h6>



                            <div className="d-flex align-items-center justify-content-center" > 
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{height:"50px",width:"150px"}}>
                                <span className='text-primary'>{plan}</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>handlePlanChange(4)}> <span>4 meals</span> </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>handlePlanChange(8)}> <span>8 meals</span> </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>handlePlanChange(12)}> <span>12 meals</span> </Dropdown.Item>

                                    

                                    
                                    {/* <Dropdown.Item onClick={setPlan("4 meals")}>4 meals</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">8 meals</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">12 meals</Dropdown.Item> */}
                                </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        
                        </Col>


                        <Col style={{marginBottom:"35px"}}>
                                <h2 className='text-center'>Frequency</h2>
                                <h6 className='text-center'>Order one-time or recurring </h6>



                                <div className="d-flex align-items-center justify-content-center" > 
                                <Dropdown>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{height:"50px",width:"150px"}}>
                                    <span className='text-primary'>{freq}</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>setFreq("Weekly")}> <span>Weekly</span> </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setFreq("Bi-Weekly")}> <span>Bi-Weekly</span> </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setFreq("One Time")}> <span>One Time</span> </Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                        </Col>


                        <Col style={{marginBottom:"55px"}}>
                                <h2 className='text-center'>Delivery</h2>
                                <h6 className='text-center'>Deliveries between 6pm - 7:30pm</h6>
                                <div className="d-flex align-items-center justify-content-center" > 
                                <Dropdown>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{height:"50px",width:"150px"}}>
                                        <span className='text-primary'>{delivDate}</span>
                                        
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>setDelivDate("Monday")}> <span>Monday</span> </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setDelivDate("Wednesday")}> <span>Wednesday</span> </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setDelivDate("Friday")}> <span>Friday</span> </Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                        </Col>

                    </Row>

                    <div className='d-flex justify-content-center align-items-center'>

                      <Button variant='secondary' className='text-primary' style={{height:"50px",width:"150px", borderRadius:"25px", fontSize:"25px"}} onClick={handlePickMeals}>Pick Meals</Button>

                    </div>

                    
            
               </Container>

            

      </div>

      

    </div>


  </section>

    

    <InformationGrid data={data}/>



    <Modal show={show} onHide={handleClose} style={{fontFamily:"Signika"}} >

        <Modal.Header closeButton style={{textAlign:"center"}}>
            <Modal.Title  >Fill all Info Correctly to pick meals</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <p className='lead text-center'>{msg}</p>
                                    
        </Modal.Body>


        <Modal.Footer className="h-100 d-flex align-items-center justify-content-center">

  

              <Button variant="dark" onClick={handleClose}>
                <span className='text-primary'>Close</span>
              </Button>
    
        </Modal.Footer>

        </Modal>

    

    </>

  );
}

export default OrderPage;