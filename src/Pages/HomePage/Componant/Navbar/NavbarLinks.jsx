
import { Link } from "react-router-dom";
import { RoutLinks } from "./style";

import "../../../../Design-System/main.css";

export default function NavbarLinks({navLink , navText , color , fontWeight}) {
  return (
    <RoutLinks>
        <Link className="link"  style={{color : color , fontWeight : fontWeight , textDecoration : "none"}} to={navLink}>{navText}</Link>
    </RoutLinks>
  )
}
