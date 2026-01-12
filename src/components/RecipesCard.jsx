import { useEffect, useState } from "react";
import Recipes from "./Recipes";

function RecipesCard() {
  const [recipesData, setRecipesData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/recipes");
      const resData = await data.json();
      setRecipesData(resData.recipes || []);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(recipesData);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-4 mx-5 my-2 shadow-2xl bg-gray-200"
    >
      {recipesData.map((item) => (
        <Recipes key={item.id} item={item} />
        // <div key={item.id}>
        //      <h1>{item.name}</h1>
        // </div>
      ))}
    </div>
  );
}

export default RecipesCard;
