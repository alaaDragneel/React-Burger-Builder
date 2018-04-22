import React from "react";

import Auxu from "../../hoc/Auxu";
import classes from "./layout.css";

const layout = (props) => (
	<Auxu>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className={classes.Content}>
			{props.children}
		</main>
	</Auxu>
);

export default layout;