import React from "react";

import classes from "./Model.css";
import Auxu from "../../../hoc/Auxu";
import Backdrop from "../Backdrop/Backdrop";

const model = (props) => (
	<Auxu>
		<Backdrop show={props.show} clicked={props.modelClosed}/>
	    <div
	        className={classes.Modal} 
	        style={{
	            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
	            opacity: props.show ? '1' : '0'
	        }}
	    >
	        {props.children}
	    </div>
    </Auxu>
);

export default model;