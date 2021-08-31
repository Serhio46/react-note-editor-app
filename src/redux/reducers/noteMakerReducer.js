const noteMakerReducer = (state='', action) => {
	if(action.type === 'CREATE-NOTE'){
		return action.payload;
	}
	return state;
}

export default noteMakerReducer;