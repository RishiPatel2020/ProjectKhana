import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal} from 'react-bootstrap';
import {Button} from "react-bootstrap";
import './PickMeals.css'



  const data = [
    {
      id:1,
      img: require("../../Resources/Meals/meal1.png"),
      mealName:"Meal Name 1 ",
      description:"description : 1",
      numberOfMeals:0,
    },
  
    {
      id:2,
      img: require("../../Resources/Meals/meal2.png"),
      mealName:"Meal Name 2",
      description:"description : 2",
      numberOfMeals:0
    
    },
  
    {
      id:3,
      img: require("../../Resources/Meals/meal3.png"),
      mealName:"Meal Name 3",
      description:"description : 3",
      numberOfMeals:0
    
    },
  
    {
      id:4,
      img: require("../../Resources/Meals/meal4.png"),
      mealName:"Meal Name 4",
      description:"description : 4",
      numberOfMeals:0
    
    }
  
  
  ]; 



const PickMeals = () => {


    

    // need this for img, pop up 
    const [items, setItems] = useState(data);

    // pop status and description
    const [show, setShow] = useState(false);
    const [description, setDescription] = useState("");


    
    // method for pop up 
    const handleDisplay = (description) =>{
      setDescription(description); 
      setShow(true);

    }

    const add = (id, numberOfMeals)=>{


      const listItems = items.map((item)=>item.id===id?
        {...item,numberOfMeals: (numberOfMeals+1)}:item
      );
      setItems(listItems);


    };


    const remove = (id, numberOfMeals)=>{

      if(numberOfMeals>0){

        const listItems = items.map((item)=>item.id===id?
        {...item,numberOfMeals: (numberOfMeals-1)}:item
      );
      setItems(listItems);

      }
      

    };
    const handleClose = () => {
      setDescription(""); 
      setShow(false); 
    }




  
    return(

      <section style={{fontFamily:"Signika"}}>

<Container className='text-dark'>

<Row style={{marginTop:"66px", marginBottom:"32px"}} xs="auto">




      {

          items.map(item=>{
            const {id, img,mealName, description, numberOfMeals} = item;
            return(

              <Col key = {id} className='p-3'> 
              <div className="card-body text-center" >
                <img src ={img}className='img-fluid imageRes' />
                <h4 >{mealName}</h4>
                <Link onClick={()=>handleDisplay(description)}><p className='text-light'>Description/Ingridients</p></Link>
              
                            


                             <Button variant="light"onClick={()=>remove(id, numberOfMeals)} style={{borderRadius:"30px"}}>
                               <span className="material-symbols-outlined" style={{padding:"4px"}}>
                                 remove
                               </span>
                           </Button>


                             <span style={{fontSize:"40px",paddingLeft:"20px",paddingRight:"15px"}}>{numberOfMeals}</span>


                             <Button variant='light' onClick={()=>add(id, numberOfMeals)} style={{borderRadius:"30px"}}>
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
                                <Modal.Title>Description/Ingridients</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>{description}</Modal.Body>
                              <Modal.Footer>

                                <Button variant="light"  onClick={handleClose}>
                                  Close
                                </Button>
                                
                              </Modal.Footer>
                            </Modal>


  </Row>

  </Container>



      </section>

        
    );
}

export default PickMeals;