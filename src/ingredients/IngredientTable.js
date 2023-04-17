import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Ingredient</th>
                <th>Quantity</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => { 
    console.log(props)
    const rows = props.ingredientData.map((ingredient, index) => {
        return (
            <tr key={index}>
                <td>{ingredient.ingredientName}</td>
                <td>{ingredient.quantity}</td>
                <td><button onClick={() => props.removeIngredient(ingredient)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const IngredientTable = (props) => {
    const { ingredientData, removeIngredient } = props;
        return (
            <table>
                <TableHeader />
                <TableBody ingredientData={ingredientData} removeIngredient={removeIngredient} />
            </table>
        );
}

export default IngredientTable;