
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards } from 'swiper/modules';
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
import { Wrapper } from '../style';
import "./style.css";

export default function SlideAboutUs() {

  return (
    <Wrapper>


<Swiper
// initialSlide={1}
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      loop={true}
      
      className="mySwiper1"
    >
      <SwiperSlide className='swiperslide1 '><img  className='image1' src={img1} alt='img1'/></SwiperSlide>
      <SwiperSlide className='swiperslide1 '><img  className='image1' src={img2} alt='img2' /></SwiperSlide>
      <SwiperSlide className='swiperslide1 '><img  className='image1' src={img3} alt='img3' /></SwiperSlide>
      <SwiperSlide className='swiperslide1 '><img  className='image1' src={img4} alt='img4' /></SwiperSlide>
      <SwiperSlide className='swiperslide1 '><img  className='image1' src={img5} alt='img5' /></SwiperSlide>
      <SwiperSlide className='swiperslide1 '><img  className='image1' src={img6} alt='img6' /></SwiperSlide>
      <SwiperSlide className='swiperslide1 '><img  className='image1' src={img7} alt='img7' /></SwiperSlide>
      <SwiperSlide className='swiperslide1 '><img  className='image1' src={img8} alt='img8' /></SwiperSlide>
      <SwiperSlide className='swiperslide1 '><img  className='image1' src={img9} alt='img9' /></SwiperSlide>
      <SwiperSlide className='swiperslide1 '><img  className='image1' src={img10} alt='img10' /></SwiperSlide>
    </Swiper>



    <Swiper
    initialSlide={7}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay:2500,
          disableOnInteraction:false
        }}
    
      modules={[Autoplay]}
      loop={true}
      
      className="mySwiper2"
    >
      <SwiperSlide className='swiperslide2 '><img  className='image2' src={img1} alt='img1'/></SwiperSlide>
      <SwiperSlide className='swiperslide2 '><img  className='image2' src={img2} alt='img2' /></SwiperSlide>
      <SwiperSlide className='swiperslide2 '><img  className='image2' src={img3} alt='img3' /></SwiperSlide>
      <SwiperSlide className='swiperslide2 '><img  className='image2' src={img4} alt='img4' /></SwiperSlide>
      <SwiperSlide className='swiperslide2 '><img  className='image2' src={img5} alt='img5' /></SwiperSlide>
      <SwiperSlide className='swiperslide2 '><img  className='image2' src={img6} alt='img6' /></SwiperSlide>
      <SwiperSlide className='swiperslide2 '><img  className='image2' src={img7} alt='img7' /></SwiperSlide>
      <SwiperSlide className='swiperslide2 '><img  className='image2' src={img8} alt='img8' /></SwiperSlide>
      <SwiperSlide className='swiperslide2 '><img  className='image2' src={img9} alt='img9' /></SwiperSlide>
      <SwiperSlide className='swiperslide2 '><img  className='image2' src={img10} alt='img10' /></SwiperSlide>
    </Swiper>


  </Wrapper>
  )
}

