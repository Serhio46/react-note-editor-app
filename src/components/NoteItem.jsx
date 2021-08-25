
function NoteItem({ item, removeNode, editNote, showNote }) {

	const { date, text, id } = item;

	const removeItem = () => {
		removeNode(id)
	};

	const editItem = () => {
		editNote(id)
	}

	return (
		<div className='noteItem'>
			<div onClick={() => showNote(id)}>
				<div className="noteItem__date">
					<div>{date}</div>
				</div>
				<div className="noteItem__content">
					{text}
				</div>
				<div className="noteItem__tegs">
					#react, #redux
				</div>
			</div>
			{<div className="noteItem__control">
				<div onClick={editItem} className="noteItem__edit">
					<img height={20} width={20} src="img/pencil.png" alt="edit" />
					<button>Редактировать</button>
				</div>
				<div onClick={removeItem} className="noteItem__edit">
					<img height={16} width={16} src="img/garbage.png" alt="edit" />
					<button >Удалить</button>
				</div>
			</div>}
		</div>
	);
}

export default NoteItem;