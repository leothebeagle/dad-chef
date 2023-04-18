import React, { Component, useState } from 'react';
import IngredientTable from '../ingredients/IngredientTable';
import IngredientForm from '../ingredients/IngredientForm';
import RecipeNameForm from './RecipeNameForm';

const CreateRecipePage = () => {
    
    const ingredientsListInitialState = []

    const ingredientFormInitialState = {
        name:"",
        quantity:""
    }

    const [ingredientsList, setIngredients] = useState(ingredientsListInitialState);
    const [ingredientFormState, setIngredientFormState] = useState(ingredientFormInitialState);
    const [recipeName, setRecipeName] = useState("");

    const onIngredientFormChange = event => {
        const { name, value } = event;
        setIngredientFormState((prevState) => ({...prevState, [name]: value}));
    }

    const onIngredientFormSubmit = event => {
        if (ingredientFormState.ingredientName == '' || ingredientFormState.quantity =='') return;
        event.preventDefault();
        setIngredients(
            [...ingredientsList, ingredientFormState]
        );
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
            <IngredientForm onSubmit={onIngredientFormSubmit} onChange={onIngredientFormChange}/>
            {recipeName === '' ? <RecipeNameForm submitRecipeName={submitRecipeName} /> : null }
            
        </div>
    );

}

export default CreateRecipePage;