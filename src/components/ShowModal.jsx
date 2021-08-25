function ShowModal( {visible, setVisible, text}) {

	const rootClass = ['modal'];
	if (visible) {
		rootClass.push('active');
	}

	const onClickVisible = () => {
		setVisible(false);
	}

	return (
		<div className={rootClass.join(" ")} onClick={onClickVisible}>
			<div className="modalContent" onClick={(e) => e.stopPropagation()}>
				<div type="text" className="search__input input showNote" value={text} >{text}</div>
				<button onClick={onClickVisible}>Закрыть</button>
			</div>
		</div>
	);
}

export default ShowModal;