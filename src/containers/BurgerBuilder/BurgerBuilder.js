import React, { Component } from "react";

import Auxu from "../../hoc/Auxu";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Model from "../../components/UI/Model/Model";
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery'; 

const INGREDIENT_PRICES = {
	salad: 0.5,
	bacon: 0.4,
	cheese: 1.6,
	meat: 1.9,
};


class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 4,
		purchaseable: false,
		purchasing: false,
	};

	updatePurchase = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		this.setState({purchaseable: sum > 0});
	};

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		this.updatePurchase(updatedIngredients);
	};


	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		this.updatePurchase(updatedIngredients);
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	}

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	}

	purchaseContinueHandler = () => {
		alert('You Continue!');
	}

	render () {
		const disableInfo = {
			...this.state.ingredients
		};

		for(let key in disableInfo) {
			disableInfo[key] = disableInfo[key] <= 0;
		}
		// {salad: true, meat: false}
		return (
			<Auxu>
				<Model show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
					<OrderSummery 
						price={this.state.totalPrice}
						purchaseCancelled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinueHandler}
						ingredients={this.state.ingredients} />
				</Model>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					purchaseable={this.state.purchaseable}
					price={this.state.totalPrice}
					disabled={disableInfo}
					orderd={this.purchaseHandler}
				/>
			</Auxu>
		);
	}
}

export default BurgerBuilder;