import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = [ 'One Punch', 'Samurai X', 'Fly', 'Dragon Ball'];
  const [categories, setCategories] = useState(["Rick and Morty" ]);

//   const handleAdd= ()=>{
//       setCategories( ['Mazinger Z', ...categories]);
//       setCategories((cats)=> ['Mazinger Z', ...categories])
//   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr></hr>
      {/* <button onClick={handleAdd}>Agregar</button> */}
      
        {
            categories.map( category => (
                // <li key={category}>{category}</li>
                <GifGrid key={category} category={ category } />
            ))
        }
     
    </>
  );
};
