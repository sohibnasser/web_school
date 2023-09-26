import React from 'react';
import { Helmet } from "react-helmet-async";
import Navbar from '../HomePage/Componant/Navbar/Navbar';
import WatchVideoo from "../HomePage/Componant/WatchVideo/WatchVideo";

export default function WatchVideo() {
  return (
    <>

      <Helmet>
        <title>WatchVideo</title>
        <meta name="description" content="in the video , you will know information about the company" />
        {/* <link rel="canonical" href="/" /> */}
      </Helmet>


        <Navbar />
        <WatchVideoo />
    </>
  )
}
