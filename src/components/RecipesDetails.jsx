import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipesSkeleton from "./RecipesSkeleton";

function RecipeDetails() {
  const { id } = useParams();          // URL se id
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

  if (!recipe) return <p className="text-center mt-10">Recipe not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>

      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-80 object-cover rounded-lg mb-5"
      />

      <p className="mb-3">
        <strong>Cuisine:</strong> {recipe.cuisine}
      </p>

      <p className="mb-3">
        <strong>Difficulty:</strong> {recipe.difficulty}
      </p>

      <p className="mb-5">
        <strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes
      </p>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <ul className="list-disc pl-5 space-y-1">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;
