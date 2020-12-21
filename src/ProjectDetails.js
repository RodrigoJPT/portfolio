import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectDetails = ({ id }) => {
	const [project, setProject] = useState(null);

	useEffect(() => {
		fetch('https://rodrigojpt.github.io/portfolio/projects.json')
			.then((res) => res.json())
			.then((data) => setProject(data[id]))
			.catch(console.err);
	}, []);

	if (!project) {
		return <p>Loading...</p>;
	}

	return (
		<div className='details'>
			<Link to='/'>{'< Back to Portfolio'}</Link>
			<img src={project.image} alt='' />
			<h1 className='details-title'>{project.name}</h1>
			<div className='project-info'>
				<ul>
					{project.tech.map((tech, index) => (
						<li key={index}>{tech}</li>
					))}
				</ul>
			</div>
			<p className='details-description'>{project.description}</p>
		</div>
	);
};

export default ProjectDetails;
