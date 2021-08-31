import React from 'react';
import { editNote, showItem } from '../redux/actions/editAction';
import { fetchRemoveNote } from '../redux/actions/notesListAction';
import { showNote, setVisible } from '../redux/actions/modalAction';

import { useDispatch } from 'react-redux';


const NoteItem = React.memo(function NoteItem({ item }) {

	const dispatch = useDispatch();

	const { date, text, id, tegs } = item;

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
			<div onClick={() => showingNote()}>
				<div className="note-item__date">
					<div>{date}</div>
				</div>
				<div className="note-item__content">
					{hash(text)}
				</div>
				<div className="note-item__tegs">
					{tegs && tegs.map((item, index) => <span key={index}>{item + ' '}</span>)}
				</div>
			</div>
			{<div className="note-item__control">
				<div onClick={() => editItem()} className="note-item__edit">
					<img height={20} width={20} src={"/img/pencil.png"} alt="edit" />
					<button>Редактировать</button>
				</div>
				<div onClick={() => removeNote()} className="note-item__edit">
					<img height={16} width={16} src="/img/garbage.png" alt="edit" />
					<button >Удалить</button>
				</div>
			</div>}
		</div>
	);
})

export default NoteItem;