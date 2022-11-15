import React from 'react'
import { Link } from 'react-router-dom';
import team2 from '../../image/team2.jpg'
import EC from '../../image/ec_logo.jpg'




const Mybackground = () => {

  return (
      <div className="container">
        <div className="container-row ">
            <div className="d-flex justify-content-between align-items-center  ">
                <div className='p-4'>
                    <h1 className='p-2 text-blu'> My background </h1>
                    <div>
                        <h5 className='p-2'>I am well versed in modern versions of these technologies:</h5>
                        <h5 className='p-2'> . HTML5, structuring clean and logical markup</h5>
                        <h5 className='p-2'>. CSS, using modern syntax such as Flexbox to complement the markup</h5>
                        <h5 className='p-2'>. Javascript, writing clean and modular code to glue it together.</h5>
                        <h5 className='p-2'>. I thrive in an environment where I am responsible for my code and take ownership of changes from editor to production system.</h5>                         
                    </div>
                    <div className="mt-4">
                         {/* <button class="btn btn-outline-light btn-lg"> Contact me </button> */}
                         {/* <button className="btn-contact"><Link to="/connectme" > Contact me</Link> </button>  */}
                    </div>
                    
                </div>
              </div>
          
                <div className='right-side'>
                    <h1 className='text-blu'> Skills </h1>
                    <h5 className='p-2'>. Communication</h5>
                    <h5 className='p-2'>.  Basic skills in coding & Webbdesign</h5>
                   
                    <h5 className='p-2'>. Languages : English, Swedish</h5>
                    
                  </div>
            
        </div>


        <div className='className="d-block justify-content-between align-items-center '>
          
            <h1 className=' mt-4 text-blu'>Education</h1>
          
        </div>
        {/* Education*/}
         <div className="container-row ">
           <div className='p-4'>
             <img src={EC} alt="Group" /> 
              <div className='p-4'>
                 <h5 >Frontend Developer</h5>
                <h5> August 2019 - May 2021</h5>
             </div>        
            </div>
           <div className="d-flex justify-content-between align-items-center  ">
                <div className='p-4'>
                   
                    <h5> As a Frontend Developer and Web Developer I have leaend :   </h5>
                    <h5 className='p-4'> * Specialised theoretical and practical knowledge in frontend and software development. Knowledge and overview of related professional and competence areas such as graphic design, Skills in planning, performing and identifying resources to perform specialist tasks in web development. Skills in solving complex problems in programming.</h5>

                    <h5 className='p-4'> * communication and project methods. Knowledge of work processes and quality criteria in theoretical and practical web development.</h5>

                    <h5 className='p-4'>* Skills in communicating undertakings and solutions regarding web development in both Swedish and English Competence to independently process all technical elements required both practically and theoretically.</h5>

                    <h5 className='p-4'> such as HTML JavaScript and design and in such a way as to lead to further learning and professional development. Competence to monitor software development and web development and complete assigned projects.</h5>

                    {/* <div className='text-blu'>
                      <h4>Graduted junior Frontend Developer.</h4>
                      <h4>I would describe myself as a highly driven, social and creative people person who is  passionate about personal development.</h4>
                    </div> */}
                    
                </div>
              </div>
        </div>
        

      </div>
       
    
  )
}

export default Mybackground