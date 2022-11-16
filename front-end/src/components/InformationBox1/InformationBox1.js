import React from 'react'

const InformationBox1 = () => {
  return (
    <section id="learn" className="p-5">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-md">
          <img src="img/fundamentals.svg" className="img-fluid" alt="" />
        </div>
        <div className="col-md p-5">
          <h2>Information Box 1</h2>
          <p className="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Similique deleniti possimus magnam corporis ratione facere!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            reiciendis eius autem eveniet mollitia, at asperiores suscipit
            quae similique laboriosam iste minus placeat odit velit quos,
            nulla architecto amet voluptates?
          </p>
          <a href="google.com" className="btn btn-light mt-3">
            <i className="bi bi-chevron-right"></i> Read More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default InformationBox1