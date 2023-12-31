import Banner from "../components/Banner"
import { Benefits } from "../components/Benefits/Benefits"
import SecondBanner from "../components/SecondaryBanner"
import TopProduct from "../components/TopProduct"
import { Uniqueproduct } from "../components/UniqueProduct/Uniqueproduct"

export const Home = () => {
  return (
    <div>
         <Banner />
         
         <TopProduct /> 

         <SecondBanner />
         
         <Uniqueproduct />

         <Benefits />
    </div>
  )
}
