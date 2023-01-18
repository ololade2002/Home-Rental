
import React from 'react';
import './Property.css';
import { propertyData } from '../../Data/Data';
import { useState } from 'react';



const Property = () => {

const [selected,setSelected] = useState(0)

  return (
  <div className="property">

<div>
    <h2><span>List </span>Of Properties</h2>
<button className=''>View All Property</button>
</div>

<div className="property-body">

{propertyData.map((prop,index)=> (
    <div className={selected === index ? 'property-active':
    'property-preview'} onClick={()=>setSelected(index)} key={index}>
    <img src={prop.img} alt="" />
   <div className='list'>
   <h3>{prop.address}</h3>
    <p>{prop.text}</p>
    <h2>{prop.price}</h2>
  

<div className="items">
  <div>  <img src={prop.asset1} alt="" />
    <h5>{prop.num1}</h5></div>
   
    <div><img src={prop.asset2} alt="" />
    <h5>{prop.num2}</h5></div>
  
   <div> <img src={prop.asset3} alt="" />
    <h5>{prop.num3}</h5></div>
</div>

</div>
    </div>
))}

</div>
  </div>
  )
}

export default Property;