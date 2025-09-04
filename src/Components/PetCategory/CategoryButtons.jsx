import React from "react";

function CategoryButtons({ selectedCategory, onSelectCategory }) {
  return (
    <div className="flex justify-center gap-8 mb-8 mt-8">
      {/* Dogs */}
      <button
        onClick={() => onSelectCategory("Dogs")}
        className="px-6 py-2 bg-[#a9b2d6] text-white font-medium rounded-3xl shadow-md"
      >
        Dogs
      </button>

      {/* Cats */}
      <button
        onClick={() => onSelectCategory("Cats")}
        className="px-6 py-2 bg-[#dbcdb4] text-white font-medium rounded-3xl shadow-md"
      >
        Cats
      </button>

      {/* All */}
      <button
        onClick={() => onSelectCategory("All")}
        className="px-6 py-2 bg-[#a16f4a] text-white font-medium rounded-3xl shadow-md"
      >
        All
      </button>
    </div>
  );
}

export default CategoryButtons;
