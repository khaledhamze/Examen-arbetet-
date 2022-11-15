
import React from 'react'
 import { Link } from "react-router-dom"
 import "../styles/navbar.css"



const Navbar = () => {
  
  return (
    <div className='header'>
       <nav  className="navbar navbar-dark  navbar-expand-lg">   
       {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" >student-CV</a>
                <ul className='navbar-nav'>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/mybackground" className="nav-link">my background & experience</Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/shoolassignments" className="nav-link">Shool assignments,projects & courses</Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link to="/projectscourses" className="nav-link">Projects & Courses</Link>
                    </li> */}
                    <li className="nav-item">
                      <Link to="/aboutme" className="nav-link">About me</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/connectme" className="nav-link">Connect me</Link>
                    </li>

                    
                </ul>
                
             </div>
          </div>
        </nav> 
   </div>

      
  )
}

export default Navbar