function Header({ search, setSearch }) {

	return (
		<div className="header">
			<div className="header__logo">Note editor</div>
			<div className="search">
				<img height={30} width={30} src="img/search.png" alt="Лупа" className="search__img" />
				<input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Поиск по тегу" className="search__input input" value={search} />
				<img height={20} width={20} src="img/close.png" alt="Крестик" className="search__close" />
			</div>
		</div>
	);
}

export default Header;