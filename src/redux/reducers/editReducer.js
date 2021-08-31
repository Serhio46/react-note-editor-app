const editReducer = (state = {}, action) => {
	if(action.type === 'EDIT-NOTE') {
		return action.payload;
	}
	if(action.type === 'EDIT-TEXT-NOTE') {
		return {
			...state,
			text: action.payload,
		}
	}
	if(action.type === 'SHOW-ITEM'){
		return action.payload;
		
	}
	return state;
}

export default editReducer;