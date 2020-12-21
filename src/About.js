import React from 'react';

const About = () => {
	return (
		<div className='about'>
			<div className='about-container'>
				<img
					src='https://rodrigojpt.github.io/portfolio/media/myself.jpeg'
					alt='Rodrigo outdoors'
					className='profile-pic'
				/>
				<p className='about-description'>
					Hello. My name is{' '}
					<span style={{ color: '#44724a', fontWeight: '700' }}>
						Rodrigo Pereira
					</span>
					, and I am a{' '}
					<span style={{ color: '#44724a', fontWeight: '700' }}>
						web developer
					</span>{' '}
					based in{' '}
					<span style={{ color: '#44724a', fontWeight: '700' }}>
						Washington, DC.
					</span>{' '}
					I specialize in creating{' '}
					<span style={{ color: '#44724a', fontWeight: '700' }}>web apps</span>{' '}
					with{' '}
					<span style={{ color: '#44724a', fontWeight: '700' }}>
						Javascript
					</span>{' '}
					and the tools built on top of it, but I can bring my skills to just
					about any development environment. Outside of being a developer, my
					passions include{' '}
					<span style={{ color: '#44724a', fontWeight: '700' }}>
						combat sports
					</span>{' '}
					{'(particularly,'}{' '}
					<span style={{ color: '#44724a', fontWeight: '700' }}>
						submission grappling/jiu jitsu
					</span>
					{'), filming and editing '}
					<span style={{ color: '#44724a', fontWeight: '700' }}>videos</span>
					{', '}
					and playing{' '}
					<span style={{ color: '#44724a', fontWeight: '700' }}>music!</span> I
					look forward to getting to know you!
				</p>
			</div>
		</div>
	);
};

export default About;
