import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FontAwesomeWrapper, OurProgramsWrapper } from './style'
export default function ResableOurPrograms({course , time , number , Duration , price , discripion}) {
  return (
    <OurProgramsWrapper>  
    

    <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
            <h2>{course}</h2>
            </div>
            <div class="backSide">
            <FontAwesomeWrapper>
                  <div>
                  <FontAwesomeIcon icon={faClock} /> <span>{time}</span>
                  </div>
                  <div>
                  <FontAwesomeIcon icon={faMapMarker} /> <span>Room {number}</span>
                  </div>
              </FontAwesomeWrapper>
              <span>{Duration}</span>
              <span>{price}</span>
              <p>{discripion}</p>
            </div>
        </div>
    </div>

    
    </OurProgramsWrapper>
  )
}
