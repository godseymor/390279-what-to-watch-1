import {combineReducers} from "redux";
import {reducer as filmsData} from "./films-data/films-data";
import {reducer as user} from "./user/user";

const reducer = combineReducers({
  filmsData,
  user
});

export default reducer;
