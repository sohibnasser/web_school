import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";
export const OverviewWrapper = styled("section")`
  padding : 6rem 0 3rem 0;
  display: flex;
`;
export const OverviewContainer = styled("section")`
  display : flex ;
  justify-content : space-between ;
  
`;


export const Wrapper =styled('div')`
    width: 355px;
    text-align :center;
`;
export const FirstTitle =styled('h2')`
    color : ${theme.FormColor} ;
`;

export const SecoundTitle =styled('h2')`
    color : ${theme.FormColor}  ;
`;

export const ThirdTitle =styled('h2')`
    color : ${theme.FormColor}  ;
`;

export const Titel =styled('span')`
    font-size: 20px;
    color: ${theme.FormColor} ;
`;

export const Description =styled('p')`
    color : ${theme.dark} ;
    
`;