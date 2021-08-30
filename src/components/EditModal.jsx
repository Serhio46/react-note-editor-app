import { useSelector, useDispatch } from 'react-redux';
import { editText, saveEdit, closeModal } from '../redux/actions/listAction';


function EditModal() {

	const { visible, editNote, show } = useSelector(({ listReducer }) => listReducer)
	const dispatch = useDispatch();

	const rootClass = ['modal'];
	if (visible) {
		rootClass.push('active');
	}

	const onClickVisible = () => {
		dispatch(closeModal())
	}

	return (
		<>{!show
			?
			<div className={rootClass.join(" ")} onClick={onClickVisible}>
				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
					<textarea type="text" onChange={(e) => dispatch(editText(e.target.value))} className="search__input input" value={editNote.text} />
					<button onClick={() => dispatch(saveEdit(editNote))}>Сохранить</button>
				</div>
			</div>
			:
			<div className={rootClass.join(" ")} onClick={onClickVisible}>
				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
					<div type="text" className="search__input input showNote" value={editNote.text} >{editNote.text}</div>
					<div>{editNote.tegs.map(item => <span>{item + ' '}</span>)}</div>
					<button onClick={onClickVisible}>Закрыть</button>
				</div>
			</div>
		}	</>
	);
}

export default EditModal;