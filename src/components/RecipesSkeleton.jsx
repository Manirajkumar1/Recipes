import React from "react";

function RecipesSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array(9)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-white rounded shadow p-3 animate-pulse"
          >
            {/* Image Skeleton */}
            <div className="w-full h-40 bg-gray-300 rounded mb-3"></div>

            {/* Title Skeleton */}
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          </div>
        ))}
    </div>
  );
}

export default RecipesSkeleton;
