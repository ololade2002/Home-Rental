
import React from 'react';
import './About.css';
import img1 from '../../Images/img1.png';
import { aboutData } from '../../Data/Data';

const About = () => {
  return (
   <div className="about">
    <h2><span>Minimun Living Cost</span> Takes Care Of Everything</h2>

   <div className="about-body">
    <div className="about-l">
        <img src={img1} alt="" />
    </div>
    <div className="about-r">
   {aboutData.map((about,index)=> (
    <div className="about-preview" key={index}>
  <div><img src={about.img} alt="" /></div>
  <p>{about.text}</p>
    </div>
   ))}
    </div>
    </div>
   </div>
  )
}

export default About;