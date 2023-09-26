
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../../../../Images/AboutUs/1.jpg";
import img10 from "../../../../../Images/AboutUs/10.jpg";
import img2 from "../../../../../Images/AboutUs/2.jpg";
import img3 from "../../../../../Images/AboutUs/3.jpg";
import img4 from "../../../../../Images/AboutUs/4.jpg";
import img5 from "../../../../../Images/AboutUs/5.jpg";
import img6 from "../../../../../Images/AboutUs/6.jpg";
import img7 from "../../../../../Images/AboutUs/7.jpg";
import img8 from "../../../../../Images/AboutUs/8.jpg";
import img9 from "../../../../../Images/AboutUs/9.jpg";
import "./style.css";

export default function SlideAboutUs() {

  return (
    <>
    <Swiper
      initialSlide={4}
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards ]}
      loop={true}
      
      className="mySwiper"
    >
      <SwiperSlide className='swiperslide '><img className='image' src={img1} /></SwiperSlide>
      <SwiperSlide className='swiperslide '><img className='image' src={img2} /></SwiperSlide>
      <SwiperSlide className='swiperslide '><img className='image' src={img3} /></SwiperSlide>
      <SwiperSlide className='swiperslide '><img className='image' src={img4} /></SwiperSlide>
      <SwiperSlide className='swiperslide '><img className='image' src={img5} /></SwiperSlide>
      <SwiperSlide className='swiperslide '><img className='image' src={img6} /></SwiperSlide>
      <SwiperSlide className='swiperslide '><img className='image' src={img7} /></SwiperSlide>
      <SwiperSlide className='swiperslide '><img className='image' src={img8} /></SwiperSlide>
      <SwiperSlide className='swiperslide '><img className='image' src={img9} /></SwiperSlide>
      <SwiperSlide className='swiperslide '><img className='image' src={img10} /></SwiperSlide>
    </Swiper>
  </>
  )
}


