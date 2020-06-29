import '../assets/main.css'
import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchMeals } from "../actions"

class MealList extends Component {

	componentDidMount() {
		this.props.fetchMeals();

	}

	// Helper Function to render out meals
	renderMealsList() {
		return this.props.meals.map((meal) => {
			return (
				<div key={meal.Id}>
					<img className="h-24 w-24 overflow-hidden"
						src={meal.Image} alt={meal.Name} />
					{meal.Name}
					<a href="" className="block">Edit Meal</a>
					<a href="" className="block">Delete Meal</a>
				</div>
			)
		})
	}
	render() {
		console.log(this.props.meals)
		return (
			<div>
				<h2>Meals</h2>
				{this.renderMealsList()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		meals: Object.values(state.meals)
	};
}

export default connect(mapStateToProps, { fetchMeals })(MealList);