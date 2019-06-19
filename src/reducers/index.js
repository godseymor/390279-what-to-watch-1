import {combineReducers} from "redux";
import {reducer as filmsData} from "./films-data/films-data";

const reducer = combineReducers({
  filmsData
});

export default reducer;
