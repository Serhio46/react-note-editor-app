function NoteMaker({ note, setNote, addToList }) {

	const onNoteChange = (e) => {
		setNote(e.target.value)
	}

	return (
		<div className='addNote'>
			<div className='form'>
				<textarea onChange={onNoteChange} value={note} type="text" placeholder="Добавить задачу" className="search__input input" />
				<button onClick={addToList} className="btn">Добавить заметку</button>
			</div>

		</div>
	);
}

export default NoteMaker;