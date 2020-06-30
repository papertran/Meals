import '../assets/main.css'
import React, { Component } from 'react'
import { Router, Route } from "react-router-dom"

import MealList from './MealList'
import MealDetail from './MealDetail'
import MealCreate from './MealCreate'
import history from "../history"

export default class App extends Component {
	render() {
		return (
			<div className="text-lg antialiased text-gray-800">
				<Router history={history}>
					<Route path="/" exact component={MealList} />
					<Route path="/meal/{id}" exact component={MealDetail} />
					<Route path="/meal/create" exact component={MealCreate} />


				</Router>
			</div>
		)
	}
}
