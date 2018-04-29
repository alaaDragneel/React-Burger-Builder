import React from "react";

import Auxu from "../../../hoc/Auxu/Auxu";
import Button from "../../UI/Button/Button";

const  OrderSummery = (props) => {
    const ingredientsSummery = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>:
                {props.ingredients[igKey]}
            </li>
        );

    });

    return (
        <Auxu>
            <h3>Your Order</h3>
            <p> A delicious burger with the following ingredients: </p>
            <ul>
               {ingredientsSummery}
            </ul>
            <p>
                <strong>
                    Total Price: {props.price.toFixed(2)}
                </strong>
            </p>
            <p> Continue to Checkout? </p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Auxu>
    );

};

export default OrderSummery;