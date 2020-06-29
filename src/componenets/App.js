import '../assets/main.css'
import React, { Component } from 'react'

import MealList from './MealList'
export default class App extends Component {
	render() {
		return (
			<div>
				<MealList />
			</div>
		)
	}
}
