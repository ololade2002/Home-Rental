
import React from 'react';
import './Founder.css';
import img from '../../Images/content-card-item-8.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img1 from '../../Images/officeimg1.webp';
import img2 from '../../Images/officeimg3.webp';
import img3 from '../../Images/officeimg4.jpeg';

const Founder = () => {
  return (
   <div className="founder">

<div className="founder-body">

<div className="founder-l">
 <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="preview">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam interdum nisl et nunc facilisis, a commodo eros mollis.
             Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac,
             mattis eu velit. Donec sed risus a lacus fringilla finibus.</h4>
             <div className='swiper-text'>
              <div><img src={img1} alt="" /></div>
              <div >
             <h5>Harry Wilson</h5>
             <p>Property Owner</p>
              </div>
             </div>
             </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="preview">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam interdum nisl et nunc facilisis, a commodo eros mollis.
             Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac,
             mattis eu velit. Donec sed risus a lacus fringilla finibus.</h4>
             <div className='swiper-text'>
              <div><img src={img2} alt="" /></div>
              <div >
             <h5>Dorathy Blake</h5>
             <p>Property Supervisor</p>
              </div>
             </div>
             </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="preview">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam interdum nisl et nunc facilisis, a commodo eros mollis.
             Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac,
             mattis eu velit. Donec sed risus a lacus fringilla finibus.</h4>
             <div className='swiper-text'>
              <div><img src={img3} alt="" /></div>
              <div >
             <h5>Abubakar Abdul</h5>
             <p>Property Manager</p>
              </div>
             </div>
             </div>
        </SwiperSlide>
       
      </Swiper>
</div>

<div className="founder-r">
 <div><a href="https://www.youtube.com/watch?v=UuYCscaDc28">  <img src={img} alt="" className='img-fluid' /></a></div> 
</div>
</div>



   </div>
  )
}

export default Founder;

