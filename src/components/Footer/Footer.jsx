/* eslint-disable react/prop-types */

import { Link} from "react-router-dom"
import NavLogo from "../../assets/Footer.svg"
import links from "../../data/footerLinks.json" 

export const Footer = () => {
  
  return (
   
   <footer className="bg-dark text-light px-16 py-8 flex justify-between">
      
      <Link href="" className="w-64">
         <img src={NavLogo}/>
      </Link>

      <div className="grid grid-flow-col gap-8">
     {links.map(link => (
      <div className="flex flex-col flex-wrap" key={link.title}>
         <h6 className="font-krona text-sm">{link.title}</h6>
         {link.links.map(item => (
            <Link to={item.path} key={item.name} className={`transition ease-in-out hover:text-yellow`}>{item.name}</Link>

         ))}
      </div>
       ))}

      </div>

      <div className="grid grid-flow-row gap-2">
         <h1>Ins</h1>
         <h1>Twi</h1>
         <h1>Lin</h1>
      </div>
      

   </footer>
   )
}
