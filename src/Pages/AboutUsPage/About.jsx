import { Helmet } from "react-helmet-async";
import AboutUs from "../HomePage/Componant/AboutUs/AboutUs";
import SlideAboutUs from "../HomePage/Componant/AboutUs/SlideAboutUs/SlideAboutUs";
import Navbar from "../HomePage/Componant/Navbar/Navbar";
import Overview from "../HomePage/Componant/Overview/Overview";

export default function About() {
  return (
    <>
    <Helmet>
      <title>AboutUs</title>
      <meta name="description" content="details about the website" />
      {/* <link rel="canonical" href="/" /> */}
    </Helmet>

      <Navbar />

      <AboutUs>
        <SlideAboutUs />
      </AboutUs>
      
      <Overview />
      
    </>
  )
}
