import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<Link to='/'>
				<h3>{'</>'}</h3>
			</Link>
			<nav>
				<Link to='/about'>About Me</Link>
				<Link to='/portfolio'>Portfolio</Link>
			</nav>
		</header>
	);
};

export default Header;
