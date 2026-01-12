import { useContext } from "react";
import Recipes from "./Recipes";
import DataContext from "../context/DataContext";

function RecipesCard() {
  const {recipesData} = useContext(DataContext)

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-4 mx-5 my-2 shadow-2xl bg-gray-200"
    >
      {recipesData.map((recipes) => (
        <>
        <Recipes key={recipes.id} item={recipes} />
        </>
      ))}
    </div>
  );
}

export default RecipesCard;
