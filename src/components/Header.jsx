import React from 'react';
import Navigation from './Nav';

const Header = ({ scrollToSection, aboutMeRef, portfolioRef, contactRef, resumeRef }) => {
    return (
        <header className='header'>
            <div>
                <h1>Justin (Jus) Ferrell</h1>
                <h3>they/them</h3>
            </div>
            <div className="header-buttons">
                <button onClick={() => scrollToSection(aboutMeRef)}>About Me</button>
                <button onClick={() => scrollToSection(portfolioRef)}>Portfolio</button>
                <button onClick={() => scrollToSection(contactRef)}>Contact</button>
                <button onClick={() => scrollToSection(resumeRef)}>Resume</button>
            </div>
        </header>
    );
};


export default Header;
