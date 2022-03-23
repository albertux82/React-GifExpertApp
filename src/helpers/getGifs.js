


//Recibimos la category
export const getGifs = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=STMi7jRqZIYM6mVN8lgNCHPTXGBw6FuW`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    //console.log(data);

    //Mapeamos el resultado para formar nuestro propio objeto
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    //console.log(gifs);
    //setImages(gifs); //setImages no se encuentra en el scope
    return gifs; // ahora solo retornamos los gifs
};
