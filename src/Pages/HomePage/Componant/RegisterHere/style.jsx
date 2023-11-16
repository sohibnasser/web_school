import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";

export const  RegisterHereWrapper = styled("section")`
    width: 100%;
    padding : 10% 0  20% 0;
    display : flex ;
    align-items :flex-start;
    position: relative; 

@media screen and (min-width:427px) and (max-width:650px) {
    display: block;
    height: 50rem;
}

@media screen and (min-width:321px) and (max-width:426px) {
    display: block;
    height: 50rem;
}

@media screen and (max-width:320px) {
    display: block;
    height: 45rem;
}
`;

export const Header = styled("div")`
    width : 50% ;
    padding-top : 7rem ; 

@media screen and (min-width:769px) and (max-width:1024px) {
    width : 40% ;
    margin-top: 1rem;
}

@media screen and (min-width:651px) and (max-width:768px) {
    width : 40% ;
}

@media screen and (min-width:427px) and (max-width:650px) {
    width : 90% ;
    padding-top : 8% ; 
    margin: auto;
    text-align: center;
}
   
@media screen and (min-width:321px) and (max-width:426px) {
    width : 90% ;
    padding-top : 10% ; 
    margin: auto;
    text-align: center;
}
   
@media screen and (max-width:320px) {
    width : 90% ;
    padding-top : 15% ; 
    margin: auto;
    text-align: center;
}
`;

export const Register = styled("h3")`
    color: ${theme.FormColor};
    font-weight :bold;
    display: flex;
    gap: 6px;

@media screen  and (max-width:650px) {
    justify-content: center;
}

@media screen  and (max-width:320px) {
    font-size : 1.1rem ;
}
`;

export const  Here = styled("span")`
    color : ${theme.primary};
    font-weight :bold;
`;

export const P = styled("p")`
    width :85%;
    font-size: 1rem ;
    font-weight: bold;
    color : ${theme.gray};

@media screen and (max-width:768px) {
    width : 100% ;
}

@media screen and (max-width:320px) {
    font-size: .8rem;
}
`;


export const  Form = styled("div")`
    width: 42%;
    border-radius: 0.75rem;
    background-color: ${theme.black};
    padding: 2rem;
    color: ${theme.white};
    position: absolute;
    right: 0;

   
@media screen and (min-width:769px) and (max-width:1024px) {
    width : 50% ;
    margin-top: 1rem;
}
   
@media screen and (min-width:651px) and (max-width:768px) {
    width : 55% ;
    margin-top: 1rem;
}
   
@media screen and (min-width:427px) and (max-width:650px) {
    width : 90% ;
    margin-top: 2rem;
    right: 5%;
}
   
@media screen and (min-width:321px) and (max-width:426px) {
    width : 90% ;
    margin-top: 2rem;
    right: 5%;
}
   
@media screen and (max-width:320px) {
    width : 90% ;
    margin-top: 2rem;
    right: 5%;
}
`;

export const  Title = styled("p")`
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    color: ${theme.whiteSmoke}
`;


