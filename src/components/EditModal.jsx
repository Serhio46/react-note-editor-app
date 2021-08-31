import { useSelector, useDispatch } from 'react-redux';
import { editText } from '../redux/actions/editAction';
import { closeModal } from '../redux/actions/modalAction';
import { saveEdit } from '../redux/actions/notesListAction';

function EditModal() {

	const editNote = useSelector(({ editReducer }) => editReducer);
	const { visible, show } = useSelector(({ modalReducer }) => modalReducer);

	const dispatch = useDispatch();

	const rootClass = ['modal'];
	if (visible) {
		rootClass.push('active');
	}

	const onClickVisible = () => {
		dispatch(closeModal());
	}

	const onSave = () => {
		dispatch(closeModal());
		dispatch(saveEdit(editNote));
	}

	return (
		<>{!show
			?
			<div className={rootClass.join(" ")} onClick={onClickVisible}>
				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
					<textarea type="text" onChange={(e) => dispatch(editText(e.target.value))} className="search__input input" value={editNote.text} />
					<button onClick={() => onSave()}>Сохранить</button>
				</div>
			</div>
			:
			<div className={rootClass.join(" ")} onClick={onClickVisible}>
				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
					<div type="text" className="search__input input show-note" value={editNote.text} >{editNote.text}</div>
					<div>{editNote.tegs.map(item => <span>{item + ' '}</span>)}</div>
					<button onClick={onClickVisible}>Закрыть</button>
				</div>
			</div>
		}	</>
	);
}

export default EditModal;