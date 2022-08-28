import counterReducer from "./counter";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter : counterReducer, //Can also just define as -> counterReducer (This basically means counterReducer : counterReducer)
});

export default allReducers;
