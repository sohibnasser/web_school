import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";

export const NavbarWrapper = styled("section")` 
   top : 0 ; 
   padding : 1rem 0 ;
   background-color: ${theme.primary};
   z-index: 2;
   position: fixed;
   width: 100%;
   gap: 15%;
`;

export const NavContainer = styled("div")`  
    display : flex ;
    align-items : center ;
    width: 100%;
    overflow: hidden;
    gap: 15%;
    
`;

export const Title = styled("div")`  
    width: 40%;
    display: flex;
    align-items : center ;
    gap: 5px;
    font-size : 1.5rem;
    font-family : cursive ;
    position: relative;

@media screen and (max-width:426px) {
    font-size: 1.2rem;
    width: 25%;
}

`;

export const Logoo = styled("img")`  
    width: 35px;

@media screen and (min-width:890px) and (max-width:1024px) {
    width: 30px;
}

@media screen and (max-width:426px) {
    width: 27px;
}
 
`;

export const Web = styled("span")`  
    text-transform : uppercase;
    font-weight : bold;
    color: ${theme.whiteSmoke};
    
`;

export const School = styled("span")`  
    color : ${theme.whiteSmoke};
    text-transform : uppercase;
    font-weight :bolder;

`;

export const LinksWrapper = styled("div")`  
   gap : 1.5rem;
   display : flex;
   width: 55% ;


@media screen and (min-width:992px) and (max-width:1024px) {
    gap : 1rem;
}

@media screen and (min-width:769px) and (max-width:991px) {
    text-align: center;
    margin: auto;
    margin-top: 5%;
    width: 100%;
    display: block;
}

@media screen and (min-width:600px) and (max-width:768px) {
    text-align: center;
    margin: auto;
    margin-top: 8%;
    width: 100%;
    display: block;
}

@media screen and (min-width:427px) and (max-width:599px) {
    text-align: center;
    margin: auto;
    margin-top: 11%;
    width: 100%;
    display: block;
}

@media screen and (max-width:426px) {
    text-align: center;
    margin: auto;
    margin-top: 20%;
    width: 100%;
    display: block;
}

`;


export const RoutLinks = styled("div")`  
   width: 100%;
   display : flex;


@media screen and (min-width:769px) and (max-width:991px) {
    display: block;
    width: 100%;
    padding: 2% 0;
}

@media screen and (min-width:600px) and (max-width:768px) {
    display: block;
    width: 100%;
    padding: 2.5% 0;
}

@media screen and (min-width:427px) and (max-width:599px) {
    display: block;
    width: 100%;
    padding: 3% 0;
}

@media screen and (max-width:426px) {
    display: block;
    width: 100%;
    padding: 4% 0;
}

`;