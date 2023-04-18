import React from 'react';

const IngredientForm = ({formState, onChange, onSubmit}) => {
    const { ingredientName, ingredientQuantity } = formState;

    return (
        <form onSubmit={onSubmit}>
            <label for="ingredientName">Ingredient Name</label>
            <input 
                type="text" 
                name="ingredientName" 
                id="ingredientName"
                value={ingredientName} 
                onChange={onChange} />
            <label for="ingredientQuantity">Quantity</label>
            <input 
                type="text" 
                name="ingredientQuantity" 
                id="ingredientQuantity"
                value={ingredientQuantity} 
                onChange={onChange} />
            <button type="submit">
                Submit
            </button>
        </form>
    );
}

export default IngredientForm;