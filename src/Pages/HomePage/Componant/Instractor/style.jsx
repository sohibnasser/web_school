import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";
import instractor from "../../../../Images/Instractor/Instractor.jpg";

export const CreativeInstractorWrapper = styled("section")`
    height: 100%;
    padding: 5rem 0;
    text-align: center;
    background : url(${instractor}) fixed;
    background-size : cover ;
    background-repeat : no-repeat ;
    
`;

export const Creative = styled("h3")`
    color :${theme.whiteSmoke};
    font-weight : bold
`;

export const InstrActor = styled("span")`
    color :${theme.Tab}
`;

export const P = styled("p")` 
    padding-bottom : 2rem ;
    font-size: 1rem ;
    font-weight: bold;
    color :${theme.whiteSmoke}
`;


