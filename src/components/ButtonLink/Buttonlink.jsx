/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

export const Buttonlink = ({path, text, isMain}) => (
  <>
    <Link to={path} className={`inline-block font-bold font-krona rounded-full ${isMain ? "bg-yellow py-4 px-10" : "bg-dark text-white py-2 px-4" }`}>
      {text}
    </Link>
  </>
)
