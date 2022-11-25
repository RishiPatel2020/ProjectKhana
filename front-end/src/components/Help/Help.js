import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Help = () => {
  return (
    <section className='mealPlans bg-primary' style={{fontFamily:"Signika", padding:"64px 32px"}}>
        
        <div className="container text-center" style={{marginRight:"auto",marginBottom:"340px", marginLeft:"auto"}}>

            <div style={{marginTop:"40px"}} >

            <img className="img-fluid" src={require("../../Resources/Vector/help.png")}/>
            <div style={{marginTop:"30px"}}>

                <p className='' >Any inquiries, comments, or concerns, please address to: inquiries@mirchimeals.com</p>
                <p>Our support staff will get back to you in less than 3 hours. Promise :)</p>
                <p>In the meantime, try out our meals. ORDER BUTTON </p>
                <p>Please check our FAQ section to see if you can find the answer to your question. </p>

            </div>

            </div>
            
            

        </div>

    

</section>
  )
}

export default Help;