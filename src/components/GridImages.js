import React from 'react'

export const GridImages = ({imagenes}) => {
    return (

            <div className = "card-grid">
             {   
                imagenes.map(
                (img)=>{
                        return (<div key={img.id} className= "card">  
                                    <img  src = {img.url} alt= {img.title}></img> 
                                    <p>{img.title}</p>
                                </div>) 
                        }
                        ) 
            }
            </div>
    )
}
