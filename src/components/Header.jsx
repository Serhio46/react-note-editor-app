import React from 'react';

import searchlogo from '../images/search.png';
import close from '../images/close.png';

const Header = React.memo(


	function Header({ search, setSearch }) {
		return (
			<div className="header">
				<div className="header__logo">Note editor</div>
				<div className="search">
					<img height={30} width={30} src={searchlogo} alt="Лупа" className="search__img" />
					<input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Поиск по тегу" className="search__input input" value={search} />
					<img onClick={() => setSearch('')} height={20} width={20} src={close} alt="Крестик" className="search__close" />
				</div>
			</div>
		);
	}
)

export default Header;