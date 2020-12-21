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
					href='https://docs.google.com/viewer?url=raw.githubusercontent.com/RodrigoJPT/portfolio/af73ff21dffee4927ed73a561b49c293ebf37967/public/media/Resume.pdf'
					target='_blank'
					rel='noreferrer'>
					Resume
				</a>
			</nav>
		</header>
	);
};

export default Header;
