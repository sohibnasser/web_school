import React from 'react'
import { Img, InstractorWrapper } from './style'

export default function SlideInstractor({img , alt , name , job}) {
  return (
    <InstractorWrapper>
      <Img src={img} alt={alt}/>
      <h2>{name}</h2>
      <span>{job}</span>
    </InstractorWrapper>
  )
}
