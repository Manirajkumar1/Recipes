import { useEffect, useState } from "react";
import Recipes from "./Recipes";
import RecipesSkeleton from "./RecipesSkeleton";
import SearchRecipes from "./SearchRecipes";

function RecipesCard() {
  const [recipesData, setRecipesData] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [showTopRated, setShowTopRated] = useState(false);

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

  // search filter
  const filteredRecipesData = recipesData
    .filter((item) =>
      item.name.toLowerCase().includes(textSearch.toLowerCase()),
    )
    .filter((item) =>
    showTopRated ? item.rating > 4.5 : true
    )

  return recipesData.length === 0 ? (
    <RecipesSkeleton />
  ) : (
    <div className="mx-3 my-2">
      <div className="flex justify-between mb-2">
        <SearchRecipes textSearch={textSearch} setTextSearch={setTextSearch} />
        <button 
        onClick={() => setShowTopRated(!showTopRated)}
        className="bg-orange-500 px-2 rounded-md text-white font-semibold cursor-pointer"
        >
          BestRecipes
          </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-4  shadow-2xl bg-gray-200">
        {filteredRecipesData.map((item) => (
          <div key={item.id}>
            <Recipes item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipesCard;
