import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";
import ourPrograms from "../../../../Images/ourPrograms/ourPrograms.avif";

export const OurProgramsWrapper = styled("section") `
    padding: 3rem 0;
    text-align: center;
    background : url(${ourPrograms}) fixed 50%;
    background-size : cover ;
    background-repeat : no-repeat ;
    height: 110vh;
`;

export const Our = styled("h3") `
    color :${theme.whiteSmoke};
    font-weight : bold;
`;

export const Programs = styled("span") `
    color :${theme.Tab}
`;

export const P = styled("p") `
    font-size: 1rem ;
    font-weight: bold ;
    color :${theme.whiteSmoke}
`;


export const TabsWrapper = styled("div")`   
    padding-top: 1rem;
    margin: auto;
    
`;


export const Span = styled("span")`   
    font-weight: bold;
    padding:auto;
    padding-bottom : 18.8px;
    margin: 2rem;
    cursor: pointer;
`;


export const TabImg = styled("div")`   
   margin-top : 3rem ;
`;





