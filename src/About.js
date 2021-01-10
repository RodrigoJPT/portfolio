import React from 'react';

const About = () => {
	return (
		<div className='about'>
			<div className='about-container'>
				<img
					src='https://rodrigojpt.github.io/media/myself.jpeg'
					alt='Rodrigo outdoors'
					className='profile-pic'
				/>
				<p className='about-description'>
					Hello. My name is <b>Rodrigo Pereira</b>, and I am a full stack web developer based in Washington, DC. I specialize in creating web apps with Javascript and the tools built on top of it, but I can bring my skills to just about any development environment. I have an affinity for the front end, and my priorities are always keeping things simple, clean, and efficient. Outside of being a developer, my
					passions include combat sports (particularly submission grappling/jiu jitsu), filming/editing videos, and playing music! I
					look forward to getting to know you!
				</p>
			</div>
		</div>
	);
};

export default About;
