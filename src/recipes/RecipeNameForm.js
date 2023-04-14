import React, { useState } from 'react';

const RecipeNameForm = (props) => {
    const initialFormState = ""

    const [ recipeName, setRecipeName ] = useState(initialFormState);
   
    const handleInputChange = (event) => {
        const { value } = event.target;
        setRecipeName(value)
    }
    return (
        <form
            onSubmit={
                (event) => {
                    event.preventDefault()
                    if (!recipeName) return
            
                    props.submitRecipeName(recipeName)
                    setRecipeName(initialFormState)
                }
            }
        >
            <label>Recipe Name</label>
            <input type="text" name="recipeName" value={recipeName} onChange={handleInputChange}/>
            <button>Submit Recipe Name</button>
        </form>
    )
}

export default RecipeNameForm;