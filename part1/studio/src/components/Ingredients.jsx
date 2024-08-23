import React from "react";
import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    let ingredients = [
        '1/2 a large, seedless English cucumber (about 6 to 7 ounces), chopped',
        '1/2 a green bell pepper, chopped',
        '1 cup (about 6 ounces) cherry or grape tomatoes, halved',
        '1/4 cup kalamata olives', 
        '1/4 small red onion, thinly sliced'
    ];

    return (
        <div>
            <h3>What You'll Need</h3>
            <ul className={styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    );
}