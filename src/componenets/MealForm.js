import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class MealForm extends Component {

	renderInput = ({ input, label }) => {
		return (
			<div className="block text-gray-700 text-sm font-bold mb-2" >
				<label>{label}</label>
				<input {...input} autoComplete="off"
					className="rounded w-full py-2 px-3 border border-gray-900 leading-tight focus:outline-none focus:shadow-outline mb-6" />
			</div>

		)
	}

	submit = (formValues) => {
		console.log("PLEASE")
		this.props.onSubmit(formValues);
	};

	render() {
		console.log(this.props)
		return (
			<div className="w-full max-w-m">
				<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
					onSubmit={this.props.handleSubmit(this.submit)}


				>
					<Field
						name="Name"
						component={this.renderInput}
						label="Name" />

					<Field
						name="Image"
						component={this.renderInput}
						label="Image URL" />

					<Field
						name="Ingrediants"
						component={this.renderInput}
						label="Ingrediants" />

					<Field
						name="Instructions"
						component={this.renderInput}
						label="Instructions" />

					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default reduxForm({
	form: "MealForm",
	validate: null
})(MealForm);
