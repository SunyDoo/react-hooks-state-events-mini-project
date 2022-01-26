import React from "react";

function CategoryFilter({categories, filter, selected}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>
      <button key={category} onClick={filter} className={(selected ? "selected" : "")}>{category}
      </button>)}
    </div>
  );
}

export default CategoryFilter;
