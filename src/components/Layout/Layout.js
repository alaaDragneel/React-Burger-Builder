import React from "react";

import Auxu from "../../hoc/Auxu";

const layout = (props) => (
	<Auxu>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main>
			{props.children}
		</main>
	</Auxu>
);

export default layout;