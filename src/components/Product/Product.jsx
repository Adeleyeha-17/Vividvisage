/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export const Product = ({index, id, name, brand, imgUrl, price, currency}) => {
  return (
   <Link to={`/about/${id}`} key={index} className="flex flex-col mt-8 mb-14 px-8 py-10 border rounded-xl transform hover:shadow-xl hover:scale-105 delay-50 transition duration-300 ease-in-out">
   <img src={`https://${imgUrl}`} alt={name} className="w-48 mb-6"/>
   <p className="text-yellow lowercase font-krona text-sm ">{name}</p>
   <p>{brand}</p>
   <div className="relative">
    <div className="absolute bg-light-grey h-10 rounded-full top-0 w-10 -z-1"></div>
   <p className="font-krona text-md pt-2 ml-4">{price} {currency}</p>

   </div>
 </Link>
  )
}
