import BannerImg from "../../assets/skincare.jpg"
import Buttonlink from "../ButtonLink"


export const SecondBanner = () => {
   return (
      <div className="container mx-auto grid grid-cols-2 px-20 items-center justify-center bg-pink-400 relative w-full z-10">
            <div>
               <h1 className="font-krona text-3xl mb-4 mx-auto">Be Authentic, <br /> be Graceful, <br /> be Yourself.
               </h1>
               <Buttonlink path="/about" text="See More"/>
            </div>

            <div className="mx-auto w-full">
               <img src={BannerImg}
                  alt="Brush it out"
                  className="relative h-80 w-full object-cover p-8"/>
            </div>
         </div>
   )
}


