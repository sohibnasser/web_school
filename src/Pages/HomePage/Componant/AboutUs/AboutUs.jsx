
import SlideAboutUs from "./SlideAboutUs/SlideAboutUs";
import { AboutUswrapper, Data, H2, P, SlideAboutUsWrapper } from "./style";

export default function AboutUs() {
  
  return (
    <div className="container">

      <AboutUswrapper data-aos="fade-up"  data-aos-delay="200" data-aos-duration="500">

          <Data>
            <H2>Why Chose Web School ?</H2>
            <P>We have the best trainers to help you master programming languages to get a job in a short time
                The best platform for university students, as we provide courses in all specializations with high professionalism
                Master programming in various fields through WebSchool professional courses and camps to obtain excellent income and career opportunities around the world
                Subscribe to the WebSchool platform now and learn the latest programming languages in Arabic with the highest quality
                Subscription packages are designed to suit you ... Subscribe now and do not hesitate , You can cancel or change your subscription at any time
            </P>
         
          </Data>

          <SlideAboutUsWrapper>

              <SlideAboutUs />
  
          </SlideAboutUsWrapper>
        
      </AboutUswrapper>
    </div>
  );
}




