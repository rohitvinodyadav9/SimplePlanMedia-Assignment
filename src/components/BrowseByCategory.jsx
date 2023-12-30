import React from "react";
import CategoryCard from "./CategoryCard";

function BrowseByCategory() {
  return (
    <div id="browseByCategory">
      <h1>Browse by category</h1>
      <div>
        <CategoryCard img="unsplash__Q4v8_Iy0rA.png" value="Language"/>
        <CategoryCard img="unsplash__Yc7OtfFn-0.png" value="Cooking"/>
        <CategoryCard img="unsplash_1SA__aN_I2U.png" value="Music"/>
        <CategoryCard img="unsplash_qWlkCwBnwOE.png" value="Art & Craft"/>
        <CategoryCard img="unsplash_usfIE5Yc7PY.png" value="Yoga"/>
        <CategoryCard img="unsplash_wmZNEGkcsmw.png" value="Cooking"/>
        <CategoryCard img="unsplash_YCQFgqOzLmU.png" value="Interesting"/>
        <CategoryCard img="unsplash__Q4v8_Iy0rA.png" value="Funtresting"/>
      </div>
    </div>
  );
}

export default BrowseByCategory;
