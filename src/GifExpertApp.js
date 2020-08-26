import React from 'react'
import { useState } from "react";
import "./styles/styles.scss"
import { AddCategory } from './components/AddCategory';
import { GridGif } from './components/GridGif';

const GifExpertApp = () =>{
    const [category, setCategory] = useState([""])
    //const [category, setCategory] = useState("")
    return(
    <>
        <h1 >GifExpertApp </h1>
        <AddCategory setCategory = {setCategory}/>
        <hr />
       {/* <GridGif key={category} categoria={category} /> */}
         <ol>
        {
             category.map((cat)=>{
                 return <GridGif key={cat} categoria={cat} /> })                
        }
        </ol>   
    </> 
    )
}
export {GifExpertApp}
