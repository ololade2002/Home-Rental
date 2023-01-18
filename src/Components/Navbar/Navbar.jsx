
import React from 'react';
import './Navbar.css';
import logo from '../../Images/logo 1.png';
import { navbarData } from '../../Data/Data';
import { useState } from 'react';
import {HiMenuAlt3} from 'react-icons/hi';

import {HiOutlineX} from 'react-icons/hi';

const Navbar = () => {
const [active,setActive] = useState(0);
const [mobile,setMobile] = useState(false);

  return (
  <nav >
<div className="navbar">

<div>
    <img src={logo} alt="" />
</div>

<div className={mobile ? 'navLink-mobile' : 'navLink' } onClick={()=> setMobile(false)} >
   {navbarData.map((links,index)=> (
    <div className={active === index ? 'navbar-active' : 
    'navbar-preview' } onClick={()=>setActive(index)} key={index}>
      <p>{links.text}</p>
    </div>
   ))}
</div>

{/* MENU */}
<button className="menu" onClick={()=>setMobile(!mobile)}>
{mobile ? <HiOutlineX/> : <HiMenuAlt3/>  }
</button>

<div/>
</div>
  </nav>
  )
}

export default Navbar;