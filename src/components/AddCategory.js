import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handlerChange = (e) =>{setInputValue(e.target.value)}

    const handleSubmit = (e) => { 
        e.preventDefault()
        if(inputValue.trim().length > 0)
        {
            setCategory((cate) => { return [inputValue,...cate] })
            //setCategory(inputValue)
            setInputValue("")
        }
         }

    return (
       <form onSubmit ={handleSubmit }>
        <input
            type="text"
            value = {inputValue}
            onChange = {handlerChange}
            placeholder = "Ingrese una categoria"
        /> 
        <br />
        
        </form>
    )
}

AddCategory.propTypes = {
    setCategory : PropTypes.func.isRequired
}
