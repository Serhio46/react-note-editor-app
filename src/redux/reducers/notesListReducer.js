
const notesListReducer = (state = [], action) => {
	if(action.type === 'LOAD-NOTES') {
		return action.payload;
	}
	if(action.type === 'ADD-TO-LIST'){
		return [...state, action.payload]
	}
	if(action.type === 'REMOVE-NOTE') {
		const filtered = state.filter(item => item.id !== action.payload);
		return filtered
	} 
	if(action.type === 'SAVE-EDIT') {//объект передаем
		const currentIndex = state.findIndex(item => item.id === action.payload.id);
			const arr = [...state];
			arr[currentIndex] = action.payload;
			return arr;
	}
	return state
}

export default notesListReducer;
