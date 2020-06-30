import mealAPI from '../apis/mealAPI';
import {
	FETCH_MEALS,
	FETCH_MEAL,
	CREATE_MEAL,
	EDIT_MEAL,
	DELETE_MEAL
} from './types';
import history from '../history'

export const fetchMeals = () => async (dispatch) => {
	const response = await mealAPI.get("/");
	dispatch({ type: FETCH_MEALS, payload: response.data });
}

export const fetchMeal = (id) => async (dispatch) => {
	const response = await mealAPI.get(`/${id}`);
	dispatch({ type: FETCH_MEAL, payload: response.data });
}
// May cause a bug if too many meals are created. This is not designed for large scale.
// Pseudo random id, hopefully its unique
export const createMeal = (formValues) => async (dispatch) => {
	const response = await mealAPI.post('/Create', { ...formValues, Id: Math.floor((Math.random() * 1000)).toString() });
	dispatch({ type: CREATE_MEAL, payload: response.data });
	history.push('/')
}

export const editMeal = (id, formValues) => async (dispatch) => {
	const response = await mealAPI.put(`/${id}`, formValues);
	dispatch({ type: EDIT_MEAL, payload: response.data });
	history.push('/')
}

export const deleteMeal = (id) => async (dispatch) => {
	await mealAPI.delete(`/${id}`);
	dispatch({ type: DELETE_MEAL, payload: id })
	history.push('/')
}