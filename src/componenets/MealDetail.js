import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editMeal, deleteMeal, fetchMeal } from '../actions'
import MealForm from './MealForm'
import _ from 'lodash';

class MealDetail extends Component {

	componentDidMount() {
		this.props.fetchMeal(this.props.match.params.id);
	}

	onEditSubmit = (formValues) => {
		this.props.editMeal(this.props.match.params.id, { ...formValues, Id: this.props.match.params.id })
	}

	onDelete = (id) => {

	}
	render() {
		console.log("this")
		console.log(_.pick(
			this.props.meal,
			'Name',
			'Image',
			'Ingrediants',
			'Instructions'))
		return (
			<div>

				<MealForm onSubmit={this.onEditSubmit} initialValues={_.pick(
					this.props.meal,
					'Name',
					'Image',
					'Ingrediants',
					'Instructions'
				)} />
				<button className="ml-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					onClick={() => this.props.deleteMeal(this.props.match.params.id)}
				>
					Delete
			</button>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return { meal: state.meals[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchMeal, editMeal, deleteMeal })(
	MealDetail
);
