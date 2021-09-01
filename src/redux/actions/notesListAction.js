import axios from "axios";

const hashTegs = (text) => {
	const arr = text.split(' ');
	const tegs = [];
	arr.forEach(item => item[0] === '#' ? tegs.push(item) : null);
	return tegs;
}

//Первая загрузка приложения 
export const fetchLoadAdd = () => (dispatch) => {
	axios.get('https://612f3bd95fc50700175f14f4.mockapi.io/notes').then(({ data }) => {
		return dispatch({ type: 'LOAD-NOTES', payload: data });
	});
}

//Добавление задачи в стейт
export const fetchAddNote = (text) => (dispatch) => {

	const date = new Date();
	const change = (param) => param <= 9 ? `0${param}` : param;

	const day = change(date.getDate());
	const month = change(date.getMonth() + 1);
	const hours = change(date.getHours());
	const minutes = change(date.getMinutes());

	const time = `${day}/${month}, ${hours}:${minutes}`;

	const obj = {
		id: text + day + hours + minutes,
		date: time,
		text: text,
		tegs: hashTegs(text),
	}

	axios.post('https://612f3bd95fc50700175f14f4.mockapi.io/notes', obj)
	return dispatch({ type: 'ADD-TO-LIST', payload: obj });
};

//Удаление задачи из стейт и сервер
export const fetchRemoveNote = (id) => (dispatch) => {
	console.log(id)
	axios.delete(`https://612f3bd95fc50700175f14f4.mockapi.io/notes/${id}`); //каким образом вот эта строка может заставлять делать ререндер все приложение
	return dispatch({ type: 'REMOVE-NOTE', payload: id });
};

//Сохранение изменений в стейт и на сервере
export const saveEdit = (obj) => (dispatch) => {
	obj.tegs = hashTegs(obj.text);
	axios.put(`https://612f3bd95fc50700175f14f4.mockapi.io/notes/${obj.id}`, obj);
	return dispatch({ type: 'SAVE-EDIT', payload: obj, })

};

