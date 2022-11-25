import React from 'react';
import {Container, Row } from 'react-bootstrap';





const InformationBox = ({data}) => {
  const textRight = ()=>{

    return (
        
        <>
            
            {data.bigImage}
            
                           
                          {/* Right Stuff */}
                             <Container>
                         
                                 <Row><div className="h-100 d-flex align-items-center justify-content-center">{data.smallImage}</div></Row>
                                 <Row>{data.description}</Row>
                                 
                                 {data.buttonExist? data.button : <></>}
                               
                             </Container>
        </>
    );
  
  };
  
  
  const textLeft = ()=>{
  
    return(
  
      <>
  
  
            
                           
            {/* Right Stuff */}
               <Container>
           
                   <Row><div className="h-100 d-flex align-items-center justify-content-center">{data.smallImage}</div></Row>
                   <Row>{data.description}</Row>
                   
                   {data.buttonExist? data.button : <></>}
                 
               </Container>

               {data.bigImage}
    </>
  
    );
  
    
  
  
          
        
  
  }; 


  return(
    <section
    className={"bg-"+data.backgroundColor+' text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start'}

    id = "Showcase" style={{fontFamily:"Signika", marginBottom:"-10px"}}

  >
    <div className="container" >
      
      {data.heading}


      <div className="d-sm-flex align-items-center justify-content-between my-2" >
      
        {data.textPosition==='r'?textRight():textLeft()}

      </div>

      

    </div>
  </section>
  );
}

export default InformationBox