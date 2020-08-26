import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GridImages } from './GridImages'; 
//import { getGif } from '../Helpers/getGifs';

export const GridGif = ({categoria}) => {

    // const [images, setImages] = useState([])
    // useEffect(() => {
    //    getGif(categoria).then((img)=>{setImages(img)})
    // },[categoria])
    const {data: images, loading} =  useFetchGifs(categoria)
    return (
            <>
            <h1 className="animate__animated animate__bounce">{categoria}</h1>
                {loading && <p className="animate__animated animate__flash">Cargando</p>}

                 <ol >
                    {
                        images.map((img)=>{
                        return <li key={img.id}>{img.title}</li>
                        })
                    }
                 </ol> 
               
                    <GridImages  imagenes = {images} />
            </>
    )
}
