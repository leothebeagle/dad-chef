import React, { useState } from 'react';
import IngredientTable from '../ingredients/IngredientTable';
import IngredientForm from '../ingredients/IngredientForm';
import RecipeNameForm from './RecipeNameForm';

const CreateRecipePage = () => {
    
    const ingredientsListInitialState = [];

    const ingredientFormInitialState = {
        ingredientName:"",
        ingredientQuantity:""
    }

    const [ingredientsList, setIngredients] = useState(ingredientsListInitialState);
    const [ingredientFormState, setIngredientFormState] = useState(ingredientFormInitialState);
    const [recipeName, setRecipeName] = useState("");

    const onIngredientFormChange = event => {
        const { name, value } = event.target;
        setIngredientFormState((prevState) => ({...prevState, [name]: value}));
    }

    const onIngredientFormSubmit = event => {
        if (ingredientFormState.ingredientName == '' || ingredientFormState.ingredientQuantity =='') return;
        event.preventDefault();
        setIngredients(
            [...ingredientsList, ingredientFormState]
        );
        setIngredientFormState(ingredientFormInitialState);
    }

    const removeIngredient = ingredient => {
        setIngredients(
            ingredientsList.filter((i) => { 
                return i !== ingredient;
            })
        );
    }

    const submitRecipeName = (recipeName) => {
        setRecipeName(
            recipeName
        )
    } 

    return (
        <div className="container">
            <h1>Create a Recipe</h1>
            <h2>{recipeName}</h2>
            <IngredientTable
                ingredientData={ingredientsList}
                removeIngredient={removeIngredient}
            />
            <h3>Add New Ingredient</h3>
            <IngredientForm formState={ingredientFormState} onChange={onIngredientFormChange} onSubmit={onIngredientFormSubmit} />
            {recipeName === '' ? <RecipeNameForm submitRecipeName={submitRecipeName} /> : null }
            
        </div>
    );

}

export default CreateRecipePage;