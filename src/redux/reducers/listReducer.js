const initialState = {
	notesList: [],
	note: '',
	editNote: {},
	visible: false,
	show: false,
}

const listReducer = (state = initialState, action) => {

	switch (action.type) {
		case 'LOAD-NOTES': //Согласование с сервером
			return {
				...state,
				notesList: action.payload,
			};
		//break;
		case 'ADD-TO-LIST': //Добавление задачи
			return {
				...state,
				notesList: [...state.notesList, action.payload],
			};
		//break;
		case 'CREATE-NOTE': //Управляемый ввод задачи+
			return {
				...state,
				note: action.payload,
			};
		//break;
		case 'REMOVE-NOTE':	//Удаление задачи+
			const filtered = state.notesList.filter(item => item.id !== action.payload);
			return {
				...state,
				notesList: filtered,
			};
		//break;
		case 'EDIT-NOTE': //Редактировать задачу+
			const currentItem = state.notesList.find(item => item.id === action.payload);
			return {
				...state,
				editNote: currentItem,
				visible: true,
			}
		//break;
		case 'EDIT-TEXT-NOTE': //Управляемый ввод редактирования задачи+
			const obj = { ...state.editNote };
			obj.text = action.payload
			return {
				...state,
				editNote: obj,
			}
		//break;
		case 'SAVE-EDIT':  //Сохранение изменений+
			const currentIndex = state.notesList.findIndex(item => item.id === action.payload.id);
			const arr = [...state.notesList];
			arr[currentIndex] = action.payload;
			return {
				...state,
				notesList: arr,
				editNote: [],
				visible: false,
			}
		//break;
		case 'SHOW-NOTE':	//Просмотр задачи+
			const showtItem = state.notesList.find(item => item.id === action.payload);
			return {
				...state,
				editNote: showtItem,
				visible: true,
				show: true,
			}
		//break;
		case 'CLOSE-MODAL':  //Закрыть модалоьное окно
			return {
				...state,
				editNote: [],
				visible: false,
				show: false,
			}
		//break;
		default:
			return state;
	}
}

export default listReducer;