import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TechUsed from './TechUsed'


const ProjectDetails = ({ id }) => {
	const [project, setProject] = useState(null);

	useEffect(() => {
		fetch('/projects.json')
			.then((res) => res.json())
			.then((data) => {
				setProject(data[id])
				return data[id]})
			.then(project => {if(project.wakeup){
				project.wakeup.forEach(url => fetch(url));
			}})
			.catch(console.err);
	}, []);

	if (!project) {
		return <p>Loading...</p>;
	}

	return (
		<div className='details'>
			<Link style={{fontSize: '14px'}} to='/'><i className="fas fa-chevron-left"></i>{' Back'}</Link>
			<div className='detail-container'>
			<img src={project.image} alt='' />
			<div>
			<h1 className='details-title'>{project.name}</h1>
			<div className='project-info'>
				<TechUsed project={project}/>
			</div>
			<p className='details-description'>{project.description}</p>
			<div className='details-links'>
				<a href={project.link} target='_blank' rel='noreferrer'>
					Visit Site
				</a>
				{project.repo ? (
					<a href={project.repo} target='_blank' rel='noreferrer'>
						View Code
					</a>
				) : null}
				{project.video ? (
					<a href={project.video} target='_blank' rel='noreferrer'>
						Demo Video
					</a>
				) : null}
			</div>
			</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
