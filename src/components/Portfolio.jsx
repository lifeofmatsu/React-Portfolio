import React from 'react';
import Project from './Project';

const projects = [
	{
		title: 'Book Search Engine',
		description: 'Find your next great read instantly.',
		image: 'src/assets/BookFinderLogo_recolored.svg',
		deployedUrl: 'http://deployedurl.com',
		repoUrl: 'http://github.com/repo'
	},
	{
		title: 'Flower Moon Tea',
		description: 'Savor the essence of nature in every sip.',
		image: 'src/assets/Flower-Moon-Tea-Logo.jpg',
		deployedUrl: 'http://deployedurl.com',
		repoUrl: 'http://github.com/repo'
	},
	{
		title: `The Vagabond's Watch`,
		description: 'Track your travels elegantly.',
		image: 'src/assets/Vagabond-Watch-Logo.jpg',
		deployedUrl: 'http://deployedurl.com',
		repoUrl: 'http://github.com/repo'
	},
	{
		title: 'World Weather Dashboard',
		description: 'Weather insights at a global scale.',
		image: 'src/assets/World-Weather-Dashboard.jpg',
		deployedUrl: 'http://deployedurl.com',
		repoUrl: 'http://github.com/repo'
	},
	{
		title: `The Salaryman's Calendar`,
		description: 'Organize your busy life efficiently.',
		image: 'src/assets/Salaryman-Calendar-Logo.jpg',
		deployedUrl: 'http://deployedurl.com',
		repoUrl: 'http://github.com/repo'
	},
	{
		title: 'Need Notes Now',
		description: 'Quick notes, faster thoughts.',
		image: 'src/assets/Need-Notes-Now-Logo.jpg',
		deployedUrl: 'http://deployedurl.com',
		repoUrl: 'http://github.com/repo'
	}
];

const Portfolio = () => {
	return (
		<>
			<h2 className='portfolio-title'>Portfolio</h2>
			<section className='portfolio'>
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</section>
		</>
	);
};

export default Portfolio;
