import { useEffect, useState } from "react";
import DataContext from "./DataContext";

export const DataProvider = ({children}) => {
    const [recipesData, setRecipesData] = useState([]);
    const [loding, setLoading] = useState(true)
    
      
      useEffect(() => {
        const fetchData = async () => {
        try {
          const data = await fetch("https://dummyjson.com/recipes?limit=20");
          const resData = await data.json();
          setRecipesData(resData.recipes || []);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false)
        }
      };
        fetchData();
      }, []);

      return(
        <DataContext.Provider value={{recipesData, loding}}>
          {children}
        </DataContext.Provider>
      )
}