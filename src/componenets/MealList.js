import '../assets/main.css'
import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchMeals } from "../actions"

import MealCard from './MealCard'
class MealList extends Component {

	componentDidMount() {
		this.props.fetchMeals();

	}

	// Helper Function to render out meals
	renderMealsList() {
		return this.props.meals.map((meal) => {
			return (
				<MealCard meal={meal} key={meal.Id} />
			)

		})
	}


	render() {

		return (
			<>
				<div className="grid grid-cols-4 gap-4 justify-between ml-20 mr-20 mt-10">
					{this.renderMealsList()}
				</div>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		meals: Object.values(state.meals)
	};
}

export default connect(mapStateToProps, { fetchMeals })(MealList);