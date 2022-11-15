import React from 'react'

const Footer = () => {
  return (
    <footer className="p-5 bg-dark text-white text-center position-relative">
      <div className="container">
        <p className="lead">Copyright &copy; 2022 Maaji Kitchen</p>

        <a href="#" className="position-absolute bottom-0 end-0 p-5">
          <i className="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer