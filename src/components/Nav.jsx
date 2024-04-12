import React, { useState } from 'react';

const Navigation = () => {
	const [activeSection, setActiveSection] = useState('About Me');

	return (
		<nav>
			{['About Me', 'Portfolio', 'Contact', 'Resume'].map((section) => (
				<button
					key={section}
					className={activeSection === section ? 'active' : ''}
					onClick={() => setActiveSection(section)}
				>
					{section}
				</button>
			))}
		</nav>
	);
};

export default Navigation;
