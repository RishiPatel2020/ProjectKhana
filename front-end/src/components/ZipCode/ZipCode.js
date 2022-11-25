import React from 'react'

const ZipCode = () => {
  return (
    <section className="bg-second  p-5" id = "Newsletter">
      <div className="container" >
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0"></h3>

          <div className="input-group news-input" style={{boxShadow:"10px 10px 10px black", borderRadius:"8px"}}>
            <input type="text" className="form-control" placeholder="Enter Zip Code" style={{textAlign:"center"}}/>
            <button className="btn btn-dark btn-lg" type="button">Submit</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ZipCode;