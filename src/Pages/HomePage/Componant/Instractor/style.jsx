import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";
import instractor from "../../../../Images/Instractor/Instractor.jpg";

export const CreativeInstractorWrapper = styled("section")`
    height: 125vh;
    padding-top : 9%;
    display: flex;
    text-align: center;
    align-items: center;
    background : url(${instractor}) fixed;
    background-size : cover ;
    background-repeat : no-repeat ;
    overflow: hidden;

@media screen and (min-width:769px) and (max-width:1024px) {
    padding-top : 14%;

}

@media screen and (min-width:427px) and (max-width:768px) {
    padding-top : 20%;
    height: 128vh;
}

@media screen and (min-width:321px) and (max-width:426px) {
    padding-top : 30%;
    height: 125vh;
}

@media screen and (max-width:320px) {
    padding-top : 30%;
    height: 118vh;
}
    
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


