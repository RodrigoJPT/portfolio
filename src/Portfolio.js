import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
	const [projects, setProjects] = useState(null);

	useEffect(() => {
		fetch('/projects.json')
			.then((res) => res.json())
			.then((data) => setProjects(data))
			.catch(console.err);
	}, []);

	if (!projects) {
		return <p>Loading...</p>;
	}
	return (
		<div className='portfolio main'>
			<p className='description'>
				Hello. My name is{' '}
				<span style={{ color: '#44724a', fontWeight: '700' }}>
					Rodrigo Pereira
				</span>
				, and I am a{' '}
				<span style={{ color: '#44724a', fontWeight: '700' }}>
					web developer
				</span>
				.<br />
				You can <Link to='/about'>click here</Link> to learn more about me, or
				view some of my work below.
			</p>
			{projects.map((project, index) => (
				<ProjectCard key={index} project={project} id={index} />
			))}
		</div>
	);
};

export default Portfolio;
