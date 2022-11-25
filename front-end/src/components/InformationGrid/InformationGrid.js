import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const InformationGrid = ({data}) => {



  return (
    <section className={"row align-items-center justify-content-between bg-"+data.backColor} style={{fontFamily:"Signika"}}>
        <Container style={{padding:"64px 32px"}}>
            <div style={{textAlign:"center"}}>
                <h1 style={{margin:"0px 0px 10px", fontSize:"48px"}} className={"text-"+data.headingColor}>{data.heading}</h1>
            </div>
            
      <Row>
        <Col sm>
            <div className="card-body text-center" >
                
                <img  className="h1 mb-3" src={data.image1} style={{height:data.image1Height,width:data.image1Width}} alt ="lorem"/>

                <h4  className={"text-"+data.titleColor} >{data.title1}</h4>
                <p className={"card-text text-"+data.textColor}>
                    {data.description1}
                </p>
              </div>
        </Col>
    
        <Col sm>
          
        <div className="card-body text-center" >
                
        <img  className="h1 mb-3" src={data.image2} style={{height:data.image2Height,width:data.image2Width}} alt ="lorem"/>

                <h4 className={"text-"+data.titleColor}>{data.title2}</h4>
                <p className={"card-text text-"+data.textColor}>
                {data.description2}
                </p>
              </div>
        </Col>
        <Col sm>
        <div className="card-body text-center" >
                
        <img  className="h1 mb-3" src={data.image3} style={{height:data.image3Height,width:data.image3Width}} alt ="lorem"/>

                <h4 className={"text-"+data.titleColor}>{data.title3}</h4>
                <p className={"card-text text-"+data.textColor}>
                {data.description3}
                </p>
              </div>
        </Col>
      </Row>
    </Container>

    </section>
    
  );

}

export default InformationGrid; 