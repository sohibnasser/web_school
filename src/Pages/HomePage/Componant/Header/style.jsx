import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";



export const HeaderWrapper = styled("section")`
    padding-top: 4rem;
    height: 100vh;
    position : relative ;
    overflow : hidden ; 
    background-color: ${theme.secondary};
`;

export const Program1 = styled("div")`
    position: absolute;
    left : -1.5rem ;
    text-align:center ;
    padding : 13% 0 ;
`;

export const Content = styled("span")`
    position: absolute;
    top: 15rem;
    left: 42rem;
    width: 22rem;
   
`;

export const Image = styled("div")`
    width: 25rem;
    position: absolute;
    left: 15rem;
    display: flex;
    align-items : center ;
    justify-content : space-between ;
`;

export const Img = styled("img")`
    width: 25rem;
`;

// export const H2 = styled("div")`
//     margin-bottom : 2px;
//     border-radius : 40px;
//     color : ${theme.white} ;
//     background-color: ${theme.Tab};
// `;

export const Program2 = styled("div")`
  position: absolute;
    right: -1.5rem;
    text-align:center ;
    direction : rtl ;
    padding : 13% 0 ;
`;


export const Div = styled("div")`
    width: 12rem;
    padding: .5rem;
    margin-bottom : 2px;
    border-radius : 40px;
    color: ${theme.whiteSmoke} ;
    background-color: ${theme.primary};
`;

























    // background : url(${Header}) fixed 50%;
    // background-size : cover ;
    // background-repeat : no-repeat ; 




// export const HeaderWrapper = styled("section")`
//     height: 100vh;
//     padding : 18% 0 ;
//     text-align : center ;
//     background-size : cover ;
//     background : url(${HeaderImage}) fixed no-repeat;
//     position : relative ;
//     overflow : hidden ;
    
// `;

// export const Program1 = styled("div")`
//     position: absolute;
//     left : -3rem ;
// `;

// export const Program2 = styled("div")`
//     position: absolute;
//     right: -2.2rem;
//     direction : rtl ;
// `;

// export const H2 = styled("div")`
//     padding: auto;
//     margin-bottom : 2px;
//     border-radius : 40px;
//     border :1px ${theme.Green} solid ;
//     :hover{
//         background-color: ${theme.Green};
//         color : ${theme.white} ;
//         transition: all .5s;
//     }
// `;







// @media (prefers-reduced-motion: no-preference) {
//   .App-logo {
//     animation: App-logo-spin infinite 20s linear;
//   }
// }

// @keyframes App-logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }




// export const SubTitle = styled("h3")`

//   color : ${theme.black};
//   font : 2rem bold;
// `;

// export const Title = styled("h1")`

//   color : ${theme.black};
//   font : 3rem bold;
// `;
// export const Learn = styled("button")`

//   font-size : 1rem;
//   color : ${theme.primary};
//   background : ${theme.white};
//   margin : 0 2rem ;
//   padding : 1rem 2rem;
//   border-radius :5rem;
//   border : 1px solid ${theme.white};
//   :hover{
//    background : ${theme.primary};
//    color : ${theme.white};
//    border : 1px solid ${theme.primary};
//    transition: all 1.1s;
//   }
// `;
// export const Register = styled("button")`

//   font-size : 1rem;
//   color : ${theme.white};
//   background : ${theme.primary};
//   margin-right : 2rem ;
//   padding : 1rem 2rem;
//   border-radius :5rem;
//   border : 1px solid ${theme.primary};
//   :hover{
//    background : ${theme.white};
//    color : ${theme.primary};
//    border : 1px solid ${theme.white};
//    transition: all 1.1s;
//   }
// `;