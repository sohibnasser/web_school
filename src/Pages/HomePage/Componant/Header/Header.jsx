import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Photo from "../../../../Images/Header/HeaderPhoto.jpg";
import { Content, Div, HeaderWrapper, Image, Img, Program1, Program2 } from "./style";

export default function Header() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const pVariants = {
    hidden : {
      opacity : 0 ,
    },
    visible :{
      opacity : 1 ,
      transition :{
        staggerChildren : .1 ,
      }
    },
  };

  const spanVariants = {
    hidden : {
      opacity : 0 ,
      
    },
    visible :{
      opacity : 1 ,
      
    },
  };

  const text = "The first Arab source for learning programming professionally";
  const [texts] = useState([
    "Master programming in various fields through WebSchool professional courses and camps to obtain excellent income and career opportunities around the world .",
    "The best platform for university students, as we provide courses in all specializations with high professionalism .",
    "We have the best trainers to help you master programming languages to get a job in a short time .",
    "Subscribe to the WebSchool platform now and learn the latest programming languages in Arabic with the highest quality .",
    "Subscription packages are designed to suit you ... Subscribe now and do not hesitate , You can cancel or change your subscription at any time .",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [texts]);

  return (
    <HeaderWrapper>
       
      <Program1>
        <Div data-aos="fade-right"
      data-aos-delay="3000"
      data-aos-duration="750">FrontEnd</Div>

        <Div data-aos="fade-right"
      data-aos-delay="2000"
      data-aos-duration="750">BackEnd</Div>

        <Div data-aos="fade-right"
      data-aos-delay="1200"
      data-aos-duration="750">FullStack</Div>

        <Div data-aos="fade-right"
      data-aos-delay="500"
      data-aos-duration="750">Android</Div>
      </Program1>

      <Image>
      <Img className="Image"  src={Photo} />
      </Image>


      <Content>
     
      <motion.p style={{ fontSize : "1.5rem" , width : "100%" , color : "#6153BD" , lineHeight : "1.5rem"}}
              
              variants={pVariants}
              initial = "hidden"
              animate = "visible">
                  {text.split("").map((char,index)=>(
              <motion.span variants={spanVariants} key={index}>{char}</motion.span>
            ))}
            
            </motion.p>
      


    <div>
          <motion.div style={{ color : "#9c9797f5" , lineHeight : "1.5rem"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            
            {texts[currentIndex]}
          </motion.div>
    </div>
      </Content>








    <Program2>

    <Div data-aos="fade-left"
      data-aos-delay="3000"
      data-aos-duration="750">Paython</Div>

    <Div data-aos="fade-left"
      data-aos-delay="2000"
      data-aos-duration="750">Flater</Div>

    <Div data-aos="fade-left"
      data-aos-delay="1200"
      data-aos-duration="750">Kotlin</Div>

    <Div data-aos="fade-left"
      data-aos-delay="500"
      data-aos-duration="750">Larevel</Div>
      
    </Program2>

    </HeaderWrapper>
  )
}


