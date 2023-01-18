
import React from 'react';
import './New.css';
import img1 from '../../Images/img5.png';
import img2 from '../../Images/Image 2.png';
import img3 from '../../Images/img8.png';
import img4 from '../../Images/img10.png';
import Form from '../Form/Form';

const New = () => {
  return (
   <div className="new">

<div className="new-body">

    <div className="new-l">
 <div className="box1">
<div>
<img src={img1} alt="" className='img-fluid' />
<p>Flexible Leases</p>
</div>

<div>
<img src={img2} alt="" className='img-fluid' />
<p>7-Day Happiness Guaranteed</p>
</div>
</div>

<div className="box2">
<div>
<img src={img3} alt="" className='img-fluid' />
<p>Monthly House Cleaning</p>
</div>

<div>
<img src={img4} alt="" className='img-fluid' />
<p>Choose Your Own Roommate</p>
</div>
</div>

<div></div>

      </div>

    <div className="new-r">
        <h2>Flexibility and options to suit your lifestyle.</h2>
        <p>You need it? We got it. We make finding your next home easy, 
            comfortable, and simple. From our happiness guarantee to our selective roommate 
            finder option. We provide you the flexibility 
            that you most desire.</p>
            <button>Search Rooms</button>
    </div>
    </div>
    <Form/>
   </div>
  )
}

export default New;