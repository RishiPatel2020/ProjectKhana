import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal} from 'react-bootstrap';
import {Button} from "react-bootstrap";
import { useEffect } from 'react';



  const data = [
    {
      id:0,
      img: require("../../Resources/Meals/meal1.png"),
      mealName:"Madrasi Thari ",
      description:"Special Dish from South India",
      numberOfMeals:0,
    },
  
    {
      id:1,
      img: require("../../Resources/Meals/meal2.png"),
      mealName:"Gujarati Thari",
      description:"Special Dish from Gujarat",
      numberOfMeals:0
    
    },
  
    {
      id:2,
      img: require("../../Resources/Meals/meal3.png"),
      mealName:"Punjabi Thari",
      description:"Special Dish from Punjab",
      numberOfMeals:0
    
    },
  
    {
      id:3,
      img: require("../../Resources/Meals/meal4.png"),
      mealName:"Benagali Thari",
      description:"Special Dish from Bengal",
      numberOfMeals:0
    
    }
  
  
  ]; 



// we might need zip code later when loading relevant images
  const PickMeals = ({zipCode, planSize, freq, delivDay, cart, setCart}) => {


    // will need some preprocessing to load relevant images based on zip code 
    

    // need this for img, pop up msg
    const [items, setItems] = useState(data);

    // pop status and description
    const [show, setShow] = useState(false);
    const [description, setDescription] = useState("");
    const [mealSelected, setMealSelected] = useState("");
    

    
    // number of meals 
    const [numberMeals, setNumberMeals] = useState(new Array(data.length).fill(0));

    
    
    // method for pop up 
    const handleDisplay = (description, mealName) =>{
      setDescription(description); 
      setMealSelected(mealName); 
      setShow(true);

    }

    const add = (id)=>{

     
  
      
      
      data[id].numberOfMeals++; 

      
      const tempArray = [];
      if(cart.length===0){

        
        tempArray.push(data[id]);
        
        setCart(tempArray); 
      }else{



        let found = false;
        cart.forEach(element => {
          if(element.id===id){ 
            
            tempArray.push(data[id])
            found = true; 

          }else{
            tempArray.push(element); 
          }
        });

          if(!found){
            tempArray.push(data[id]); 
          }
          setCart(tempArray); 
        

      }


      // setting local cart 
      numberMeals[id]++;
      const newAr = [];
      numberMeals.map(item=>{newAr.push(item)}); 
      setNumberMeals(newAr); 

      

      


    };


    const handleClose = () => {
      setDescription("");
      setMealSelected(""); 
      setShow(false); 
    }

    const remove = (id)=>{


      if(numberMeals[id]>0){
        numberMeals[id]--;
        data[id].numberOfMeals--; 
        const newAr = [];
        numberMeals.map(item=>{newAr.push(item)}); 
        setNumberMeals(newAr); 

      }


      

        // const listItems = items.map((item)=>item.id===id?
        // {...item,numberOfMeals: (numberOfMeals-1)}:item
      // );

      

    };





  
    return(

      <section style={{fontFamily:"Signika"}}>

<Container className='text-dark my-4'>

<Row style={{marginTop:"66px", marginBottom:"32px"}} xs="auto">




      {

          items.map(item=>{
            const {id, img,mealName, description, numberOfMeals} = item;
            return(

              <Col key = {id} className='p-3'> 
              <div className="card-body text-center" >
                <img src ={img}className='img-fluid' />
                <h4 >{mealName}</h4>
                <Link onClick={()=>handleDisplay(description,mealName)}><p className='text-light'>Description/Ingridients</p></Link>
              
                            


                             <Button variant="light"onClick={()=>remove(id)} style={{borderRadius:"30px"}}>
                               <span className="material-symbols-outlined" style={{padding:"4px"}}>
                                 remove
                               </span>
                           </Button>


                             <span style={{fontSize:"40px",paddingLeft:"20px",paddingRight:"15px"}}>{numberMeals[id].toString()}</span>


                             <Button variant='light' onClick={()=>add(id)} style={{borderRadius:"30px"}}>
                               <span className="material-symbols-outlined"style={{padding:"4px"}} >
                                       add
                               </span>
                             </Button>

                             

              </div>



                
              </Col>

              
            ) 
          })

      }

                        <Modal show={show} onHide={handleClose} style={{fontFamily:"Signika"}}>
                              <Modal.Header closeButton>
                                <Modal.Title>{mealSelected}</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>{description}</Modal.Body>
                              <Modal.Footer>

                                <Button variant="light"  onClick={handleClose}>
                                  Close
                                </Button>
                                
                              </Modal.Footer>
                            </Modal>


  </Row>

  <Row>

  <div className="h-100 d-flex align-items-center justify-content-center">
      <Link to = "/order" smooth>
        <Button variant='secondary' className='text-primary' style={{height:"50px",width:"150px", borderRadius:"25px", fontSize:"25px"}}>Check Out</Button>
      </Link>
  </div>

  </Row>

  

  </Container>



      </section>

        
    );
}

export default PickMeals;