import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";

export const  RegisterHereWrapper = styled("section")`
    padding : 5rem 0  7rem 0;
    display : flex ;
    align-items :flex-start;
    position: relative; 
    
`;

export const Header = styled("div")`
    width : 50% ;
    padding-top : 7rem ; 
`;

export const Register = styled("h3")`
    color: ${theme.FormColor};
    font-weight :bolder;
    display: flex;
    gap: 6px;
`;

export const  Here = styled("h3")`
    color : ${theme.primary};
    font-weight :bold;
`;

export const P = styled("p")`
    font-size : 1rem ;
    width :80%;
    color : ${theme.dark};
`;

export const  Form = styled("div")`
    width: 500px;
    border-radius: 0.75rem;
    background-color: ${theme.black};
    padding: 2rem;
    color: ${theme.white};
    position: absolute;
    right: 0;
`;

export const  Title = styled("p")`
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    color: ${theme.whiteSmoke}
`;


