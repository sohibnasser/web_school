import React from 'react';
import { Helmet } from "react-helmet-async";
import Instractor from '../HomePage/Componant/Instractor/Instractor';
import Navbar from '../HomePage/Componant/Navbar/Navbar';
// import Overview from '../HomePage/Componant/Overview/Overview';

export default function OurInstractor() {
  return (
    <>
      <Helmet>
        <title>OurInstractor</title>
        <meta name="description" content="we have the best instractor in the country" />
        {/* <link rel="canonical" href="/" /> */}
      </Helmet>


      <Navbar />
      {/* <Overview /> */}
      <Instractor />
    </>
  )
}
