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
    const rows = props.ingredientData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.ingredientName}</td>
                <td>{row.quantity}</td>
                <td><button onClick={() => props.removeIngredient(index)}>Delete</button></td>
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