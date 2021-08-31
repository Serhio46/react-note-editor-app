export const editNote = (obj) => ({
	type: 'EDIT-NOTE',
	payload: obj,
})

export const editText = (value) => ({
	type: 'EDIT-TEXT-NOTE',
	payload: value,
})

export const showItem = (obj) => ({
	type: 'SHOW-ITEM',
	payload: obj,
})