import { useLocation } from "react-router-dom";
import theme from "../../../../Design-System/ResableComponant/Config";
import Links from "../../../../Design-System/ResableComponant/Navbar/Links";
import Logo from "../../../../Images/Navbar/Logo.jpg";
import NavbarLinks from "./NavbarLinks";
import { LinksWrapper, Logoo, NavContainer, NavbarWrapper, School, Title, Web } from "./style";


export default function Navbar() {
  const route = useLocation();
  return (
    
    <NavbarWrapper>
      <div className="container">
        <NavContainer>
            <Title>

             <Logoo className="Logo" src={Logo} alt="" />
              <Web className="wow animate__animated animate__fadeInUp animate__slower	1s">web</Web>
              <School className="wow animate__animated animate__backInDown animate__slower	3ms">school</School>

            </Title>

          <LinksWrapper>
            
              {Links.map((link , index) => {
              return(
              <NavbarLinks fontWeight={route.pathname === link.navLink? 900 : "" }  color={route.pathname === link.navLink? theme.active : theme.whiteSmoke }
              navLink={link.navLink} 
              navText={link.navText}
              key={index} />
              );
              })}
          </LinksWrapper>
        </NavContainer>
      </div>
      
    </NavbarWrapper>
  )
}
