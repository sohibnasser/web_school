import { Link } from "./style";

export default function NavbarLinks({navLink , navText , color , fontWeight}) {
  return (
    
        <Link style={{color : color , fontWeight : fontWeight}} href={navLink}>{navText}</Link>
  
  )
}
