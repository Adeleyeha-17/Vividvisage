/* eslint-disable react/prop-types */
import UniqueImg from "../../assets/Skincare with leaf.jpg"

export const Uniqueproduct = () => {
   return (
      <>
         <div className="relative z-0 -top-28 pt-40  bg-light-grey">

         <div className="container mx-auto flex flex-col md:flex-row items-center justify-center pt-10 pb-16 gap-20">
         <div className="w-1/2">
               <img src={UniqueImg} alt="Brush it out"
                  className="rounded-sm"/>
            </div>
            <div className="w-1/2">
               <h1 className="font-krona md:text-3xl text-xl mb-4">Uncover premium cosmetics and skincare essentials to elevate your beauty routine.
               </h1>

               <p className="text-sm mb-2">
                  {`
         Explore a range of top-tier products meticulously crafted to enhance your natural radiance and confidence. From luxurious creams to exquisite makeup, these offerings are designed to pamper and nourish your skin. Experience the transformative power of high-quality ingredients, each selected to provide you with the best in skincare and cosmetics. `}
         </p>

               <p className="text-sm mb-10"> 
                  {`
       With these carefully curated essentials, you'll unlock a new level of self-expression and radiate timeless beauty. Uncover the secrets to a more radiant you today`} </p>
            </div>
         </div>

         </div>
      </>
   )
}
