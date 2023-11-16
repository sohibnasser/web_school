import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";

export const OverviewWrapper = styled("section")`
  padding-bottom : 5rem ;
  display: flex;
 

@media screen and (min-width:769px) and (max-width:1024px) {
    padding : 2rem 0 3rem 0;
}

@media screen and (min-width:427px) and (max-width:768px) {
    padding : 1rem 0 3rem 0;
}

@media screen and (min-width:321px) and (max-width:426px) {
    padding : 6rem 0 3rem 0;
}

@media screen and (max-width:320px) {
    padding : 0 0 3rem 0;
}
`;



export const OverviewContainer = styled("section")`
  display : flex ;
  gap: 2.5rem;
align-items: center;
  
@media screen and (min-width:769px) and (max-width:1024px) {  
    gap: 2rem;
}

@media screen and (min-width:427px) and (max-width:768px) {
    gap: 1.2rem;
  
}

@media screen and (min-width:321px) and (max-width:426px) {
    display: block;
}

@media screen and (max-width:320px) {
    display: block;
}
`;


export const Wrapper =styled('div')`
    width: 100%;
    text-align :center;
    margin: auto;

@media screen and (min-width:769px) and (max-width:1024px) {
    width: 100%;
    margin: auto;
}

@media screen and (min-width:427px) and (max-width:768px) {
    width: 100%;
    margin: auto;
}

@media screen and (min-width:376px) and (max-width:426px) {
    width: 88%;
    padding-bottom : 2rem ;
    margin: auto;
}

@media screen and (min-width:321px) and (max-width:375px) {
    width: 80%;
    padding-bottom : 2rem ;
    margin: auto;
}

@media screen and (max-width:320px) {
    width: 90%;
    padding-bottom : 2rem ;
    margin: auto;
}
`;


export const Icon =styled('div')`
    font-size: 3rem;
    text-align: center;

@media screen and (min-width:769px) and (max-width:1024px) {
    font-size: 2.5rem;
    margin-left: -12%;
}

@media screen and (min-width:427px) and (max-width:768px) {
    font-size: 2.5rem;
    
}

@media screen and (min-width:321px) and (max-width:426px) {
    font-size: 2.5rem;
}

@media screen and (max-width:320px) {
    font-size: 2.2rem;
}
`;


export const FirstTitle =styled('h2')`
  
    color : ${theme.FormColor} ;
    text-align: center;
    

@media screen and (min-width:769px) and (max-width:1024px) {
    font-size: 1.4rem;
    margin-left: -12%;
}

@media screen and (min-width:427px) and (max-width:768px) {
    font-size: 1.3rem;
}

@media screen and (min-width:321px) and (max-width:426px) {
    font-size: 1.6rem;
}

@media screen and (max-width:320px) {
    font-size: 1.5rem;
}
`;

export const SecoundTitle =styled('h2')`

    color : ${theme.FormColor}  ;
    text-align: center;

@media screen and (min-width:769px) and (max-width:1024px) {
    font-size: 1.4rem;
    margin-left: -12%;
}

@media screen and (min-width:427px) and (max-width:768px) {
    font-size: 1.3rem;
}

@media screen and (min-width:321px) and (max-width:426px) {
    font-size: 1.6rem;
}

@media screen and (max-width:320px) {
    font-size: 1.5rem;
}
`;

export const ThirdTitle =styled('h2')`

    color : ${theme.FormColor}  ;
    text-align: center;

    @media screen and (min-width:769px) and (max-width:1024px) {
    font-size: 1.4rem;
    margin-left: -12%;
}

@media screen and (min-width:427px) and (max-width:768px) {
    font-size: 1.3rem;
}

@media screen and (min-width:321px) and (max-width:426px) {
    font-size: 1.6rem;
}

@media screen and (max-width:320px) {
    font-size: 1.5rem;
}
`;


export const Description =styled('p')`
    font-size: 1.1rem;
    color : ${theme.dark} ;

@media screen and (min-width:769px) and (max-width:1024px) {
    font-size: 1rem;
    width: 90%;
}

@media screen and (min-width:427px) and (max-width:768px) {
    font-size: .9rem;
}

@media screen and (min-width:321px) and (max-width:426px) {
    font-size: 1rem;
}

@media screen and (max-width:320px) {
    font-size: 1rem;
}
    
`;