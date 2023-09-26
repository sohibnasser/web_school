import React, { useState } from 'react';
import theme from '../../../../Design-System/ResableComponant/Config';
import ResableOurPrograms from '../../../../Design-System/ResableComponant/OurPrograms/OurPrograms';
import { Monday, Sunday, Thersday, Tusday, Wenthday } from "../../../../Design-System/ResableComponant/OurPrograms/OurProgramsData";
import { Span, TabImg } from './style';

export default function TabList() {
  const [Tab , SetTab] = useState("Sunday");
  const switchTab =(Tab)=>{
    SetTab(Tab);
  };
  return (
    <>
  
      <div>
        <Span style={{color : Tab === "Sunday" ? theme.active : theme.whiteSmoke , borderBottom : Tab === "Sunday" ? `2px solid ${theme.active}`:"" ,fontWeight : Tab === "Sunday" ? 900 : "" }} onClick={() => switchTab("Sunday")}>Sunday</Span>
        <Span style={{color : Tab === "Monday" ? theme.active : theme.whiteSmoke , borderBottom : Tab === "Monday" ? `2px solid ${theme.active}`:"",fontWeight : Tab === "Monday" ? 900 : ""}} onClick={() => switchTab("Monday")}>Monday</Span>
        <Span style={{color : Tab === "Tusday" ? theme.active : theme.whiteSmoke , borderBottom : Tab === "Tusday" ? `2px solid ${theme.active}`:"",fontWeight : Tab === "Tusday" ? 900 : ""}} onClick={() => switchTab("Tusday")}>Tusday</Span>
        <Span style={{color : Tab === "Wenthday" ? theme.active : theme.whiteSmoke , borderBottom : Tab === "Wenthday" ? `2px solid ${theme.active}`:"",fontWeight : Tab === "Wenthday" ? 900 : ""}} onClick={() => switchTab("Wenthday")}>Wenthday</Span>
        <Span style={{color : Tab === "Thersday" ? theme.active : theme.whiteSmoke , borderBottom : Tab === "Thersday" ? `2px solid ${theme.active}`:"",fontWeight : Tab === "Thersday" ? 900 : ""}} onClick={() => switchTab("Thersday")}>Thersday</Span>
      </div>

        
        
<TabImg>
      {
      Tab === "Monday" ? 
      Monday.map( item => {
          return(
            <ResableOurPrograms course={item.course} Duration={item.Duration} price={item.price} number={item.number} time={item.time} discripion={item.discripion} key={item.id}/>
          );
      }) 
      : Tab === "Tusday" ?
      Tusday.map( item => {
        return(
          <ResableOurPrograms course={item.course} Duration={item.Duration} price={item.price} number={item.number} time={item.time} discripion={item.discripion} key={item.id}/>
        );
      })
      : Tab === "Wenthday" ?
       Wenthday.map( item => {
        return(
          <ResableOurPrograms course={item.course} Duration={item.Duration} price={item.price} number={item.number} time={item.time} discripion={item.discripion} key={item.id}/>
        );
      })
      : Tab === "Thersday" ?
       Thersday.map( item => {
        return(
          <ResableOurPrograms course={item.course} Duration={item.Duration} price={item.price} number={item.number} time={item.time} discripion={item.discripion} key={item.id}/>
        );
      }) 
      :  Sunday.map( item => {
        return(
          <ResableOurPrograms course={item.course} Duration={item.Duration} price={item.price} number={item.number} time={item.time} discripion={item.discripion} key={item.id}/>
        );
      })
    }
    </TabImg>
    </>
  )
}
