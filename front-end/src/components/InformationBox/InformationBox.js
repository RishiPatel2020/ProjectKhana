import React from 'react'

const InformationBox = ({data}) => {


  const textOnRight = ()=>{
    return(
      <div className="row align-items-center justify-content-between">
        
    
        <div className="col-md">
          <img src={data.image} className="img-fluid"/>
        </div>
        
        <div className="col-md p-5">
          <h2>{data.title}</h2>
          <p className="lead">
            {data.subtitle}
          </p>
          <p>
            {data.description}
          </p>
          <a href="google.com" className={data.backgroundColor==="light"? "btn btn-dark mt-3":"btn btn-light mt-3"}>
            <i className="bi bi-chevron-right"></i> Read More
          </a>
        </div>


      </div>
    );
  };




  const textOnLeft = ()=>{
    return(
      <div className="row align-items-center justify-content-between">
        
    
        
        
        <div className="col-md p-5">
          <h2>{data.title}</h2>
          <p className="lead">
            {data.subtitle}
          </p>
          <p>
            {data.description}
          </p>
          <a href="google.com" className={data.backgroundColor==="light"? "btn btn-dark mt-3":"btn btn-light mt-3"}>
            <i className="bi bi-chevron-right"></i> Read More
          </a>
        </div>



        <div className="col-md">
          <img src={data.image} className="img-fluid"/>
        </div>

      </div>
    );
  };



  

  

  return (
    <section id="learn" className= {"p-5 bg-"+data.backgroundColor+" text-"+data.textColor}>
    <div className="container">
      {data.textPosition==='r'?textOnRight():textOnLeft()}
    </div>
  </section>
  )
}

export default InformationBox