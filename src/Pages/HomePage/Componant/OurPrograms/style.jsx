import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";
import ourPrograms from "../../../../Images/ourPrograms/ourPrograms.jpg";

export const OurProgramsWrapper = styled("section") `
    height: 100vh;
    padding-top : 9%;
    text-align: center;
    background : url(${ourPrograms}) fixed;
    background-size : cover ;
    background-repeat : no-repeat ;
    overflow: hidden;


@media screen and (min-width:727px) and (max-width:768px) {
    padding-top : 15%;

}

@media screen and (min-width:427px) and (max-width:726px) {
    padding-top : 13%;
    height: 145vh;
}

@media screen and (min-width:321px) and (max-width:426px) {
    padding-top : 22%;
    height: 190vh;
}

@media screen and (max-width:320px) {
    padding-top: 30%;
    height: 190vh;
}

`;

export const Our = styled("h3") `
    color :${theme.whiteSmoke};
    font-weight : bold;
    
@media screen and (max-width:320px) {
    font-size : 1.1rem ;
    width: 100%;
}
`;

export const Programs = styled("span") `
    color :${theme.Tab}
`;

export const P = styled("p") `
    font-size: 1rem ;
    color :${theme.whiteSmoke} ;

@media screen and (min-width:321px) and (max-width:426px) {
   font-size: .9rem ;
}

@media screen and (max-width:320px) {
   font-size: .8rem ;
}
`;


export const TabsWrapper = styled("div")`   
    padding: 3rem auto;
    height: 3rem;
    width: 100%;
`;

export const TabListWraper = styled("div")`   
    height : 100% ;
    width : 60% ;
    padding-top : 7px ;
    background-color : ${theme.gray} ;
    margin : auto ;
    border-radius : 8px ;
    display: flex;
    gap: 1rem;
   
@media screen and (min-width:769px) and (max-width:1024px) {
    width : 72% ;
}
   
@media screen and (min-width:427px) and (max-width:768px) {
    width : 95% ;
}
   
@media screen and (min-width:321px) and (max-width:426px) {
    width : 100% ;
    gap: .2rem;
}
   
@media screen and (max-width:320px) {
    width : 100% ;
    gap: .2rem;
}
`;


export const Span = styled("span")`   
    font-size: 16px;
    margin:auto;
    padding-bottom : 15px;
    cursor: pointer;

@media screen and (min-width:321px) and (max-width:426px) {
    font-size: 14px;
}

@media screen and (max-width:320px) {
    font-size: 13px;
}
`;


export const TabImg = styled("div")`   
   margin-top : 3rem ;
`;

