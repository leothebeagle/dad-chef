import React, {useRef} from 'react';

const IngredientForm = ({formState, onChange, onSubmit}) => {
    const { ingredientName, ingredientQuantity } = formState;
    const ingredientNameRef = useRef(null);

    const handleSubmit = (event) => {
        onSubmit(event);
        if (ingredientNameRef) {
            ingredientNameRef.current.focus()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="ingredientName">Ingredient Name</label>
            <input 
                ref={ingredientNameRef}
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