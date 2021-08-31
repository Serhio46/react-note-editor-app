import React, { useEffect } from 'react';
import NoteItem from './NoteItem';
import { fetchLoadAdd } from '../redux/actions/notesListAction';
import { useSelector, useDispatch } from 'react-redux';

const Notes = React.memo(
	function Notes({ search }) {

		const notesList = useSelector(({ notesListReducer }) => notesListReducer);
		const dispatch = useDispatch();

		useEffect(() => {
			dispatch(fetchLoadAdd())
		}, [dispatch])

		const renderNotes = () => {
			const filtered = notesList.filter(item => item.tegs.join(' ').toUpperCase().includes(search.toUpperCase()));
			return filtered.reverse().map((item, index) =>
				<NoteItem item={item} key={`${item}_${index}`} />)
		}

		return (
			<div className="notes">
				<div className="title">
					<h1>{notesList.length > 0 ? 'Список текущих задач' : 'У Вас нет текущих задач'}</h1>
				</div>
				<div className="list">
					{notesList && renderNotes()}
				</div>
			</div>
		);
	}
)

export default Notes;