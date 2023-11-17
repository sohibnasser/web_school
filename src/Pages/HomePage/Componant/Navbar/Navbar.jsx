import { Container } from "@mui/material";
import { Navbar, Offcanvas } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import theme from "../../../../Design-System/ResableComponant/Config";
import Links from "../../../../Design-System/ResableComponant/Navbar/Links";
import Logo from "../../../../Images/Navbar/Logo.jpg";
import NavbarLinks from "./NavbarLinks";
import {
  LinksWrapper,
  Logoo,
  NavContainer,
  NavbarWrapper,
  School,
  Title,
  Web,
} from "./style";

export default function NavbarComponant() {
  const route = useLocation();
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          style={{ position: "fixed", zIndex: "2", width: "100%" }}
          key={expand}
          expand={expand}
          className="navbar-dark"
        >
          <NavbarWrapper>
            <Container fluid>
              <NavContainer>
                <Title>
                  <Logoo className="Logo" src={Logo} alt="Logo" />
                  <Web className="wow animate__animated animate__fadeInUp animate__slower	1s">
                    web
                  </Web>
                  <School className="wow animate__animated animate__backInDown animate__slower	3ms">
                    school
                  </School>
                </Title>

                <Navbar.Toggle
                  style={{ marginLeft: "42%" }}
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  style={{ width: "100%", height: "100%" }}
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="top"
                >
                  <Offcanvas.Header
                    closeVariant="white"
                    closeButton
                    style={{ backgroundColor: "#6153BD" }}
                  >
                    <Offcanvas.Title
                     
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      <Title style={{width : "15rem"}}>
                        <Logoo className="Logo" src={Logo} alt="Logo" />
                        <Web className="wow animate__animated animate__fadeInUp animate__slower	1s">
                          web
                        </Web>
                        <School className="wow animate__animated animate__backInDown animate__slower	3ms">
                          school
                        </School>
                      </Title>
                    </Offcanvas.Title>
                  </Offcanvas.Header>

                  <Offcanvas.Body style={{ backgroundColor: "#6153BD" }}>
                    <LinksWrapper>
                      {Links.map((link, index) => {
                        return (
                          <NavbarLinks
                            fontWeight={
                              route.pathname === link.navLink ? "bolder" : ""
                            }
                            color={
                              route.pathname === link.navLink
                                ? theme.active
                                : ""
                            }
                            navLink={link.navLink}
                            navText={link.navText}
                            key={index}
                          />
                        );
                      })}
                    </LinksWrapper>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </NavContainer>
            </Container>
          </NavbarWrapper>
        </Navbar>
      ))}
    </>
  );
}

