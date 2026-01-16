// import { useContext } from "react";
import Recipes from "./Recipes";
import RecipesSkeleton from "./RecipesSkeleton";

function RecipesCard({recipes, loading}) {

   if (loading) {
    return <RecipesSkeleton />;
  }

  if (!recipes || recipes.length === 0) {
    return <p>no found</p>;
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-4 mx-5 my-2 shadow-2xl bg-gray-200"
    >
      {recipes.map((item) => (
        <div key={item.id}>
        <Recipes  item={item} />
        </div>
      ))}
    </div>
  );
}

export default RecipesCard;
