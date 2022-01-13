import { useState } from "react";
import CategoriesAdd from "./components/CategoriesAdd";
import GifGrid from "./components/GifGrid";

const GifexpertApp = () => {
  const [categories, setCategories] = useState([]);

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

export default GifexpertApp;