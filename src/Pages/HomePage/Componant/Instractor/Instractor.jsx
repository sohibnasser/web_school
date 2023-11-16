

import { Container } from "@mui/material";
import Slider from "./Slider/Slider";
import { Creative, CreativeInstractorWrapper, InstrActor, P } from "./style";

export default function Instractor() {

  return (
    <CreativeInstractorWrapper>
      <Container>
      <div data-aos="fade-up"  data-aos-delay="200" data-aos-duration="500">
   
         <Creative className="wow animate__animated animate__fadeInUp animate__slower	1s">Creative <InstrActor> Instractor</InstrActor> </Creative>
         <P>With Us, You Will Learn Alot, We Have The Best Instractor For a Better Education</P>
         
        <Slider />
         
      </div>
      </Container>
    </CreativeInstractorWrapper>
  )
}

