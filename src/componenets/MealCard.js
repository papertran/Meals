import React, { Component } from 'react'

export default class MealCard extends Component {


	onClick = () => {
		console.log(this.props.meal)
	}
	render() {
		const { Name, Image } = this.props.meal;
		return (
			<div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-800"
				onClick={this.onClick}>

				<div>
					<img className="h-64 w-full object-cover"
						src={Image} alt={Name} />
				</div>

				<div className="font-bold text-xl text-center mb-2 mt-2">
					{Name}
				</div>
			</div>
		)
	}
}
