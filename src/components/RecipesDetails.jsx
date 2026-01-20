import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipesSkeleton from "./RecipesSkeleton";

function RecipeDetails() {
  const { id } = useParams();          
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await res.json();
        setRecipe(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <RecipesSkeleton/>;

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>

      <div className="flex gap-20">
        <div className="w-96">
        <img
        src={recipe.image}
        className="w-full  object-cover rounded-lg mb-5"
      />

      </div>
      {/* Ingredients */}
      <div className="">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-5 space-y-1">
        {recipe.ingredients.map((item, index) => (
          <li 
          key={index}>{item}</li>
        ))}
      </ul>
      </div>
      </div>
      <div className="flex flex-col gap-3 mb-8 ">
        <p className="">
        <strong>Cuisine:</strong> {recipe.cuisine}
      </p>

      <p className="">
        <strong>Difficulty:</strong> {recipe.difficulty}
      </p>

      <p className="">
        <strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes
      </p>
      </div>
      {/* instructions */}
      <div className="ml-4">
        <h1 className="text-xl font-semibold mb-2">Instructions</h1>
        <ul className="ml-2">
          {
            recipe.instructions.map((item, index) => (
              <li 
              className="list-disc"
              key={index}>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default RecipeDetails;
