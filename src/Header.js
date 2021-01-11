import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<Link to='/'>
				<h3>{'</>'}</h3>
			</Link>
			<nav>
				<Link to='/'>Portfolio</Link>
				<Link to='/about'>About Me</Link>
				<a
					href='https://docs.google.com/viewer?url=https://github.com/RodrigoJPT/rodrigojpt.github.io/raw/main/public/media/Resume.pdf'
					target='_blank'
					rel='noreferrer'>
					Resume
				</a>
			</nav>
		</header>
	);
};

export default Header;
