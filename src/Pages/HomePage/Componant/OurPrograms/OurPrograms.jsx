import { Container } from '@mui/material'
import React from 'react'
import TabList from './TabList'
import { Our, OurProgramsWrapper, P, Programs, TabsWrapper } from './style'

export default function OurPrograms() {
  return (
    <OurProgramsWrapper>
      <Container>
      <div data-aos="fade-up"  data-aos-delay="200" data-aos-duration="500">
         <Our className="wow animate__animated animate__fadeInDown animate__slower	2s">Our<Programs> Programs</Programs></Our>
         <P>With Us, You Will Learn Alot, We Have The Best Instractor For a Better Education</P>

      <TabsWrapper>
        <TabList />
      </TabsWrapper>
    
      </div>
      </Container>
    </OurProgramsWrapper>
  )
}
