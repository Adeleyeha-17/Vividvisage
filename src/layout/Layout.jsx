/* eslint-disable react/prop-types */

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export const Layout = ({children}) => {
  return (
    <>
      <Navbar /> 

         <div className="mx-auto">
            {children}
         </div>

      <Footer />
    </>
  )
}
