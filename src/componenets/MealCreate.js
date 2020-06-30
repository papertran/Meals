import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMeal } from '../actions'
import MealForm from './MealForm'

class MealCreate extends Component {

	onSubmit = (formValues) => {
		this.props.createMeal(formValues);
	};

	render() {
		return (
			<div className="">
				<MealForm onSubmit={this.onSubmit} />
			</div>
		)
	}
}

export default connect(null, { createMeal })(MealCreate)