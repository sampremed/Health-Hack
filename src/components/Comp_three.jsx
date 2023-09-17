import React from 'react'
import sixo from './sixo.png'
export default function Comp_two() {
  return (
    <div id='Comp_threez' className='container' >
      <h3 id="disorder_name">Personality And Mood Disorders</h3>
      <hr id='disorder_divider'></hr>
      <p id='disorder_infoy'>
    
      People are more easily demoralized by depression and slower to recover if they are withdrawn and unreasonably self-critical or irritable, <br/>
      impulsive, and hypersensitive to loss. Most people with major depression also show some signs of anxiety, and 15-30% have panic attacks. As a biological mechanism for coping with danger,<br/>
       anxiety creates a need for help or protection that may give way to despair if it is disappointed. <br/>
       Chronically anxious people may also medicate themselves with alcohol or drugs that can cause depression.
      </p>


      <img src={sixo} id='mone_img'/>
      
    </div>
  )
}
