import React from 'react'
import './ZipCode.css'; 

const ZipCode = () => {
  return (
    <div className="bg-second  p-5" id = "Newsletter" style={{marginTop:"-40px", marginBottom:"10px"}}>
      <div className="container" >
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0"></h3>

          <div className="input-group news-input" style={{boxShadow:"10px 10px 10px black", borderRadius:"8px"}}>
            <input type="number" min = '0' max='9999' className="form-control" placeholder="Enter Zip Code" style={{textAlign:"center"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZipCode;