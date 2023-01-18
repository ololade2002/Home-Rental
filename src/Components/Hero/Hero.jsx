
import React from 'react';
import './Hero.css';
import map from '../../Images/map.png';
import search from '../../Images/search.png';

const Hero = () => {
  return (
  <div className="hero">

<div className='hero-l'>
    <h2> The most affortable place to stay in  San Franciso bay area</h2>
</div>

<div className='hero-r'>
    <div><img src={map} alt="" /></div>

    <div >
     <div className='options'>
            <select name="types" id="types">
              <option  value=""  >All types</option>
            </select>
            <select name="local" id="local">
              <option value=""  >Neighborhood</option>
            </select>
            <div className="search">
              <img src={search} alt="" />
            </div>
            </div>
          </div>

  </div>
  </div>
  )
}

export default Hero;

