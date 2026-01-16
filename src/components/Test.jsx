import React, { useContext, useState, useMemo } from "react";
import DataContext from "../context/DataContext";

function Home() {
  const { recipesData } = useContext(DataContext);

  // Search input ka state
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered recipes (real-time search)
  const filteredRecipes = useMemo(() => {
    // Safety check: agar data nahi hai ya array nahi to empty return
    if (!recipesData || !Array.isArray(recipesData)) {
      return [];
    }

    // Agar search khali hai toh sab dikhao
    if (!searchTerm.trim()) {
      return recipesData;
    }

    const term = searchTerm.toLowerCase().trim();

    // Filter logic – tumhare recipesData ke structure ke hisaab se adjust karo
    return recipesData.filter((recipe) => {
      // Yeh common fields hain – jo match kare usme search
      return (
        (recipe.name?.toLowerCase().includes(term)) ||
        (recipe.title?.toLowerCase().includes(term)) ||
        (recipe.description?.toLowerCase().includes(term)) ||
        // Agar ingredients array hai to usme bhi search
        (recipe.ingredients?.some((ing) =>
          ing.toLowerCase().includes(term)
        )) ||
        // Tags ya cuisine bhi add kar sakte ho
        (recipe.tags?.some((tag) => tag.toLowerCase().includes(term)))
      );
    });
  }, [recipesData, searchTerm]);

  return (
    <div className="mt-20 px-4 max-w-6xl mx-auto">
      {/* Search Section */}
      <div className="mb-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search recipes (name, ingredients, etc.)..."
          className="w-full sm:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Optional button – real-time search ke liye zaruri nahi */}
        {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Search
        </button> */}
      </div>

      {/* Results */}
      <div>
        {recipesData === undefined || recipesData === null ? (
          <p className="text-center text-gray-500 text-lg">
            Loading recipes...
          </p>
        ) : filteredRecipes.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="text-xl font-medium">
              No recipes found for "{searchTerm}"
            </p>
            <p className="mt-2">Try different keywords or clear search</p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {searchTerm.trim()
                ? `Found ${filteredRecipes.length} recipes`
                : `All Recipes (${filteredRecipes.length})`}
            </h2>

            {/* Abhi simple list dikhate hain (RecipesCard bhool gaye) */}
            <ul className="space-y-4">
              {filteredRecipes.map((recipe, index) => (
                <li
                  key={recipe.id || recipe._id || index}
                  className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {recipe.name || recipe.title || "Unnamed Recipe"}
                  </h3>
                  {recipe.description && (
                    <p className="text-gray-600 mt-2 line-clamp-2">
                      {recipe.description}
                    </p>
                  )}
                  {recipe.time && (
                    <p className="text-sm text-gray-500 mt-2">
                      ⏱ {recipe.time}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;