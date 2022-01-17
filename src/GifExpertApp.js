import { useState } from "react";
import CategoriesAdd from "./components/CategoriesAdd";
import GifGrid from "./components/GifGrid";

const GifexpertApp = ({ defaultCategories}) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <CategoriesAdd setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(cat => (
          <GifGrid
            key={cat}
            category={cat}
          />))}
      </ol>
    </>
  );
}

GifexpertApp.defaultProps = {
  defaultCategories: [],
}

export default GifexpertApp;