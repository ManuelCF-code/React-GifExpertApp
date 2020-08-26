

export const getGif = async(categoria) =>{
     
    try 
    {
    const urlData = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=supKJkA9JIf0eULITf9fVQdr8UURWYoD`
    const resp = await fetch(urlData)
    const  {data} = await resp.json()
    const gifs = data.map((img)=>{
        return{
            id: img.id,
            title : img.title,
            url : img.images.downsized_medium.url
        }
    })
    return gifs
        
    } 
    
    catch (error) {
        console.log(error)
    }
    
}