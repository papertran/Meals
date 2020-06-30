import '../assets/main.css'
import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom"

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
				<div key={meal.Id}>
					<Link to={`/meal/${meal.Id}`}>
						<MealCard meal={meal} />
					</Link>
				</div>
			)

		})
	}


	render() {

		return (
			<>
				<div className="grid grid-cols-4 gap-4 justify-between ml-20 mr-20 mt-10">
					{this.renderMealsList()}
				</div>
				<Link to="/create">
					<div className="text-center w-32 m-auto mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						Create Meal
						</div>
				</Link>



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