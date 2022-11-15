import React from 'react'
import  x  from '../../image/user_pic.jpg'

const Aboutme = () => {
  return (
    <div className='container'>
    <div className='container-row'>
      <div className="d-flex justify-content-between align-items-center  ">
        <div className='p-4'>
          <h1 className=' about'>About me</h1>
          <h4>Hi! I'm Alex, born in syria and raised in Sweden. I'm 30 years</h4>
          <h4>I would describe myself as a highly driven, social and creative people person who is  passionate about personal development.</h4>
          <h4>My family and friends would describe me as stubborn person who never gives up until I reach my set goals.</h4>
        </div>
        </div>


        <div className='p-4'>
             <img src={x} alt="Group" className='p-4 mt-4' />  
            
                      
          </div>
      
    </div>
    </div>
  )
}

export default Aboutme