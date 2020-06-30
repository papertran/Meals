import '../assets/main.css'
import React, { Component } from 'react'
import { Router, Route } from "react-router-dom"

import MealList from './MealList'
import MealDetail from './MealDetail'
import history from "../history"
import MealCreate from './MealCreate'

export default class App extends Component {
	render() {
		return (
			<div className="text-lg antialiased text-gray-800">
				<Router history={history}>
					<Route path="/" exact component={MealList} />
					<Route path="/create" exact component={MealCreate} />
					<Route path="/meal/:id" component={MealDetail} />
				</Router>
			</div>
		)
	}
}
