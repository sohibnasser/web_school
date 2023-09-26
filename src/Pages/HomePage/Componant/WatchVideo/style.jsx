import styled from "@emotion/styled";
import 'animate.css';
import theme from "../../../../Design-System/ResableComponant/Config";
import WatchVideo from "../../../../Images/Watch/WatchVideo.avif";


export const WatchVideoWrapper = styled("section")`
    padding :11rem 0 ;
    background : url(${WatchVideo}) fixed ;
    background-size : cover ;
    background-repeat : no-repeat ;
    height: 100%;
`;

export const WatchVideoContent = styled("div")`
    display : flex ;
    gap : 3rem ;
`;
export const WATCH = styled("span")`
    color : ${theme.whiteSmoke} ;
    font-size : 1.8rem ;
    font-weight : bold ;
    display: inline-block;
`;

export const Video = styled("span")`
    color : ${theme.Tab};
`;

export const P = styled("p")`
    font-size : 1rem ;
    color : ${theme.whiteSmoke};
`;


