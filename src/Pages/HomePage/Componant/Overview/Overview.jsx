import { faChalkboardTeacher, faCode, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Description, FirstTitle, OverviewContainer, OverviewWrapper, SecoundTitle, ThirdTitle, Titel, Wrapper } from './style';

export default function Overview() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [counterOn1 , setCounterOn1] = useState(false) ;
  const [counterOn2 , setCounterOn2] = useState(false) ;
  const [counterOn3 , setCounterOn3] = useState(false) ;

  return (
    <OverviewWrapper>
        <div className="container">

            <OverviewContainer data-aos="fade-up"  data-aos-delay="200" data-aos-duration="500">
              
            <Wrapper>
                  <div><FontAwesomeIcon size="3x" color="#6153BD" icon={faChalkboardTeacher}/></div>

                  <ScrollTrigger onEnter={()=> setCounterOn1(true)} onExit={()=> setCounterOn1(false)}>

                  <FirstTitle>
                      +
                      {counterOn1 && <CountUp start={0} end={20} duration={5} />} <Titel>Instractor</Titel>
                  </FirstTitle>

                  </ScrollTrigger>

                  <Description>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua consectetur adipisicing incididunt eiusmod tempor </Description>
            </Wrapper>


            <Wrapper>
                  <div><FontAwesomeIcon size="3x" color="#6153BD" icon={faCode}/></div>
                  <ScrollTrigger onEnter={()=> setCounterOn2(true)} onExit={()=> setCounterOn2(false)}>

                          <SecoundTitle>
                            +
                            {counterOn2 && <CountUp start={0} end={30} duration={5} />} <Titel>Language</Titel>

                          </SecoundTitle>

                  </ScrollTrigger>
                  <Description>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua consectetur adipisicing incididunt eiusmod tempor </Description>
            </Wrapper>

            
            <Wrapper>
                  <div><FontAwesomeIcon size="3x" color="#6153BD" icon={faUserGraduate}/></div>
                  <ScrollTrigger onEnter={()=> setCounterOn3(true)} onExit={()=> setCounterOn3(false)}>

                        <ThirdTitle>
                          +
                          {counterOn3 && <CountUp start={0} end={100} duration={5} />} <Titel>Student</Titel>
                          
                        </ThirdTitle>

                  </ScrollTrigger>
                  <Description>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua consectetur adipisicing incididunt eiusmod tempor </Description>
            </Wrapper>
                

              </OverviewContainer>

        </div>
    </OverviewWrapper>
  )
}


