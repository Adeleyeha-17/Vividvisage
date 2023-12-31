import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

export const UseGetProducts = () => {
   
   const [products, setProducts] = useState([]);
   const [error, setError] = useState(null); 

   const getData = () => {

      axios.get(BASE_URL,{ 
         params: {
            product_tags : "ecocert",
         },
      })
      .then(response => {
        if (response.status === 200) {
          setProducts(response.data);
        } else {
          setError(new Error("Failed to fetch products"));
        }
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setError(error);
      });
   }
   
   return {
      products,
      getData,
      error
   }
};
