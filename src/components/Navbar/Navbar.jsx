/* eslint-disable react/prop-types */

import Brandlink from "../BrandLink"
import {Cart} from "../Icons/Cart"
import {Heart} from "../Icons/Heart"
import Navlink from "../NavLink"

export const Navbar = () => {

   return (
      <nav className="flex justify-between items-center font-krona py-4 container mx-auto">

         <Brandlink/>

         <div className="flex text-sm items-end space-x-8">

            <Navlink/> {/* ICONS */}

            <div className="flex">

               <Heart />

               <Cart />

            </div>
         </div>

      </nav>
   )
}
