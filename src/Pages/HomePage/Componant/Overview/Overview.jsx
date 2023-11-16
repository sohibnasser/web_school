import { faChalkboardTeacher, faCode, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Description, FirstTitle, Icon, OverviewContainer, OverviewWrapper, SecoundTitle, ThirdTitle, Wrapper } from './style';

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
    <Container>
            <OverviewContainer data-aos="fade-up"  data-aos-delay="200" data-aos-duration="500">
              
            <Wrapper>
                  <Icon><FontAwesomeIcon color="#6153BD" icon={faChalkboardTeacher}/></Icon>

                  <ScrollTrigger onEnter={()=> setCounterOn1(true)} onExit={()=> setCounterOn1(false)}>

                  <FirstTitle>
                      +
                      {counterOn1 && <CountUp start={0} end={20} duration={5} />} <span>Instractor</span>
                  </FirstTitle>

                  </ScrollTrigger>

                  <Description>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua consectetur adipisicing incididunt eiusmod tempor </Description>
            </Wrapper>


            <Wrapper>
                  <Icon><FontAwesomeIcon color="#6153BD" icon={faCode}/></Icon>
                  <ScrollTrigger onEnter={()=> setCounterOn2(true)} onExit={()=> setCounterOn2(false)}>

                          <SecoundTitle>
                            +
                            {counterOn2 && <CountUp start={0} end={30} duration={5} />} <span>Language</span>

                          </SecoundTitle>

                  </ScrollTrigger>
                  <Description>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua consectetur adipisicing incididunt eiusmod tempor </Description>
            </Wrapper>

            
            <Wrapper>
                  <Icon><FontAwesomeIcon color="#6153BD" icon={faUserGraduate}/></Icon>
                  <ScrollTrigger onEnter={()=> setCounterOn3(true)} onExit={()=> setCounterOn3(false)}>

                        <ThirdTitle>
                          +
                          {counterOn3 && <CountUp start={0} end={100} duration={5} />} <span>Student</span>
                          
                        </ThirdTitle>

                  </ScrollTrigger>
                  <Description>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua consectetur adipisicing incididunt eiusmod tempor </Description>
            </Wrapper>
                

              </OverviewContainer>

        </Container>
    </OverviewWrapper>
  )
}


