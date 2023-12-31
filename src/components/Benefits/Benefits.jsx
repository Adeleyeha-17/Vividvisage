import Benefititems from "../Benefititems"

export const Benefits = () => {

   const benefits = [
      {
         title: "Delivery",
         text: "sdfghgjdshjvjdujcvndjhjsbfiuvfngudnncxinitnidvniundbvyetubvsubvb"
      },
      {
         title: "Products",
         text: "sdfghgjdshjvjdujcvndjhjsbfiuvfngudnncxinitnidvniundbvyetubvsubvb"
      },
      {
         title: "Payments",
         text: "sdfghgjdshjvjdujcvndjhjsbfiuvfngudnncxinitnidvniundbvyetubvsubvb"
      }
   ]
  return (
    <div className="container mx-auto flex md:flex-row flex-col items-center gap-6 -mt-20 mb-10">
      {benefits.map((item, index) => (
         <Benefititems key={`${benefits.title}-${index}`} item={item}/>
      ))}
    </div>
  )
}
