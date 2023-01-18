
import React from 'react';
import './Top.css';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import { Parallax } from 'react-parallax';
import house from '../../Images/house.png';

const Top = () => {
  return (
 <Parallax  className='top' bgImage={house}
 strength={300} >
  
    <Navbar/>
    <Hero/>
  
 </Parallax>
  )
}

export default Top;