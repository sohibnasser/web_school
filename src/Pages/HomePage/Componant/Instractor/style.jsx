import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";
import instractor from "../../../../Images/Instractor/Instractor.jpg";

export const CreativeInstractorWrapper = styled("section")`
    height: 135vh;
    padding: 5rem 0;
    text-align: center;
    background : url(${instractor}) fixed;
    background-size : cover ;
    background-repeat : no-repeat ;
    overflow: hidden;
    
`;



export const Creative = styled("h3")`
    color :${theme.whiteSmoke};
    font-weight : bold ;

@media screen and (max-width:320px) {
    font-size : 1.1rem ;
    width: 100%;
}
`;

export const InstrActor = styled("span")`
    color :${theme.Tab}
`;



export const P = styled("p")` 
    padding-bottom : 2rem ;
    font-size: 1rem ;
    color :${theme.whiteSmoke} ;

@media screen and (max-width:320px) {
    width: 100%;
    font-size : .8rem ;
    padding-bottom : .8rem ;
}
`;


