import styled from "@emotion/styled";
import 'animate.css';
import theme from "../../../../Design-System/ResableComponant/Config";
import WatchVideo from "../../../../Images/Watch/WatchVideo.jpg";


export const WatchVideoWrapper = styled("section")`
    height: 100vh;
    padding : 11rem 0 ;
    background : url(${WatchVideo}) fixed ;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;


@media screen and (min-width:769px) and (max-width:1024px) {
    padding : 7rem 0 ;
    height: 85vh;
}

@media screen and (min-width:427px) and (max-width:768px) {
    padding-top : 5rem;
    height: 115vh;
}

@media screen and (min-width:321px) and (max-width:426px) {
    padding : 4rem 0 ;
    height: 125vh;
}

@media screen and (max-width:320px) {
    padding-top : 4rem ;
    height: 40rem;
}
`;


export const WatchVideoContent = styled("div")`
    display : flex ;
    gap : 3rem ;

@media screen and (min-width:769px) and (max-width:1024px) {
    gap :2rem ;
}

@media screen and (min-width:427px) and (max-width:768px) {
    display: block;
}

@media screen and (min-width:321px) and (max-width:426px) {
    display: block; 
}

@media screen and (max-width:320px) {
    display: block;
}
`;


export const Info = styled("div")`
    width: 55%;

@media screen and (min-width:769px) and (max-width:1024px) {
    width: 60%;  
}

@media screen and (min-width:427px) and (max-width:768px) {
    width: 90%;   
    margin: auto;
    text-align: center;
}

@media screen and (min-width:321px) and (max-width:426px) {
    text-align: center;
    margin: 0 auto;
    width: 100%;
}

@media screen and (max-width:320px) {
    text-align: center;
    width: 100%;
}
`;

export const WATCH = styled("h3")`
    color : ${theme.whiteSmoke} ;
    font-weight : bold;


@media screen and (min-width:427px) and (max-width:768px) {
    font-size: 1.5rem;  
}

@media screen and (min-width:321px) and (max-width:426px) {
    font-size :1.2rem ;  
}

@media screen and (max-width:320px) {
    font-size: 1.1rem;
}
`;

export const Video = styled("span")`
    color : ${theme.Tab};

@media screen and (min-width:427px) and (max-width:768px) {
    font-size: 1.5rem;  
}

@media screen and (min-width:321px) and (max-width:426px) {
    font-size :1.2rem ;
}

@media screen and (max-width:320px) {
    font-size: 1.1rem;
}
`;

export const P = styled("p")`
    font-size : 1.1rem ;
    color : ${theme.whiteSmoke};
    line-height: 1.4rem;
    
@media screen and (min-width:427px) and (max-width:768px) {
    font-size: 1rem; 
}

@media screen and (min-width:321px) and (max-width:426px) {
    font-size :.9rem ;
}

@media screen and (max-width:320px) {
    font-size: .8rem;
}
`;


export const WatchingVideo = styled("div")`
    width: 45%;

@media screen and (min-width:769px) and (max-width:1024px) {
    width: 50%;
}

@media screen and (min-width:427px) and (max-width:768px) {
    width: 64%; 
    margin: auto;
    padding-top: 2rem;
}

@media screen and (min-width:321px) and (max-width:426px) {
    padding-top : 3rem ;
    width: 100%; 
}

@media screen and (max-width:320px) {
    width: 100%;
    float: none;
    padding-top : 1rem ;
    margin: 0;
}
`;


export const Iframee = styled("iframe") `
   width: 100%;
   border-radius: 1rem;

@media screen and (min-width:769px) and (max-width:1024px) {
    height: 80%;
    margin-top: 1.5rem;
}

@media screen and (min-width:427px) and (max-width:768px) {
    height: 15rem;
    width: 100%; 
}

@media screen and (min-width:321px) and (max-width:426px) {
    height: 13rem;
    width: 100%;
}

@media screen and (max-width:320px) {
    height: 10rem;
    width: 100%;
}
`;
