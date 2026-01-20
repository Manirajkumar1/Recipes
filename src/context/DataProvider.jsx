import { useEffect, useState } from "react";
import DataContext from "./DataContext";

export const DataProvider = ({children}) => {
    const [recipesData, setRecipesData] = useState([]);
    const [loding, setLoading] = useState(true)
    
      
      

      return(
        <DataContext.Provider value={{recipesData, loding}}>
          {children}
        </DataContext.Provider>
      )
}