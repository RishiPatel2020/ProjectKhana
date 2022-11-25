import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Newsletter from '../ZipCode/ZipCode';

const MealsLookUp = () => {
  return (
    <section className='bg-light' style={{fontFamily:"Signika", padding:"64px 32px"}}>
        
    {/* this will have padding  */}
    <div className='container' style={{marginLeft:"auto"}}>
        {/* for heading  */}
        <div style={{marginRight:"auto",marginBottom:"33px", marginLeft:"auto"}}>

            <h1 className='text-center text-dark' style={{margin:"0px 0px 10px", fontSize:"48px"}} >See What Meals Are Available</h1>
            <Newsletter/>
            <p className='text-left text-dark' style={{marginTop:"-15px"}} >Order 4-12 meals per week, with prices as low as $10.50 each. The more meals you order, the more you’ll save. Set up weekly, bi-weekly, or one time orders — you can always change your plan at any time.</p>

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
                        <img  className="h1 mb-3" src= {require("../../Resources/Meals/zipImage2.png")}  alt ="lorem" style={{height:"auto",width:"100%", borderRadius:"17px", marginBottom:"6px"}}/>
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
        </Container>
    </div>
</section>
  );
}

export default MealsLookUp