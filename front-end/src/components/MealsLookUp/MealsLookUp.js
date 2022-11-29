import React from 'react'
import {Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MealsLookUp = () => {
  return (
    <section className='bg-light' style={{fontFamily:"Signika", padding:"64px 32px"}}>
        
    {/* this will have padding  */}
    <div className='container' style={{marginLeft:"auto"}}>
        {/* for heading  */}
        <div style={{marginRight:"auto",marginBottom:"33px", marginLeft:"auto"}}>

            <h1 className='text-center text-dark' style={{margin:"0px 0px 10px", fontSize:"48px"}} >Fan Favorites</h1>
            <p className='text-center text-dark' style={{marginTop:"5px"}} > Each Mirchi Meal is made to sufficiently  serve 1 person with our top quality and tastes.</p>

        </div>

        <Container className='text-primary text-dark'>
            <Row style={{marginTop:"66px", marginBottom:"32px"}}>
                <Col s style={{marginLeft:"8px", marginRight:"8px"}}>
                    <div className="card-body text-center" >
                        <img  className="h1 mb-3" src= {require("../../Resources/Meals/zipImage1.png")}  alt ="lorem" style={{height:"auto",width:"100%", borderRadius:"17px",marginBottom:"6px"}}/>
                        <h4 >Pav Bhaji</h4>
                    </div>

                </Col>

                <Col sm style={{marginLeft:"8px", marginRight:"8px"}}>
                    <div className="card-body text-center" >
                        <img  className="h1 mb-3 img-fluid" src= {require("../../Resources/Meals/zipImage2.png")}  alt ="lorem" style={{height:"auto",width:"100%", borderRadius:"17px", marginBottom:"6px"}}/>
                        <h4>Vada</h4>
                    </div>

                </Col>

                <Col sm style={{marginLeft:"8px", marginRight:"8px"}}>
                    <div className="card-body text-center" >
                        <img  className="h1 mb-3" src= {require("../../Resources/Meals/zipImage3.png")}  alt ="lorem" style={{height:"auto",width:"100%", borderRadius:"17px", marginBottom:"6px"}}/>
                        <h4>Saahi Paneer</h4>
                    </div>

                </Col>
            </Row>

            <Row>
                    <Col>

                        <div className='d-flex justify-content-center align-items-center'>

                            <Link to ="/order" smooth><Button variant='secondary' className='text-primary' style={{height:"50px",width:"150px", borderRadius:"25px", fontSize:"25px"}}>Pick Meals</Button></Link>
                            


                        </div>


                    </Col>
                    
                    </Row>
        </Container>
    </div>
</section>
  );
}

export default MealsLookUp