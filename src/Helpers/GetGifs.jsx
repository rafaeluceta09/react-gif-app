


export const GetGifs = async(Category) =>{

    let key = 'cjgruze1RUDNUMu1B8iH3N7C5qYn9vNQ';
    let limit = 5;
    //&q=${Category}&limit=${limit}
    const url =`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${Category}&limit=${5}`;

    const resp = await fetch ( url );
    const { data } = await resp.json(); 

    const gifs = data.map(img => ({
        
            id :img.id,
            title : img.title,
            url: img.images.downsized_medium.url
        }));
        return gifs;

   // return 'gracias mi DIOS';






}