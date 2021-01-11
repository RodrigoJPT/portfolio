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
		<div className='portfolio'>
			<p className='description'>
				Hello. My name is <b>Rodrigo Pereira</b>, and I am a <b>full stack developer</b> with an affinity for the front end.<br />
				You can <Link to='/about'>click here</Link> to learn more about me, or
				view some of my work below:
			</p>
			<div className='project-gallery'>
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} id={index} />
				))}
			</div>
		</div>
	);
};

export default Portfolio;
