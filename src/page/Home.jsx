
import { useContext, useState } from "react";
import RecipesCard from "../components/RecipesCard";
import DataContext from "../context/DataContext";

function Home() {
  const {recipesData, loading} = useContext(DataContext)
  const [search, setSearch] = useState("")

    const filteredRecipes =
    search.trim() === ""
      ? recipesData
      : recipesData.filter((item) =>
          (
            item.name ??
            ""
          )
            .toLowerCase()
            .includes(search.toLowerCase())
        );

  
  return (
    <div className="mt-20">
      <div>
        <input 
        type="text"
        className="border" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <RecipesCard recipes={filteredRecipes} loading={loading}/>
      </div>
    </div>
  );
}

export default Home;
