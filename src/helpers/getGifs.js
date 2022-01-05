export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI( category )}&api_key=N5fZIOTH8RJLI52qvzosEdf69U8PiHyZ`;

    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });

    return(gifs);
}