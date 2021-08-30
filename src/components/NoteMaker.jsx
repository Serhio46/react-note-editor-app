import { useSelector, useDispatch } from 'react-redux';
import { fetchAddNote, createNote } from '../redux/actions/listAction';


function NoteMaker() {

	const { note } = useSelector(({ listReducer }) => listReducer);
	const dispatch = useDispatch();

	const add = () => {
		dispatch(fetchAddNote(note));
		dispatch(createNote(''));
	}

	return (
		<div className='addNote'>
			<div className='form'>
				<textarea onChange={(e) => dispatch(createNote(e.target.value))} value={note} type="text" placeholder="Добавить задачу" className="search__input input" />
				<button onClick={add} className="btn">Добавить заметку</button>
			</div>
		</div>
	);
}

export default NoteMaker;