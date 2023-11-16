import styled from "@emotion/styled";
import theme from "../../../../Design-System/ResableComponant/Config";



export const HeaderWrapper = styled("section")`
    width: 100%;
    height: 100vh;
    background-color: ${theme.secondary};
    overflow: hidden;
    position : relative ;
   
   

@media screen and (min-width:950px) and (max-width:1024px) {
    height: 38rem;
    top: 10%;
}

@media screen and (min-width:880px) and (max-width:949px) {
    height: 38rem;
    top: 13%;
}

@media screen and (min-width:769px) and (max-width:879px) {
    height: 38rem;
    top: 16%;
}

@media screen and (min-width:730px) and (max-width:768px) {
    height: 38rem;
    top: 15%;
}

@media screen and (min-width:680px) and (max-width:729px) {
    height: 38rem;
    top: 20%;
}

@media screen and (min-width:640px) and (max-width:679px) {
    height: 38rem;
    top: 22%;
 
}

@media screen and (min-width:600px) and (max-width:639px) {
    height: 38rem;
    top: 25%;
}

@media screen and (min-width:560px) and (max-width:599px) {
    height: 38rem;
    top: 28%;
}

@media screen and (min-width:525px) and (max-width:559px) {
    height: 38rem;
    top: 28%;
}

@media screen and (min-width:480px) and (max-width:524px) {
    height: 38rem;
    top: 34%;
}

@media screen and (min-width:427px) and (max-width:479px) {
    height: 38rem;
    top: 43%;
}

@media screen and (min-width:321px) and (max-width:426px) {
    height: 34rem;
  
}

@media screen and (max-width:320px) {
    height: 33rem; 

}

`;


export const Program1 = styled("div")`
    width: 16%;
    position: absolute;
    left : -1.5rem ;
    text-align:center ;
    top : 42%;

@media screen and (min-width:769px) and (max-width:1024px) {
    width: 18%;
    top : 43% ;
}

@media screen and (min-width:680px) and (max-width:768px) {
    width: 18%;
    top : 44% ;
}

@media screen and (min-width:427px) and (max-width:679px) {
    width: 18%;
    top : 45% ;
}


@media screen and (min-width:321px) and (max-width:426px) {
    top : 60% ;
    left : -1rem ;
}

@media screen and (max-width:320px) {
    top : 62% ;
    left : -1rem ;
}
`;

export const Content = styled("p")`
    position: absolute;
    top: 42%;
    left: 52%;
    width: 28%;
    font-size: 1.3rem;
    line-height : 1.5rem ;

@media screen and (min-width:950px) and (max-width:1024px) {
    top: 43%;
    left: 53%;
    width: 28%;
    font-size: 1.1rem;
    line-height : 1.3rem ;
}

@media screen and (min-width:880px) and (max-width:949px) {
    top: 41%;
    left: 53%;
    width: 28%;
    font-size: 1.1rem;
    line-height : 1.3rem ;
}

@media screen and (min-width:820px) and (max-width:879px) {
    top: 42%;
    left: 53%;
    width: 28%;
    font-size: 1.1rem;
    line-height : 1.3rem ;
}

@media screen and (min-width:769px) and (max-width:819px) {
    top: 40%;
    left: 53%;
    width: 28%;
    font-size: 1.1rem;
    line-height : 1.3rem ;
}

@media screen and (min-width:730px) and (max-width:769px) {
    top: 42%;
    left: 53%;
    width: 28%;
    font-size: 1rem;
    line-height : 1.1rem ;
 
}

@media screen and (min-width:680px) and (max-width:729px) {
    top: 43%;
    left: 50%;
    width: 32%;
    font-size: 1rem;
    line-height : 1.1rem ;
}

@media screen and (min-width:600px) and (max-width:679px) {
    top: 45%;
    left: 50%;
    width: 35%;
    font-size: 1rem;
    line-height : 1rem ;
}

@media screen and (min-width:560px) and (max-width:599px) {
    top: 45%;
    left: 50%;
    width: 33%;
    font-size: .9rem;
    line-height : 1rem ;
}

@media screen and (min-width:525px) and (max-width:559px) {
    top: 45%;
    left: 50%;
    width: 32%;
    font-size: .8rem;
    line-height : .9rem ;
}

@media screen and (min-width:480px) and (max-width:524px) {
    top: 44%;
    left: 50%;
    width: 33%;
    font-size: .7rem;
    line-height : .7rem ;
}

@media screen and (min-width:427px) and (max-width:479px) {
    top: 45%;
    left: 50%;
    width: 36%;
    font-size: .7rem;
    line-height : .7rem ;
}

@media screen and (min-width:321px) and (max-width:426px) {
    top: 22%;
    left: .7rem;
    width: 70%;
    font-size: .9rem;
    line-height: 1rem;
}

@media screen and (max-width:320px) {
    top: 22%;
    left: .7rem;
    width: 69%;
    font-size: .8rem;
    line-height: .9rem;
}
`;

export const Image = styled("div")`
    position: absolute;
    width: 30%;
    top: 15%;
    left: 18%;
    display: flex;
    align-items : center ;
    justify-content : space-between ;

@media screen and (min-width:950px) and (max-width:1024px) {
    top: 23%;
    left: 17%;
    width: 30%;
}

@media screen and (min-width:880px) and (max-width:949px) {
    top: 25%;
    left: 17%;
    width: 30%;
}

@media screen and (min-width:769px) and (max-width:879px) {
    top: 27%;
    left: 17%;
    width: 30%;
}

@media screen and (min-width:730px) and (max-width:769px) {
    top: 30%;
    left: 17%;
    width: 30%;
}

@media screen and (min-width:680px) and (max-width:729px) {
    top: 33%;
    left: 17%;
    width: 30%;
}

@media screen and (min-width:640px) and (max-width:679px) {
    top: 33%;
    left: 17%;
    width: 30%;
}

@media screen and (min-width:600px) and (max-width:639px) {
    top: 34%;
    left: 17%;
    width: 30%;
}

@media screen and (min-width:560px) and (max-width:599px) {
    top: 36%;
    left: 17%;
    width: 30%;
}

@media screen and (min-width:525px) and (max-width:559px) {
    top: 38%;
    left: 17%;
    width: 30%;
}

@media screen and (min-width:480px) and (max-width:524px) {
    top: 36%;
    left: 17%;
    width: 30%;
}

@media screen and (min-width:427px) and (max-width:479px) {
    top: 39%;
    left: 17%;
    width: 30%;
}

@media screen and (min-width:321px) and (max-width:426px) {
    top: 42%;
    left: 30%;
    width: 60%;
}

@media screen and (max-width:320px) {
    top: 49%;
    left: 30%;
    width: 65%;
}
`;

export const Img = styled("img")`
    width: 100%;
`;

export const Program2 = styled("div")`
    width: 16%; 
    position: absolute;
    right: -1.5rem;
    text-align:center ;
    direction : rtl ;
    top : 42%;

@media screen and (min-width:769px) and (max-width:1024px) {
    top : 43% ;
    width: 18%; 
}
    
@media screen and (min-width:680px) and (max-width:768px) {
    width: 18%;
    top : 44% ;
}

@media screen and (min-width:427px) and (max-width:679px) {
    width: 18%;
    top : 45% ;
}

@media screen and (min-width:321px) and (max-width:426px) {
    top : 22%;
    right : -1rem ;
}

@media screen and (max-width:320px) {
    top: 21%;
    right : -1rem ;
}
`;

export const Div = styled("div")`
    padding: .5rem;
    margin-bottom : 2px;
    border-radius : 40px;
    color: ${theme.whiteSmoke} ;
    background-color: ${theme.primary};
    
@media screen and (min-width:769px) and (max-width:1024px) {
    padding: .3rem;
    font-size: 1rem;
}

@media screen and (min-width:730px) and (max-width:768px) {
    padding: .3rem;
    font-size: .9rem;
}

@media screen and (min-width:680px) and (max-width:729px) {
    padding: .5rem;
    font-size: .7rem;
    width: 7rem;
}
@media screen and (min-width:640px) and (max-width:679px) {
    padding: .4rem;
    font-size: .7rem;
    width: 7rem;
}

@media screen and (min-width:600px) and (max-width:639px) {
    padding: .4rem;
    font-size: .7rem;
    width: 7rem;
}

@media screen and (min-width:560px) and (max-width:599px) {
    padding: .4rem;
    font-size: .6rem;
    width: 6rem;
}

@media screen and (min-width:525px) and (max-width:559px) {
    padding: .4rem;
    font-size: .6rem;
    width: 6rem;
}

@media screen and (min-width:480px) and (max-width:524px) {
    padding: .3rem;
    font-size: .5rem;
    width: 5.5rem;
}

@media screen and (min-width:427px) and (max-width:479px) {
    padding: .4rem;
    font-size: .4rem;
    width: 5rem;
}

@media screen and (min-width:321px) and (max-width:426px) {
    padding: 10%;
    font-size: .7rem;
    width: 150%;
}

@media screen and (max-width:320px) {
    padding: 13%;
    font-size: .6rem;
    width: 170%;
}
`;