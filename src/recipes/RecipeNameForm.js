import React, { useState } from 'react';

const RecipeNameForm = ({ onSubmit, existingRecipeName }) => {
    const initialFormState = ""

    const [ recipeName, setRecipeName ] = useState(existingRecipeName);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setRecipeName(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(onSubmit) {
            onSubmit(recipeName)
        } else {
            console.log(`clicked on submit in the recipe name form. The data submitted is: ${recipeName}`)
        }
        setRecipeName(initialFormState);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="recipeName" value={recipeName} onChange={handleInputChange} placeholder={recipeName}/>
            <button>Submit</button>
        </form>
    )
}

export default RecipeNameForm;