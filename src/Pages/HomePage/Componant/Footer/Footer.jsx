import { CDBBox, CDBBtn, CDBIcon, CDBLink, CDBModalFooter } from 'cdbreact';
import Logo from "../../../../Images/Footer/LogoFooter.jpg";
import { FooterWrapper } from './style';

export default function Footer() {
  return (
    <FooterWrapper>
    <CDBModalFooter className="shadow pt-2" style={{ width : '100%' , marginTop : '9.5rem'}}>
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '80%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-primary">
              <img style={{marginTop : "-4px"}} alt="logo" src={Logo} width="40px" />
              <span className="ms-1 h5 font-weight-bold">WebSchool</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
            Subscribe to the WebSchool platform now and learn the latest programming languages in Arabic with the highest quality
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              WebSchool
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBLink href="/">Resources</CDBLink>
              <CDBLink href="/">About Us</CDBLink>
              <CDBLink href="/">Contact</CDBLink>
              <CDBLink href="/">Blog</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBLink href="/">Support</CDBLink>
              <CDBLink href="/">Sign Up</CDBLink>
              <CDBLink href="/">Sign In</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBLink href="/">Windframe</CDBLink>
              <CDBLink href="/">Loop</CDBLink>
              <CDBLink href="/">Contrast</CDBLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          marginTop = "3rem"
          justifyContent="center"
          style={{ width: '100%' }}
          // className="mx-auto mt-4"
        >
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
        <small className="text-center mt-5">&copy; WebSchool, 2023. All rights reserved.</small>
      </CDBBox>
    </CDBModalFooter>
    </FooterWrapper>
  )
}






