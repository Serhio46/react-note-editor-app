
function NoteItem({ item, removeNode, editNote, showNote, setNotesList, notesList  }) {

	const { date, text, id } = item;

	//Добавление тегов
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

	const hashTegs = (text) => {
		let arr = text.split(' ');
		let tegs = [];
		arr.map(item => item[0] === '#' ? tegs.push(item) : null);
		
		//находим элемент в стейте в который нужно добавить хэштэги
		let currentItem = [...notesList].find(item => item.id === id);
		currentItem.tegs = tegs;
		console.log(currentItem);
		return tegs;
	}

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
					{hash(text)}
				</div>
				<div className="noteItem__tegs">
					{hashTegs(text).map(item => <span>{item + ' '}</span>)}
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