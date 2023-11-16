import { Helmet } from "react-helmet-async";
import AboutUs from "./Componant/AboutUs/AboutUs";
import Footer from "./Componant/Footer/Footer";
import Header from "./Componant/Header/Header";
import Instractor from "./Componant/Instractor/Instractor";
import NavbarComponant from "./Componant/Navbar/Navbar";
import OurPrograms from "./Componant/OurPrograms/OurPrograms";
import Overview from "./Componant/Overview/Overview";
import RegisterHere from "./Componant/RegisterHere/RegisterHere";
import WatchVideo from "./Componant/WatchVideo/WatchVideo";

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Home Page" />
      {/* <link rel="canonical" href="/" /> */}
    </Helmet>
      
        <NavbarComponant />
        <Header />
        <AboutUs />
        <Overview />
        <WatchVideo />
        <Instractor />
        <OurPrograms />
        <RegisterHere />
        <Footer />
    </>
  )
}

