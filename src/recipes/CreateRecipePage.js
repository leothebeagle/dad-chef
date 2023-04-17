import React, { Component, useState } from 'react';
import IngredientTable from '../ingredients/IngredientTable';
import IngredientForm from '../ingredients/IngredientForm';
import RecipeNameForm from './RecipeNameForm';

const CreateRecipePage = () => {

    const ingredientsInitialState = [{
        name:"",
        quantity:""
    }]

    const [ingredients, setIngredients] = useState(ingredientsInitialState);
    const [recipeName, setRecipeName] = useState("");

    const removeIngredient = ingredient => {
        setIngredients(
            ingredients.filter((i) => { 
                return i !== ingredient;
            })
        );
    }

    const submitRecipeName = (recipeName) => {
        setRecipeName(
            recipeName
        )
    } 

    const submitIngredient = ingredient => {
        if (ingredient.ingredientName == '' || ingredient.quantity =='') return;

        setIngredients(
            [...ingredients, ingredient]
        );
    }
    
    return (
        <div className="container">
            <h1>Create a Recipe</h1>
            <h2>{recipeName}</h2>
            <IngredientTable
                ingredientData={ingredients}
                removeIngredient={removeIngredient}
            />
            <h3>Add New Ingredient</h3>
            <IngredientForm submitIngredient={submitIngredient} />
            {recipeName === '' ? <RecipeNameForm submitRecipeName={submitRecipeName} /> : null }
            
        </div>
    );

}

export default CreateRecipePage;