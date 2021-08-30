import { combineReducers } from 'redux';

import listReducer from './listReducer';




const rootReduser = combineReducers({
	listReducer,
});

export default rootReduser;