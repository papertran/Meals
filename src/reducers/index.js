import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import mealReducer from "./mealReducer"
export default combineReducers({
	form: formReducer,
	meal: mealReducer
});
