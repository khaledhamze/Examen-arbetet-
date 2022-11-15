import React from 'react'
import Navbar from '../Navbar';
 import Connectme from './Connectme'
import { Link } from 'react-router-dom';
import  x  from '../../image/user_pic.jpg'
import Mybackground from './Mybackground.js'
import Shoolassignments from './Shoolassignments.js'
import Footer from '../Footer.js'
import '../../styles/home.css'

const Home = () => {
  return (
    <div className=' container-home'>
      <Navbar />
      {/* <h1>Home</h1>
      <p>Your Smartest IT Solution</p> */}
      <div className="container">
        <div className="container-row ">
            <div className="d-flex justify-content-between align-items-center  ">
                <div className='p-4'>
                   
                    <h1> Hi, I am a student </h1>
                    <div className='text-blu'>
                      <h4>Graduted junior Frontend Developer.</h4>
                      <h4>I would describe myself as a highly driven, social and creative people person who is  passionate about personal development.</h4>
                    </div>
                    <div className="mt-4">
                         {/* <button class="btn btn-outline-light btn-lg"> Contact me </button> */}
                         <button className="btn-contact"><Link to="/connectme" > Contact me</Link> </button> 
                    </div>
                </div>
                </div>
          
                <div className='p-4'>
                    <img src={x} alt="Group" /> 
                    
                </div>
            
        </div>
      </div>
      <Mybackground />
      <Shoolassignments />
       < Connectme /> 
       <Footer />   
      
    </div>
  )
}

export default Home