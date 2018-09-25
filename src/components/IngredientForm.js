import React from "react";

const IngredientForm = props => {
	return (
		<div className="container">
			<p>
				Ingredient Name
				<br />
				<input type="text" />
			</p>

			<p>
				Quantity
				<br />
				<input type="text" />
			</p>
		</div>
	);
};

export default IngredientForm;
