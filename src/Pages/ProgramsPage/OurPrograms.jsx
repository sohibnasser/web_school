import React from 'react';
import { Helmet } from "react-helmet-async";
import Navbar from '../HomePage/Componant/Navbar/Navbar';
import Programs from '../HomePage/Componant/OurPrograms/OurPrograms';
import Overview from '../HomePage/Componant/Overview/Overview';

export default function OurPrograms() {
  return (
    <>

      <Helmet>
        <title>OurPrograms</title>
        <meta name="description" content="with us , you will learn more" />
        {/* <link rel="canonical" href="/" /> */}
      </Helmet>


      <Navbar />
      <Overview />
      <Programs />
    </>
  )
}
