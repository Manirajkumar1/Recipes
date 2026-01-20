

function SearchRecipes({ textSearch, setTextSearch }) {
  return (
    <div >
      <div className="flex justify-between">
          <input
            type="text"
            placeholder="Search Recipes.."
            className="border-2 border-orange-400 py-1 px-2 outline-none"
            value={textSearch}
            onChange={(e) => setTextSearch(e.target.value)}
          />
      </div>
    </div>
  );
}

export default SearchRecipes;
