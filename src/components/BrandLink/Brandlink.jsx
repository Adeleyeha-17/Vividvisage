/* eslint-disable react/prop-types */
import NavLogo from "../../assets/Vivid Visage.svg";
import { Link } from "react-router-dom"

export const Brandlink = () => {
  return (
   
     <Link to="/" className="w-64">
      <img src={NavLogo}/>
     </Link>
  )
}
