import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchMeals } from "../actions"

class MealList extends Component {

	componentDidMount() {
		this.props.fetchMeals();

	}

	render() {
		console.log(this.props.meals)
		return (
			<div>
				Meallist
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