import React from 'react'
import mone from './mone.png'
export default function Comp_one() {
  return (
    <div id='Comp_onex' className='container' >
      <h3 id="disorder_name"> Depression And Physical Illness</h3>
      <hr id='disorder_divider'></hr>
      <p id='disorder_info'>

      Depression is associated with physical illness as well. <br/>
      Some 25% of hospitalized medical patients have noticeable depressive symptoms and about 5% are suffering from major depression. <br/>
      Chronic medical conditions associated with depression include heart disease, cancer, vitamin deficiencies, diabetes, hepatitis, and malaria.<br/>
      Depression also is a common effect of neurological disorders, including Parkinson’s and Alzheimer’s diseases, multiple sclerosis, strokes, and brain tumors.<br/>
      Even moderate depressive symptoms are associated with a higher than average rate of arteriosclerosis, heart attacks, and high blood pressure. <br/>
      Depression can mimic medical illness and any illness feels worse to someone suffering from depression.

      </p>

      <img src={mone} id='mone_img'/>
    </div>
  )
}
