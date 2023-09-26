import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Watch from "../../../../Images/Watch/Watch.mp4";
import { P, Video, WATCH, WatchVideoContent, WatchVideoWrapper } from './style';
export default function WatchVideo() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <WatchVideoWrapper>
     
        <div className="container">
     
          <WatchVideoContent  data-aos="fade-up"  data-aos-delay="250" data-aos-duration="500">

            <div>
                <WATCH>
                Watch <Video>Video</Video>
                </WATCH>
                <P>We have the best trainers to help you master programming languages to get a job in a short time
                The best platform for university students, as we provide courses in all specializations with high professionalism
                Master programming in various fields through WebSchool professional courses and camps to obtain excellent income and career opportunities around the world
                </P>
                     
                <P>Subscribe to the WebSchool platform now and learn the latest programming languages in Arabic with the highest quality
                Subscription packages are designed to suit you ... Subscribe now and do not hesitate , You can cancel or change your subscription at any time
                </P>
             
            </div>

            <div>
              <iframe allow="autoplay = 0" height="250" width="450" src={Watch} frameborder="0" title="WatchingVideo" />
            </div>
          
            
          </WatchVideoContent>
        </div>
        
    </WatchVideoWrapper>
  )
}
