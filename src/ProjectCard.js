import React from 'react';
import { useHistory } from 'react-router-dom';
import TechUsed from './TechUsed'

const ProjectCard = ({ project, id }) => {
	const history = useHistory();

	const handleClick = () => {
		history.push(`/projects/${id}`);
	};
	return (
		<button className='project-card' onClick={handleClick}>
			<div
				className='project-img'
				style={{ backgroundImage: `url(${project.image})` }}></div>
			<div className='project-info'>
				<h2>{project.name}</h2>
				<div>
				<TechUsed project={project}/>
			</div>
			</div>
		</button>
	);
};

export default ProjectCard;
