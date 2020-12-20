import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<h1>Rodrigo Pereira</h1>
			<nav>
				<Link to='/about'>About</Link>
				<Link to='/portfolio'>Portfolio</Link>
			</nav>
		</header>
	);
};

export default Header;
