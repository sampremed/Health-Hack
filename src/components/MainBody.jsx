import React from 'react';
import img_one from './img_one.jpg'
import { Button } from 'bootstrap';
import swal from 'sweetalert';


export default function MainBody() {


  function Welcome(){
    swal("Happy to see you today!", "Welcome to Health Hack", "success");

  }



  return (
    <div className='container' id='main_body_container'>
      <img src={img_one} id='img_one'/>


<div className='container' id='text_container'>
  <h3 id='title_main_body'><b>What is Mental Health?</b></h3>
  <p id='text_main_body'>Mental health refers to a person's emotional, physicological, and social well-being. </p>

    <button onClick={Welcome} type="button"   id="start_button_main_component">Yayyyy <span>🎊</span> </button>

</div>

<h2 id='title_mind_containner' className='display-6'><b>Anatomy of the brain</b></h2>


    </div>
  )
}
