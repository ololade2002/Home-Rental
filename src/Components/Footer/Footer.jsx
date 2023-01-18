
import React from 'react';
import './Footer.css';
import logo from '../../Images/logo 1.png';
import img1 from '../../Images/Facebook (1).png';
import img2 from '../../Images/Twitter.png';
import img3 from '../../Images/LinkedIn.png';
import img4 from '../../Images/Youtube.png';
import img5 from '../../Images/Instagram.png';
import img6 from '../../Images/GooglePlus.png';
import img7 from '../../Images/Pinterest.png';
import img8 from '../../Images/RSS.png';
import img9 from '../../Images/Shape (2).png';
import img10 from '../../Images/Path.png';
import img11 from '../../Images/Shape (3).png';


const Footer = () => {
  return (
   <div className="footer">

<div className="body">

<div className="footer-l">
    <img src={logo} alt="" />
</div>

<div className="footer-r">

<div className='first'>
    <img src={img9} alt="" />
    <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
</div>

<div className='second'>
  <div>
  <img src={img10} alt="" />
    <p>(123) 456-7890</p>
  </div>
  <div>
    <img src={img11} alt="" />
    <p>(123) 456-7890</p>
  </div>
</div>

<div className='third'>
    <p>Social Media</p>
    <ul>
        <li><img src={img1} alt="" /></li>
        <li><img src={img2} alt="" /></li>
        <li><img src={img3} alt="" /></li>
        <li><img src={img4} alt="" /></li>
        <li><img src={img5} alt="" /></li>
        <li><img src={img6} alt="" /></li>
        <li><img src={img7} alt="" /></li>
        <li><img src={img8} alt="" /></li>
    </ul>
</div>

</div>

</div>
<hr />
<div className="end">
    <ul>
  <li>about us</li>
  <li>contact us</li>
  <li>help</li>
  <li>privacy policy</li>
  <li>disclaimer</li>
    </ul>

    <div>
        <p>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
    </div>
</div>
   </div>
  )
}

export default Footer;