import React from 'react';

const IngredientForm = () => {

    initialState = {
        ingredientName: '',
        quantity: ''
    };

    state = this.initialState;

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.submitIngredient(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { ingredientName, quantity } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="ingredientName">Ingredient Name</label>
                <input 
                    type="text" 
                    name="ingredientName" 
                    id="ingredientName"
                    value={ingredientName} 
                    onChange={this.handleChange} />
                <label for="quantity">Quantity</label>
                <input 
                    type="text" 
                    name="quantity" 
                    id="quantity"
                    value={quantity} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default IngredientForm;