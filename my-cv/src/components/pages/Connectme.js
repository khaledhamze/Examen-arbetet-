import React from 'react'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import swal from 'sweetalert';


//import swal from 'sweetalert';

import "../../styles/contact.css";
 
 
const Connectme = () => {
   const { register, formState: { errors }, handleSubmit } = useForm();
  
   const onSubmit = (data, e )=>{
     e.preventDefault();
     console.log(data);
     sendEmail(data)
   } 
  
   // info@swedcon18.com 
   function sendEmail () {
     emailjs.sendForm("service_c0ds6pr", "template_wszl9yf", "#myForm",'9KSVofdVoTnCzxswL')
     .then( (res)=> {
       console.log(res.text);
       console.log('you message send');
       swal('Thank you!','Well be in touch soon.');
     }, (error)=>{
       console.log(error.text);
     
     });
 
 
}
 
  return (
    <section  id='contact'>
      <div className='container'>
          <div className="row">
              {/* <p className='contact-title'> </p> */}
              <p className="contact-heading ">Contact me</p>
              
          </div>

          <div className="container-row">

          <div className='container-add'>
              {/* <img src={local} alt='local' /> */}
              
                <div className='p-4'>
                <h3>Address:</h3>
                <p>Blogshagen 1c </p>
                <p>722 11 västerås </p>
                <p>Sweden </p>
                </div>

                <div className='p-4'>
                <h3>Email:</h3>
                <p>kjdhfsdh@gmail.com</p>
                </div>

                <div className='p-4'>
                <h3>Phone:</h3>
                <p>+46702758159</p>
                </div>

                {/* <div className='p-4'>
                 <h3>Social:</h3>
                </div> */}
              

            </div>

            <div className="container-md ">
                  <p className='send-text'>Send Message</p>
                  {/* hooks form */}
                  <form  className='contact-form' id='myForm' onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="row mt-4 ">
                      {/*name */}
                      <div className="col-md-6 mb-3">
                          
                          <input {...register("name", {  required: true, maxLength: 20 })} placeholder="Name" />
                         {errors.name?.type === 'required' && " name is required"}
                      </div>
                         {/* email */}
                      <div className="col-md-6 mb-3">
                          
                          <input {...register("email", { required: true })} placeholder="Email" />
                             {errors.email && "email is required"}
                      </div>
                   </div>
                
                   {/* subjuct */}
                   <div>
                       <input {...register("subjuct", { required: true })}   placeholder="subjuct" />
                       {errors.subjuct && "subjuct is required"}
                    </div>
                    {/* message */}
                    <div className="col-md-6 mb-3">
                       <textarea {...register("message", { required: true })}  placeholder="Message" />
                        {errors.message && "message is required"}
                    </div>

                    {/* <input type="submit" className=''/> */}
                    <button className="btn-contact mt-4 " type="submit">Send Message</button>
              </form>
                  
                  
                  
            </div>
            
       </div>
     
   </div>
   </section>
  )
}

export default Connectme