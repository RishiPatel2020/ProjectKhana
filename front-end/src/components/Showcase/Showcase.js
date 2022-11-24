import React from 'react'
import LogInPopUP from '../LogInPopUp/LogInPopUp';
import SignUpPopUp from '../SignUpPopUp/SignUpPopUp';
import background from '../../Resources/newBack.png'; 

const Showcase = ({loggedIn, setLogIn}) => {
  return (
    <section className="bg-primary text-primary p-5 p-lg-0 pt-lg-5 text-center text-sm-start" id = "Showcase" style={{backgroundImage: `url(${background})`, backgroundSize:"cover", height:"100%", width:"100%",marginRight:"10px", fontFamily:"Signika"}}>
    <div className="container">
      <div className="d-sm-flex align-items-center my-0.1" >
       
         <div style={{backgroundColor:"rgb(98, 10, 21)", opacity:0.91,paddingLeft:"25px",paddingRight:"25px",marginBottom:"55px"}}>
          
         <div style={{marginBottom:"-20px",fontSize:"4em"}} className="text-primary">
          <strong>Cooking</strong>
        </div>

        <div style={{marginBottom:"-20px", fontSize:"4em"}} className="text-primary">
          <strong>Indian</strong>
        </div>
        <div style={{marginBottom:"-20px", fontSize:"4em"}} className="text-primary">

           <strong>Food</strong>

        </div>



        <div style={{marginBottom:"-20px"}}>

          <strong style={{fontSize:"4em",color:"rgb(255,87,20)"}}>Takes</strong>

          </div>


          <div style={{marginBottom:"-30px"}}>

            <strong style={{fontSize:"4em",color:"rgb(255,87,20)"}}>Time</strong>

          </div>



          <div style={{marginTop:"30px"}}>

              <span className="lead  text-primary" style={{fontSize:"1.7em"}}>
              Order <span style={{color:"rgb(255,87,20)"}} >Mirchi Meals </span>
              </span>
              <br></br>

              <span className="lead text-primary" style={{fontSize:"1.7em" }}>
              <span className='text-primary'>So You </span>
              Worry Less
              </span>



          </div>




        {/*
          <div style={{marginBottom:"-50px", fontSize:"5.5em"}} className="text-primary">

            <span><strong>Cooking</strong></span>

          </div>

          <div style={{marginBottom:"-50px", fontSize:"5.5em"}} className="text-primary">

            <span><strong>Indian</strong></span>

          </div>

          <div style={{marginBottom:"-50px", fontSize:"5.5em"}} className="text-primary">

            <span><strong>Food</strong></span>

          </div>
          
          <div style={{marginBottom:"-40px"}}>

          <span style={{fontSize:"5.5em",color:"rgb(255,87,20)"}}  ><strong>Takes</strong></span>

          </div>


          <div style={{marginBottom:"-40px"}}>

          <span style={{fontSize:"5.5em",color:"rgb(255,87,20)"}}  ><strong>Up Time</strong></span>

          </div>
          
          
          <div style={{marginTop:"30px"}}>

          <span className="lead  text-primary" style={{fontSize:"1.5em" , fontFamily:"Comfortaa"}}>
           Order <span style={{fontFamily:"Comfortaa",color:"rgb(255,87,20)"}} >Mirchi Meals <span className='text-primary'>So You </span></span>
           </span>
          <br></br>

          <span className="lead text-primary" style={{fontSize:"2em" , fontFamily:"Comfortaa"}}>
          Worry Less
          </span>



          </div> */}
          
          
          
          


          {!loggedIn && 
          
          <div className="row align-items-center justify-content-between my-4" >
          <div className="col-md">
            <SignUpPopUp style={{buttonColor:"secondary", textColor:"white"}} setLogIn = {setLogIn}/>
          </div>  
          <div className="col-md p-5">
            <LogInPopUP style={{buttonColor:"secondary", textColor:"white"}} setLogIn = {setLogIn}/>
          </div>
        </div>   
          }
          
               

        
        
        </div> 
        
      </div>
    </div>
  </section>
  );
}

export default Showcase;