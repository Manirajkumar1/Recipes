import { useContext, useState } from "react";
import RecipesCard from "../components/RecipesCard";
import DataContext from "../context/DataContext";
import Category from "../components/Category";

function Home() {
  const { recipesData } = useContext(DataContext);
  const [search, setSearch] = useState("");

  const filteredRecipes =
    search.trim() === ""
      ? recipesData
      : recipesData.filter((item) =>
          (item.name ?? "").toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div className="m-2">
      <div className="flex justify-between">
        <div className="ml-5 ">
          <input
            type="text"
            placeholder="Search Recipes.."
            className="border-2 border-orange-400 py-1 px-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-8 mr-6">
          <Category/>
          
        </div>
      </div>
      <div>
        <RecipesCard recipes={filteredRecipes} />
      </div>
    </div>
  );
}

export default Home;
