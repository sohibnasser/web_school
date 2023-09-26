import React from 'react';
import { Helmet } from "react-helmet-async";
import Contact from "../HomePage/Componant/Footer/Footer";
import Navbar from '../HomePage/Componant/Navbar/Navbar';

export default function ContactUs() {
  return (
    <>
    <Helmet>
      <title>ContactUs</title>
      <meta name="description" content="contact us any time" />
      {/* <link rel="canonical" href="/" /> */}
    </Helmet>

        <Navbar />
        <Contact />
    </>
  )
}
