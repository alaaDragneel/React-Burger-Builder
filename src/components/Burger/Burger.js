import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from "./Burger.css";

const Burger = (props) => {
	// convert props.ingredients Object to array
	let transFormedIngredients = Object.keys(props.ingredients)
	.map(ingKey => {
		// convert the amount of ingredients Example: cheese: 2 will be [cheese, cheese]
		// console.log(ingKey, props.ingredients, [ ...Array(props.ingredients[ ingKey ]) ]);
		return [ ...Array(props.ingredients[ ingKey ]) ]
		.map((_, i) => {
			return <BurgerIngredient key={`${ingKey}-${i}`} type={ingKey} />
		});
	})
	// flatten the transFormedIngredients to can check if there i any ingredients or not
	.reduce((arr, el) => {
		// console.log(arr, el);
		return arr.concat(el);
	}, []);
	// console.log(transFormedIngredients);
	if (transFormedIngredients.length === 0) {
		transFormedIngredients = <p>Please start adding ingredients</p>;
	}
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transFormedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default Burger;