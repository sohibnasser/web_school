import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";

export const AboutUswrapper = styled("section")`
    width: 100%;
    height: 38rem;
    padding-top :7rem ;
    display : flex ;
    gap : 7rem ;
    align-items : flex-start;
    position : relative;
    overflow: hidden;

@media screen and (min-width:769px) and (max-width:1024px) {
    padding: 6rem 0 3rem 0;
    gap : 5rem ;
    height: 31rem;
}

@media screen and (min-width:681px) and (max-width:768px) {
    padding-top: 6rem;
    gap : 4rem ;
    height: 30rem;
}

@media screen and (min-width:576px) and (max-width:680px) {
    padding-top: 6rem;
    gap : 4rem ;
    height: 30rem;
}

@media screen and (min-width:321px) and (max-width:575px) {
    padding: 4rem 0 0 0;
    display : block ;
    height: 48rem;
}

@media screen and (max-width:320px) {
    padding: 4rem 0 0 0;
    display : block ;
    height: 52rem;
}


`;


export const Data = styled("div")`
    width : 60% ; 
    padding-top : 3rem ; 

@media screen and (min-width:769px) and (max-width:1024px) {
    width : 55% ; 
    padding-top : 2.5rem ;
}

@media screen and (min-width:681px) and (max-width:768px) {
    width : 50% ; 
    padding-top : 1rem ;
}

@media screen and (min-width:576px) and (max-width:680px) {
    width: 50%;
    padding-top : 1rem ;
}

@media screen and (max-width:575px) {
    width : 95% ; 
    padding-top : 1rem ;
    text-align: center;
    margin: auto;
}


`;



export const H2 = styled("h2")`
    font-weight : bold;
    color: ${theme.primary};

@media screen and (min-width:769px) and (max-width:1024px) {
    font-size: 1.4rem;
}

@media screen and (min-width:681px) and (max-width:768px) {
    font-size: 1.2rem;

}

@media screen and (min-width:576px) and (max-width:680px) {
    font-size: 1rem;
}

@media screen and (min-width:321px) and (max-width:575px) {
    font-size: 1.1rem;
}

@media screen and (max-width:320px) {
    font-size: 1rem;
}
`;



export const P = styled("p")`
    font-size: 1.2rem;
    color: ${theme.dark};

@media screen and (min-width:769px) and (max-width:1024px) {
    font-size: 1rem;
}

@media screen and (min-width:681px) and (max-width:768px) {
    font-size: .9rem;
}

@media screen and (min-width:576px) and (max-width:680px) {
    font-size: .8rem;
}

@media screen and (min-width:321px) and (max-width:575px) {
    font-size: .9rem;
}

@media screen and (max-width:320px) {
    font-size: .8rem;
}
`;



export const SlideAboutUsWrapper = styled("div")`
    width: 25%;
    float: right;

@media screen and (min-width:769px) and (max-width:1024px) {
    width: 30%;
}

@media screen and (min-width:681px) and (max-width:768px) {
    width: 34%;
    padding-top : 1rem ;
}

@media screen and (min-width:576px) and (max-width:680px) {
    width: 40%;
    padding-top : 1rem ;
}


@media screen and (min-width:427px) and (max-width:575px) {
    width: 60.5%;
    padding-top : 1rem ;
    float: none;
    margin: 0 auto;
}


@media screen and (min-width:376px) and (max-width:426px) {
    width: 74.5%;
    float: none;
    padding-top : 3rem ;
    margin: 0 auto;
}

@media screen and (min-width:321px) and (max-width:375px) {
    width: 77%;
    float: none;
    padding-top : 3rem ;
    margin: 0 auto;
}

@media screen and (max-width:320px) {
    width: 91%;
    padding-top : 3rem ;
    float: none;
    margin: 0 auto;
}
`;


export const Wrapper = styled("div")`
    width: 100%;
`;

