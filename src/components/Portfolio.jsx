import React from 'react';
import Project from './Project';

const projects = [
	{
		title: 'Book Search Engine',
		description: 'Find your next great read instantly.',
		image: 'src/assets/BookFinderLogo_recolored.svg',
		deployedUrl: 'https://book-search-engine-ff7r.onrender.com/',
		repoUrl: 'https://github.com/lifeofmatsu/Book-Search-Engine.git'
	},
	{
		title: 'Flower Moon Tea',
		description: 'Savor the essence of nature in every sip.',
		image: 'src/assets/Flower-Moon-Tea-Logo.jpg',
		deployedUrl: 'https://limitless-retreat-12917-346bd60bafc7.herokuapp.com/',
		repoUrl: 'https://github.com/lifeofmatsu/flower-moon-tea.git'
	},
	{
		title: `The Vagabond's Watch`,
		description: 'Track your travels elegantly.',
		image: 'src/assets/Vagabond-Watch-Logo.jpg',
		deployedUrl: 'https://lifeofmatsu.github.io/the-vagabonds-watch/',
		repoUrl: 'https://github.com/lifeofmatsu/the-vagabonds-watch'
	},
	{
		title: 'World Weather Dashboard',
		description: 'Weather insights at a global scale.',
		image: 'src/assets/World-Weather-Dashboard.jpg',
		deployedUrl: 'https://lifeofmatsu.github.io/matsu-weather-forecast/',
		repoUrl: 'https://github.com/lifeofmatsu/matsu-weather-forecast.git'
	},
    {
		title: `Zeo University Hub`,
		description: 'Assuage your college fears with our college info site.',
		image: 'src/assets/Zeo-Logo.png',
		deployedUrl: 'https://zeo-university-hub.onrender.com/',
		repoUrl: 'https://github.com/Erik-Aku/Zeo-University-Hub.git'
	},
	{
		title: `The Salaryman's Calendar`,
		description: 'Organize your busy life efficiently.',
		image: 'src/assets/Salaryman-Calendar-Logo.jpg',
		deployedUrl: 'https://lifeofmatsu.github.io/matsu-workday-scheduler/',
		repoUrl: 'https://github.com/lifeofmatsu/matsu-workday-scheduler.git'
	},
	{
		title: 'Need Notes Now',
		description: 'Quick notes, faster thoughts.',
		image: 'src/assets/Need-Notes-Now-Logo.jpg',
		deployedUrl: 'https://lifeofmatsu.github.io/matsu-notes-app/',
		repoUrl: 'https://github.com/lifeofmatsu/matsu-notes-app.git'
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
