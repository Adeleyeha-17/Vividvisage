import BannerImg from "../../assets/makeup.jpg"
import Buttonlink from "../ButtonLink"

export const Banner = () => {
   return (
      <>
         <div className="container mx-auto flex max-h-screen items-center justify-between mb-20">

            <div className="mx-auto">
               <h1 className="font-krona text-3xl mb-4">Explore the finest cosmetics and skincare essentials, elevate your beauty routine, and embrace your inner glam with VividVisage!
               </h1>

               <p className="text-sm mb-10">
                  {`
                  Discover a world where your visage, your face, tells a story as unique as you are. Our mission is to empower you to express yourself through the art of makeup. Whether you seek the understated elegance of natural beauty or the bold and vibrant strokes of artistic expression, we've curated a selection of makeup products that cater to every shade, style, and personality.

                  Elevate your makeup routine with our carefully chosen cosmetics and skincare essentials. From richly pigmented eyeshadows to nourishing skincare products, we offer the tools you need to create your own masterpiece.`} </p>

                  <Buttonlink path="/about" text="See More" isMain/>
            </div>

            <div>
               <img src={BannerImg}
                  alt="Brush it out" className="w-3/5 rounded-full mx-auto"/>
            </div>
         </div>

      </>
   )
}

