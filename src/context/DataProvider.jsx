import { useEffect, useState } from "react";
import DataContext from "./DataContext";

export const DataProvider = ({children}) => {
    const [recipesData, setRecipesData] = useState([]);
    
      
      useEffect(() => {
        const fetchData = async () => {
        try {
          const data = await fetch("https://dummyjson.com/recipes?limit=20");
          const resData = await data.json();
          setRecipesData(resData.recipes || []);
        } catch (error) {
          console.log(error);
        }
      };
        fetchData();
      }, []);

      return(
        <DataContext.Provider value={{recipesData}}>
          {children}
        </DataContext.Provider>
      )
}