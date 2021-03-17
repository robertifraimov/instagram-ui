
import React from 'react';
import './Header.scss';
import HeaderAvatar from './HeaderAvatar/HeaderAvatar';
import Menu from './Menu/Menu';

function Header() {
	return (
		<header className="Header">
			<nav>
					<ul className="nav"> 
						<li> <a href="/" className="nav-font">Instagram</a> </li>
						<li> <Menu/> </li>
						<li> <HeaderAvatar/> </li>
					</ul>
			</nav>
		</header>
	);
}

export default Header;