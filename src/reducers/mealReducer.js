import {
	FETCH_MEALS,
	FETCH_MEAL,
	CREATE_MEAL,
	EDIT_MEAL,
	DELETE_MEAL
} from './types';
import _ from "lodash";

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_MEALS:
			return { ...state, ..._.mapKeys(action.payload, "Id") }
		case FETCH_Meal:
			return { ...state, [action.payload.Id]: action.payload }
		case CREATE_MEAL:
			return { ...state, [action.payload.Id]: action.payload }
		case EDIT_MEAL:
			return { ...state, [action.payload.Id]: action.payload }
		case DELETE_MEAL:
			return _.omit(state, action.payload);
		default:
			return state;
	}
}