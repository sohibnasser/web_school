

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Design-System/main.css';
import AboutUs from "./Pages/AboutUsPage/About";
import Contact from './Pages/ContactUsPage/ContactUs';
import Home from "./Pages/HomePage/Home";
import OurInstractor from "./Pages/InstractorPage/OurInstractor";
import OurPrograms from "./Pages/ProgramsPage/OurPrograms";
import RegisterHere from "./Pages/RegisterHerePage/RegisterHere";
import WatchVideo from "./Pages/WatchVideoPage/WatchVideo";

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/AboutUs' element={<AboutUs />} />
       <Route path='/WatchVideo' element={<WatchVideo />} />
       <Route path='/OurInstractor' element={<OurInstractor />} />
       <Route path='/OurPrograms' element={<OurPrograms />} />
       <Route path='/RegisterHere' element={<RegisterHere />} />
       <Route path='/ContactUs' element={<Contact />} />
    </Routes> 
    </BrowserRouter>
  ); 
}

export default App;
