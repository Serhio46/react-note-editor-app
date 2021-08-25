import NoteItem from './NoteItem';

function Notes({ notesList, removeNode, editNote, showNote }) {

	return (
		<div className="notes">
			<div className="title">
				<h1>{notesList.length > 0 ? 'Список текущих задач' : 'У Вас нет текущих задач'}</h1>
			</div>
			<div className="list">
				{notesList.map((item, index) => <NoteItem showNote={showNote} removeNode={removeNode} editNote={editNote} item={item} key={`${item}_${index}`} />)}
			</div>

		</div>
	);
}

export default Notes;