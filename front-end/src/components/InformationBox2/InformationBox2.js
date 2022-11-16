import React from 'react'

const InformationBox2 = () => {
  return (
    <section id="learn" className="p-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h2>Information Box 2</h2>
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
          <div className="col-md">
            <img src="img/react.svg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InformationBox2