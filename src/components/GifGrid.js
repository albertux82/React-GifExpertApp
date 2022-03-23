import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifts";
//import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [count, setCount] = useState(0);
  //const [images, setImages] = useState([]);

  const {data:images, loading} = useFetchGifs(category);

  // Solo ejecuta la función getGifs() una sola vez al iniciar
  // esto evita que se ejecute el fetch con el click al botón
  // useEffect(() => {
  //   //getGifs();
  //   //Hacemos referencia al getGifs del helper y le pasamos la categoría
  //   getGifs(category)
  //     .then( gifs => setImages(gifs))
  // }, [category]);


  //Esta función se pasó a un helper
  // const getGifs = async () => {
  //   const url =
  //     `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=STMi7jRqZIYM6mVN8lgNCHPTXGBw6FuW`;
  //   const resp = await fetch(url);
  //   const { data } = await resp.json();
  //   //console.log(data);

  //   //Mapeamos el resultado para formar nuestro propio objeto
  //   const gifs = data.map((img) => {
  //     return {
  //       id: img.id,
  //       title: img.title,
  //       url: img.images?.downsized_medium.url,
  //     };
  //   });
  //   console.log(gifs);
  //   setImages(gifs);
  // };

  //getGifs();

  return (
    <div>

      <h3>{category}</h3>
      { loading && <i className="fa fa-spin fa-spinner"></i>}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {/* <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>Click</button> */}

        {/* <ol>
          { images.map( ({id, title}) => <li key={id}>{title}</li>)}
      </ol> */}

        {
          //images.map( img => <GifGridItem key={img.id} img={img} />)
          /*En esta versión se usa Spread para pasar valores del array "img"
          /y recibirlos en GifGridItem como "destructuración"*/
          images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))
        }
      </div>
    </div>
  );
};
