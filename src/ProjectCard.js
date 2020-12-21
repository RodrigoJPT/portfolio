import React from 'react';
import { useHistory } from 'react-router-dom';

const ProjectCard = ({ project, id }) => {
	const history = useHistory();

	const handleClick = () => {
		history.push(`/portfolio/${id}`);
	};
	return (
		<button className='project-card' onClick={handleClick}>
			<div
				className='project-img'
				style={{ backgroundImage: `url(${project.image})` }}></div>
			<div className='project-info'>
				<h2>{project.name}</h2>
				<ul>
					{project.tech.map((tech, index) => (
						<li key={index}>{tech}</li>
					))}
				</ul>
			</div>
		</button>
	);
};

export default ProjectCard;
