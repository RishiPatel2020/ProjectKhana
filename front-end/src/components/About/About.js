/***
 * has 1 Nav bar, 2 Information Boxes, 1 Foot Bar
 */

import React from 'react'

import { Button } from 'react-bootstrap';
import InformationBox from '../InformationBox/InformationBox';


const About = () => {

   const firstBox =  {
        image: require("../../Resources/Meals/meal1.png"),
        textPosition: "r",
        backgroundColor: "primary",
        heading:(<h1 className="text-center" style={{fontSize:"48px"}}>What We Do</h1>), 
        headingColor:"dark",
        textColor:"",
        buttonExist:true,
        bigImage:(<img  className="img-fluid w-50 d-none d-sm-block" src= {require('../../Resources/VerticalImages/verticalImage3.png')}  alt ="lorem" style={{height:"auto",width:"100%", borderRadius:"17px", marginBottom:"6px",marginRight:"40px"}}/>),
        smallImage:(<img className="d-sm-block" src={require('../../Resources/Vector/step1.png')}  style={{height:"150px",width:"250px"}} alt=""/>),
      
        button:(<div className="h-100 d-flex align-items-center justify-content-center">
      <Button variant="dark" style={{height:"auto",width:"5em"}}>Order</Button>
  </div>),
        description: (<div className='text-dark text-center' style={{fontSize:"20px", marginTop:"10px"}}>

          <p>Almost any given Indian cuisine takes 2-3 hours to prepare, cook, serve, and clean. Do you ever notice how despite all this effort and time, it still takes less than 30 minutes to finish eating it?</p>
          <p>It's dreadful.</p>
          <p>Our top rated kitchen partners help us curate meals specifically for the Indian cuisine experience. Mirchi Meals aims to bring customers the best in quality, price, and quantity of meals available in their area to enjoy whenever and wherever. Order all your meals for the week, get them delivered in one go, and reheat</p>


        </div>
        )


    }


    const secondBox =  {
      image: require("../../Resources/Meals/meal1.png"),
      textPosition: "l",
      backgroundColor: "light",
      heading:(<h1 className="text-center text-dark" style={{fontSize:"48px"}}>Our Mission</h1>), 
      headingColor:"dark",
      textColor:"",
      buttonExist:false,
      bigImage:(<img  className="img-fluid w-50 d-none d-sm-block" src= {require('../../Resources/VerticalImages/verticalImage1.png')}  alt ="lorem" style={{height:"450px", borderRadius:"17px", marginBottom:"10px", marginRight:"40px"}}/>),
      smallImage:(<img className="d-sm-block" src={require('../../Resources/Vector/step1.png')}  style={{height:"150px",width:"250px"}} alt=""/>),
      description: (

        <p className="text-left" style={{padding:"15px", fontSize:"20px"}}>Mirchi Meals seeks to alleviate the pressure of having to spend time in the kitchen so you can spend more time doing what’s important. Saving headaches, one meal at a time. </p>
        


      
      )
    }



    const thirdBox =  {
      textPosition: "r",
      backgroundColor: "secondary",
      heading:(<h1 className="text-center text-light" style={{fontSize:"48px"}}>Our Guiding Values</h1>), 
      headingColor:"dark",
      textColor:"",
      buttonExist:false,
      bigImage:(<img  className="img-fluid w-50 d-none d-sm-block" src= {require('../../Resources/VerticalImages/verticalImage2.png')}  alt ="lorem" style={{height:"450px", borderRadius:"17px", marginBottom:"10px", marginRight:"40px"}}/>),
      smallImage:(<img className="d-sm-block" src={require('../../Resources/Vector/step1.png')}  style={{height:"150px",width:"250px"}} alt=""/>),
      description: (

        <>
          <p className="text-primary" style={{fontSize:"20px"}}>At Mirchi Meals, each customer is our family member. That’s why, we follow M.E.A.L.S :</p>
          <div className='text-center text-light'>
          
            <p style={{fontSize:"20px"}} >Mind Blowing Taste</p>
            <p style={{fontSize:"20px"}} >Easy to Order</p>
            <p style={{fontSize:"20px"}} >Attention to Detail</p>
            <p style={{fontSize:"20px"}} >Listening to Customers</p>
            <p style={{fontSize:"20px"}} >Service at Heart</p>

          </div>
        </>
        

        


      
      )
    }
  return (
    <>

    <InformationBox data = {firstBox}/>
    
    <InformationBox data = {secondBox}/>
    
    <InformationBox data = {thirdBox}/>
      
    
    </>
     
  )
}

export default About