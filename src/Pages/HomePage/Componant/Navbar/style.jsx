import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";

export const NavbarWrapper = styled("section")` 
   top : 0 ; 
   padding : 1rem 0 ;
   background-color: ${theme.primary};
   z-index: 2;
   position: fixed;
   width: 100%;
  
`;

export const NavContainer = styled("div")`  
    display : flex ;
    align-items : center ;
    justify-content : space-between ;
`;

export const Title = styled("div")`  
    display: flex;
    gap: 5px;
    font-size : 1.5rem;
    position: relative;
    width: 45%;
    font-family : cursive
`;

export const Logoo = styled("img")`  
    width: 35px;
    position: absolute;
    left: -35px;
    top: -2px;
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
   gap : 1rem;
   display : flex;
   align-items : center;
   width: 57%;

`;

export const Link = styled("a")`  
   color : ${theme.active};
   font-size : 1rem;
   text-decoration : none;
`;





