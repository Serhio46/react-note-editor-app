function EditModal({ visible, setVisible, text, saveEdit, id, setEdit }) {

	const rootClass = ['modal'];
	if (visible) {
		rootClass.push('active');
	}

	const onClickVisible = () => {
		setVisible(false);
		setEdit('');
	}

	const onClickSave = () => {
		setVisible(false);
		setEdit('');
		saveEdit(id);
	}

	return (
		<div className={rootClass.join(" ")} onClick={onClickVisible}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<textarea type="text" onChange={(e) => setEdit(e.target.value)} className="search__input input" value={text} />
				<button onClick={onClickSave}>Сохранить</button>
			</div>
		</div>
	);
}

export default EditModal;