import { combineReducers } from 'redux';

import noteMakerReducer from './noteMakerReducer';
import notesListReducer from './notesListReducer';
import editReducer from './editReducer';
import modalReducer from './modalReducer';

const rootReduser = combineReducers({
	noteMakerReducer,
	notesListReducer,
	editReducer,
	modalReducer,
});

export default rootReduser;