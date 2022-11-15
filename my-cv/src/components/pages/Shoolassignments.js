import React from 'react'
import vscode_logo from '../../image/school -courses/vscode_logo.jpg'
import css3_logo from '../../image/school -courses/css3_logo.jpg'
import html_logo from '../../image/school -courses/html_logo.jpg'
import javascript_logo from '../../image/school -courses/javascript_logo.jpg'
import jquery_logo from '../../image/school -courses/jquery_logo.jpg'
import nodejs_logo from '../../image/school -courses/nodejs_logo.jpg'
import react_logo from '../../image/school -courses/react_logo.jpg'
import vue_logo from '../../image/school -courses/vue_logo.jpg'
import adobe_XD from '../../image/school -courses/adobe_XD.jpg'

import pro_HTML from '../../image/img_projects/HTML.jpg'
import pro_javaScript from '../../image/img_projects/javascript-c.jpg'
import projectjavascript from '../../image/img_projects/project-javascript-1.jpg'
import LIA from '../../image/img_projects/LIA.jpg'


 import "../../styles/shoolassignments.css"

const Shoolassignments = () => {
  return (
    <div className='container' >

        {/*  images School Courses */}
        <div className="mt-4 ">
            <h2 className=' p-4'>School Courses </h2>
            <h5>I gained basic knowledge from as a studying front-end developer</h5>
          </div>
        <div className='row-team'>
           {/* vscode_logo */}
           <div className="column">
             <div className='profile-card'>
                <div className='img'>
                  <img src={vscode_logo} alt="vscode_logo" />
                </div> 
                <div className='caption'>
                  <h3>Visual Studio Code</h3>
                </div>
            </div>
           </div>
            {/* html_logo */}
            <div className="column">
              <div className='profile-card'>
                <div className='img'>
                <img src={html_logo} alt="html_logo" />
                </div> 
                <div className='caption'>
                  <h3>HTML</h3>
                    <div className="d-flex flex-direction-row">
                        
                      </div>
                    </div>
                </div>
            </div>

            {/* html_logo */}
            <div className="column">
              <div className='profile-card'>
                <div className='img'>
                  <img src={css3_logo} alt="html_logo" />
                </div> 
                <div className='caption'>
                  <h3> CSS</h3>
                    {/* <p className="title">Marketing </p> */}
                    <div className="d-flex flex-direction-row">
                        
                      </div>
                    </div>
                </div>
              </div>
            {/* javascript_logo */}
            <div className="column">
              <div className='profile-card'>
                <div className='img'>
                  <img src={javascript_logo} alt="javascript_logo" />
                </div> 
                <div className='caption'>
                  <h3>Javascript</h3>
                    <div className="d-flex flex-direction-row ">
                        
                      </div>
                  </div>
              </div>
            </div> 


            {/* jquery_logo */}
            <div className="column">
              <div className='profile-card'>
                <div className='img'>
                  <img src={jquery_logo} alt="jquery_logo" />
                </div> 
                <div className='caption'>
                  <h3>Jquery</h3>
                  </div>
              </div>
            </div> 

            {/* nodejs_logo */}
            <div className="column">
              <div className='profile-card'>
                <div className='img'>
                  <img src={nodejs_logo} alt="nodejs_logo" />
                </div> 
                <div className='caption'>
                  <h3>Nodejs</h3>
                  </div>
              </div>
            </div> 
            {/* react_logo */}
            <div className="column">
              <div className='profile-card'>
                <div className='img'>
                  <img src={react_logo} alt="react_logo" />
                </div> 
                <div className='caption'>
                  <h3>React</h3>
                  </div>
              </div>
            </div> 
            
            {/* vue_logo */}
            <div className="column">
              <div className='profile-card'>
                <div className='img'>
                  <img src={vue_logo} alt="vue_logo" />
                </div> 
                <div className='caption'>
                  <h3>Vue</h3>
                  </div>
              </div>
            </div> 

            {/* adobe_XD */}
            <div className="column">
              <div className='profile-card'>
                <div className='img'>
                  <img src={adobe_XD} alt="adobe_XD" />
                </div> 
                <div className='caption'>
                  <h3>Adobe_XD</h3>
                  </div>
              </div>
            </div> 


        </div>
        {/* Projecter */}
        <h1 className='p-4'>School Projects</h1>
      <div className="container-projects">
        
        <div className="card">
          <div className="card-header">
            <img src={pro_HTML} alt="pro_HTML" />
          </div>
          <div className="card-body">
            <span className="tag tag-teal">Design project</span>
            <h5>created with HTML & CSS</h5>
          </div>
          <button className="btn-contact"><a href="https://github.com/ImanEzziyadi/Jood---App-Landing-Page/tree/master" target="_blank">Download  from Github</a></button> 
        </div>
        {/* cade-2 */}
        <div className="card">
          <div className="card-header">
            <img src={pro_javaScript} alt="pro_javaScript"/>
          </div>
          <div className="card-body">
            <span className="tag tag-teal"> e-commerce project </span>
             <h5>React, Vue & Angular</h5> 
           </div>
            <button className="btn-contact"><a href= "https://github.com/ImanEzziyadi/eCommerce-med-React/tree/master/Iman-Market" target="_blank" >Download  from Github</a></button> 
        </div>
        {/* card-3 */}
        <div className="card">
          <div className="card-header">
            <img src={projectjavascript} alt="projectjavascript" />
          </div>
          <div className="card-body">
            <span className="tag tag-teal">Form validation project</span>
            <h5> Javascript</h5>
             
          </div>
          <button className="btn-contact"><a href="https://github.com/ImanEzziyadi/uppgifter-domain.git" target="_blank">Download  from Github</a></button> 
          
       </div>
       
       {/* LIA */}
       <div className="card">
          <div className="card-header">
            <img src={LIA} alt="LIA" />
          </div>
          <div className="card-body">
            <span className="tag tag-teal">Swedcon18 hemsida</span>
            <h5> React & Hooks</h5>
          </div>
          <button className="btn-contact"><a href="https://github.com/ImanEzziyadi/Examansarbete/tree/master/Sweden18" target="_blank">Download  from Github</a></button> 
        </div>
        </div>
        {/*End  */}
    </div>
  )
}

export default Shoolassignments