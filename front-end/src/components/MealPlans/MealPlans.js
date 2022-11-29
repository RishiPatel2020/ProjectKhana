import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
const MealPlans = ({setMeals}) => {

    const navigate = useNavigate();

    const buttonClicked = meals =>{
        setMeals(meals); 
        navigate("/order"); 
    };

    
  return (
    <section className='mealPlans bg-dark' style={{fontFamily:"Signika", padding:"64px 32px"}}>
        
        {/* this will have padding  */}
        <div className='container text-center' style={{marginLeft:"auto"}}>
            {/* for heading  */}
            <div style={{marginRight:"auto",marginBottom:"33px", marginLeft:"auto"}}>

                <h1 className='text-light' style={{margin:"0px 0px 10px", fontSize:"48px"}} >Meal Plans for You</h1>
                
                <p className='text-primary' >Order 4-12 meals per week, with prices as low as $10.50 each. The more meals you order, the more you’ll save. Set up weekly, bi-weekly, or one time orders — you can always change your plan at any time.</p>

            </div>

            <Container className='text-primary'>
                <Row style={{marginTop:"66px", marginBottom:"32px"}}>
                    <Col sm style={{marginLeft:"8px", marginRight:"8px"}}>
                        <div className="card-body text-center" >
                            <button onClick= {()=>buttonClicked("4 Meals")} style={{background:"transparent",border:"none"}}>
                                <img className="h1 mb-3" src= {require("../../Resources/Meals/meal1.png")}  alt ="lorem" style={{height:"auto",width:"100%", borderRadius:"17px",marginBottom:"6px"}}/>
                            </button>
                            <h4 >4 Meals</h4>
                        </div>

                    </Col>

                    <Col sm style={{marginLeft:"8px", marginRight:"8px"}}>
                        <div className="card-body text-center" >

                        <button onClick= {()=>buttonClicked("6 Meals")} style={{background:"transparent",border:"none"}}>
                            <img  className="h1 mb-3" src= {require("../../Resources/Meals/meal2.png")}  alt ="lorem" style={{height:"auto",width:"100%", borderRadius:"17px", marginBottom:"6px"}}/>
                        </button>
                            
                            
        
                            <h4>6 Meals <i><super>*</super>Save 5%<super>*</super></i></h4>
                        </div>

                    </Col>

                    <Col sm style={{marginLeft:"8px", marginRight:"8px"}}>
                        <div className="card-body text-center" >
                        
                        <button onClick= {()=>buttonClicked("8 Meals")} style={{background:"transparent",border:"none"}}>
                            <img  className="h1 mb-3" src= {require("../../Resources/Meals/meal3.png")}  alt ="lorem" style={{height:"auto",width:"100%", borderRadius:"17px", marginBottom:"6px"}}/>
                        </button>
                            
                            <h4>8 Meals <i><super>*</super>Save 8%<super>*</super></i></h4>
                        </div>

                    </Col>

                    <Col sm style={{marginLeft:"8px", marginRight:"8px"}}>
                        <div className="card-body text-center" >

                        <button onClick= {()=>buttonClicked("12 Meals")} style={{background:"transparent",border:"none"}}>
                        <img  className="h1 mb-3" src= {require("../../Resources/Meals/meal4.png")}  alt ="lorem" style={{height:"auto",width:"100%", borderRadius:"17px", marginBottom:"6px"}}/>
                        </button>
                        
                            <h4>12 Meals <i><super>*</super>Save 10%<super>*</super></i></h4>
                        </div>

                    </Col>

                </Row>

                <Row>
                    <Col>

                        <div className='d-flex justify-content-center align-items-center'>

                            <Link to = "/order" smooth>
                                <Button variant='primary' className='text-dark' style={{height:"50px",width:"150px", borderRadius:"25px", fontSize:"25px"}}>Pick Meals</Button>
                            </Link>

                            
                            


                        </div>


                    </Col>
                    
                    </Row>
            </Container>
        </div>
    </section>
  )
}

export default MealPlans; 