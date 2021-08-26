import NoteItem from './NoteItem';

function Notes({ notesList, removeNode, editNote, showNote, setNotesList, search }) {

	const renderNotes = () => {
		const filtered = notesList.filter(item => item.tegs.join(' ').toUpperCase().includes(search.toUpperCase()));
		return filtered.reverse().map((item, index) =>
			<NoteItem
				notesList={notesList}
				setNotesList={setNotesList}
				showNote={showNote} removeNode={removeNode}
				editNote={editNote}
				item={item}
				key={`${item}_${index}`} />)
	}

	return (
		<div className="notes">
			<div className="title">
				<h1>{notesList.length > 0 ? 'Список текущих задач' : 'У Вас нет текущих задач'}</h1>
			</div>
			<div className="list">
				{renderNotes()}
			</div>
		</div>
	);
}

export default Notes;