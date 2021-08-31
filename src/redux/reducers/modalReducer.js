const initialState = {
	visible: false,
	show: false,
}

const modalReducer = (state = initialState, action) => {
	if (action.type === 'SET-VISIBLE') {
		return {
			...state,
			visible: true,
		}
	}
	if (action.type === 'HIDE-VISIBLE') {
		return {
			visible: false,
			show: false,
		}
	}

	if (action.type === 'SHOW-NOTE') {
		return {
			visible: true,
			show: true,
		}
	}
	return state
}

export default modalReducer;