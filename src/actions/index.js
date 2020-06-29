import mealAPI from '../apis/mealAPI';
import {
	FETCH_MEALS,
	FETCH_MEAL,
	CREATE_MEAL,
	EDIT_MEAL,
	DELETE_MEAL
} from './types';

export const fetchMeals = () => async (dispatch) => {
	const response = await mealAPI.get("/");
	dispatch({ type: FETCH_MEALS, payload: response.data });
}

export const fetchMeal = (id) => async (dispatch) => {
	const response = await mealAPI.get(`/${id}`);
	dispatch({ type: FETCH_MEAL, payload: response.data });
}

export const createMeal = (formValues) => async (dispatch) => {
	const response = await mealAPI.post('/Create', { ...formValues });
	dispatch({ type: CREATE_MEAL, payload: response });
}

export const editMeal = (id, formValues) => async (dispatch) => {
	const response = await mealAPI.put(`/${id}`, formValues);
	dispatch({ type: EDIT_MEAL, payload: response.data });
}

export const deleteMeal = (id) => async (dispatch) => {
	await mealAPI.delete(`/${id}`);
	dispatch({ type: DELETE_MEAL, payload: id })
}