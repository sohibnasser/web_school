import React from 'react';
import { Helmet } from "react-helmet-async";
import Navbar from '../HomePage/Componant/Navbar/Navbar';
import Overview from '../HomePage/Componant/Overview/Overview';
import Register from "../HomePage/Componant/RegisterHere/RegisterHere";

export default function RegisterHere() {
  return (
    <>

      <Helmet>
        <title>RegisterHere</title>
        <meta name="description" content="RegisterHere Now" />
        {/* <link rel="canonical" href="/" /> */}
      </Helmet>


        <Navbar />
        <Overview />
        <Register />
    </>
  )
}
