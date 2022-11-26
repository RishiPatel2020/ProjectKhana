import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import ZipCode from '../ZipCode/ZipCode';
import { useState } from 'react';
import InformationGrid from '../InformationGrid/InformationGrid';
import Scroll from '../../Service/ScrollTop';



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

const OrderPage = ({meals}) => {

    const [plan, setPlan] = useState(meals);

    
    if(plan.length===0){
      setPlan("Select Plan"); 
    }
    
    const [freq, setFreq] = useState("Select Frequency");
    const [deliv, setDeliv] = useState("Select Day");

    // scroll up 
    // Scroll.scrollUp(); 

    


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

                    

                    <ZipCode/>

                    
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
                                    <Dropdown.Item onClick={()=>setPlan("4 meals")}> <span>4 meals</span> </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setPlan("8 meals")}> <span>8 meals</span> </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setPlan("12 meals")}> <span>12 meals</span> </Dropdown.Item>

                                    

                                    
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
                                    <Dropdown.Item onClick={()=>setFreq("Monthly")}> <span>Monthly</span> </Dropdown.Item>
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
                                        <span className='text-primary'>{deliv}</span>
                                        
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>setDeliv("Monday")}> <span>Monday</span> </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setDeliv("Wednesday")}> <span>Wednesday</span> </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setDeliv("Friday")}> <span>Friday</span> </Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                        </Col>

                    </Row>

                    <div className='d-flex justify-content-center align-items-center'>

                        <Button variant='secondary' className='text-primary' style={{height:"50px",width:"150px", borderRadius:"25px", fontSize:"25px"}}>Pick Meals</Button>

                    </div>

                    
            
               </Container>

            

      </div>

      

    </div>
  </section>

    

    <InformationGrid data={data}/>

    

    </>

  );
}

export default OrderPage;