import React, { Component } from 'react';
import IngredientTable from '../ingredients/IngredientTable';
import IngredientForm from '../ingredients/IngredientForm';
import RecipeNameForm from './RecipeNameForm';

class CreateRecipePage extends Component {
    state = {
        ingredients: [],
        recipeName: ""
    };

    removeIngredient = index => {
        const { ingredients } = this.state;
    
        this.setState({
            ingredients: ingredients.filter((ingredient, i) => { 
                return i !== index;
            })
        });
    }

    submitRecipeName = (recipeName) => {
        this.setState({
            recipeName: recipeName
        })
    } 

    submitIngredient = ingredient => {
        this.setState({
            ingredients: [...this.state.ingredients, ingredient]
        });
    }

    render() {
        const { ingredients, recipeName } = this.state;
        
        return (
            <div className="container">
                <h1>Create a Recipe</h1>
                <h2>{recipeName}</h2>
                <IngredientTable
                    ingredientData={ingredients}
                    removeIngredient={this.removeIngredient}
                />
                <h3>Add New Ingredient</h3>
                <IngredientForm handleSubmit={this.submitIngredient} />
                <RecipeNameForm submitRecipeName={this.submitRecipeName}/>
            </div>
        );
    }
}

export default CreateRecipePage;