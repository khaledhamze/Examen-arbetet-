import React from 'react'
import react_logo from '../image/react_logo_footer.jpg'

import figma_logo from '../image/figma-4.jpg'
import boy from '../image/boy_connect.jpg'

import '../styles/footer.css'

const Footer = () => {
  return (
   
     <div className='p-4'>
        <h3 className='mt-4 container ' >LETS CONNECT:</h3>
       <div className='Linked'>
         <img src={boy}  alt='boy' className='p-2' />
         
         <h3><a href="https://www.linkedin.com/mwlite/in/khaled-hamzeh-651b77241" className='linked-color' >Linked</a></h3>
        
      </div>
     <div className='liner'>
        
        
        
        <div className='container-copy'>
            <h3>Meade with</h3>
            <img src={react_logo}  alt='react_logo_footer' className='p-2' />
            <img src={figma_logo}  alt='Figma-logo' className='p-2' />
            
            </div>
        
        
        <div className='container-copy'>
           <p> &copy;  2022 studen. </p> 
        </div>
      </div>
    </div>
  )
}

export default Footer