
import { NavLink, useLocation } from "react-router-dom";

  const links = [
   {
      path: "/",
      name: "Home"
   },
   {
      path: "/search",
      name: "Search"
   },
   {
      path: "/about",
      name: "About"
   }
  ]

export const Navlink = () => {
  
  const location = useLocation();

  function pathMatchRoute(route) {
    return location.pathname === route
      ? "text-yellow"
      : "text-black";
  }
  return (
    <>

      {links.map((link, index) => (
                  <NavLink className={`${pathMatchRoute(`${link.path}`)}`} to={`${link.path}`} key={`${link.name}-${index}`}>{link.name}</NavLink>
      ))}
         
   </>
  )
}



 
   // Alternative way to active link
  // const activeLink = ({isActive}) => {
  //     return isActive ? "text-yellow" : "text-black"
  // }
