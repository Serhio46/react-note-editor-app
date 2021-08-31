import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAddNote } from '../redux/actions/notesListAction';
import { createNote } from '../redux/actions/noteMakerAction';

const NoteMaker = React.memo(
	function NoteMaker() {

		const note = useSelector(({ noteMakerReducer }) => noteMakerReducer);
		const dispatch = useDispatch();

		const add = () => {
			dispatch(fetchAddNote(note));
			dispatch(createNote(''));
		}

		return (
			<div className='add-note'>
				<div className='form'>
					<textarea onChange={(e) => dispatch(createNote(e.target.value))} value={note} type="text" placeholder="Добавить задачу" className="search__input input" />
					<button onClick={add} className="btn">Добавить заметку</button>
				</div>
			</div>
		);
	})

export default NoteMaker;