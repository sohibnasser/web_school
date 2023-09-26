import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import InstractorData from "../../../../../Design-System/ResableComponant/SlideInstractor/InstractorData";
import SlideInstractor from "../../../../../Design-System/ResableComponant/SlideInstractor/SlideInstractor";

export default function Slider(){

  return (
    <div className="container">  
    

   

    <Swiper style={{ width : 900 , paddingBottom : 80 }} 
        effect = {"coverflow"}
        grabCursor = {true}
        centeredSlides = {true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        coverflowEffect={{
          rotate : 0 ,
          stretch : 0 ,
          depth : 100 ,
          modifier : 2.5 
        }}

        pagination = {{ el : '.swiper-pagination', clickable : true }}
        navigation = {{

          nextEl : '.swiper-button-next' ,
          prevEl : '.swiper-button-prev',
          clickable : true ,

        }}
        modules={[Autoplay , EffectCoverflow , Pagination  , Navigation]}
        className='swiper_container'
      >
        {InstractorData.map( item => {

            return(
              <SwiperSlide style={{ height : 370 }}> 

              <SlideInstractor img={item.img} alt={item.alt} name={item.name} job={item.job} key={item.id}/>
              </SwiperSlide>
            )
        })}
         
        <div className="slider-controler">
              <div style={{color : "white"}} className="swiper-button-prev slider-arrow">
                  <FontAwesomeIcon name='arrow-back-outline'/>
              </div>

              <div style={{color : "white"}} className="swiper-button-next slider-arrow">
                  <FontAwesomeIcon name='arrow-forward-outline'/>
              </div>
             
              <div  className="swiper-pagination"></div>
        </div>
      </Swiper>
     
   
    </div>
   
  );
};


