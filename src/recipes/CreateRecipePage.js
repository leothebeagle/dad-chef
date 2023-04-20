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
    const [editRecipeNameFlag, setEditRecipeNameFlag] = useState(true);
    
    // const onIngredientFormChange = event => {
    //     const { name, value } = event.target;
    //     setIngredientFormState((prevState) => ({...prevState, [name]: value}));
    // }

    // const onIngredientFormSubmit = event => {
    //     if (ingredientFormState.ingredientName === '' || ingredientFormState.ingredientQuantity ==='') return;
    //     event.preventDefault();
    //     setIngredients(
    //         [...ingredientsList, ingredientFormState]
    //     );
    //     setIngredientFormState(ingredientFormInitialState);
    // }

    // const removeIngredient = ingredient => {
    //     setIngredients(
    //         ingredientsList.filter((i) => { 
    //             return i !== ingredient;
    //         })
    //     );
    // }

    const onRecipeNameSubmit = (recipeName) => {
        setEditRecipeNameFlag(false);
        setRecipeName(recipeName)
    }

    const headerContent = editRecipeNameFlag ? (
        <RecipeNameForm onSubmit={onRecipeNameSubmit} />
      ) : (
        <h2 onClick={() => {setEditRecipeNameFlag(true)} }>
          {recipeName}
          <span style={{ marginLeft: '10px', cursor: 'pointer' }}>✏️</span>
        </h2>
      );

    return (
        <div className="container">
            <h2>{headerContent}</h2>
            {/* <h3>Add New Ingredient</h3>
            <IngredientForm formState={ingredientFormState} onChange={onIngredientFormChange} onSubmit={onIngredientFormSubmit} />
            <IngredientTable
                ingredientData={ingredientsList}
                removeIngredient={removeIngredient}
            /> */}
        </div>
    );

}

export default CreateRecipePage;