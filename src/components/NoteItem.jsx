import React from 'react';

import { editNote, showItem } from '../redux/actions/editAction';
import { fetchRemoveNote } from '../redux/actions/notesListAction';
import { showNote, setVisible } from '../redux/actions/modalAction';

import { useDispatch } from 'react-redux';

import pencil from '../images/pencil.png';
import garbage from '../images/garbage.png';


const NoteItem = React.memo(function NoteItem({ item }) {

	const dispatch = useDispatch();

	const { date, text, id, tegs } = item;
	console.log(id);

	//преобразование текста в теги
	const hash = (text) => {
		let arr = text.split(' ');
		return (
			<div>
				{arr.map((item, index) => item[0] === '#'
					?
					<span key={`${item}_${index}`}>{item + ' '}</span>
					:
					item + ' '
				)}
			</div>
		)
	}

	const removeNote = () => {
		dispatch(fetchRemoveNote(id));
	};

	const editItem = () => {
		dispatch(editNote(item));
		dispatch(setVisible())
	}

	const showingNote = () => {
		dispatch(showItem(item))
		dispatch(showNote())
	}

	return (
		<div className='note-item'>
			<div onClick={() => showingNote()} className="note-item__click">
				<div className="note-item__date">
					<div>{date}</div>
				</div>
				<div className="note-item__content">
					{hash(text)}
				</div>
			</div>
			<div className="note-item__tegs">
					{tegs.length > 0 && <div className="hr1" style={{ borderTop: "2px solid #dcdcdc ", margin: 5 }}></div>}
					{tegs && tegs.map((item, index) => <span key={index}>{item + ' '}</span>)}
				</div>
			{<div className="note-item__control">
				<div onClick={() => editItem()} className="note-item__edit">
					<img height={20} width={20} src={pencil} alt="edit" />
					<button>Редактировать</button>
				</div>
				<div onClick={() => removeNote()} className="note-item__edit">
					<img height={16} width={16} src={garbage} alt="edit" />
					<button >Удалить</button>
				</div>
			</div>}
		</div>
	);
})

export default NoteItem;