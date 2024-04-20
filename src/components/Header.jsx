import React from 'react';
import Nav from './Nav';

const Header = ({ scrollToSection, aboutRef, experienceRef, portfolioRef, contactRef }) => {
    return (
        <header>
            <div>
                <a className='name-inline' href='/'> 
                    <h1>Jus Ferrell</h1>
                    <h3>they/them</h3>
                </a>
                <h2>Computer Science Student | MERNG Stack Engineer</h2>
                <p>I dabble in minimalist, engaging, and accessible virtual experiences.</p>
            </div>
            <Nav 
                scrollToSection={scrollToSection}
                aboutRef={aboutRef}
                experienceRef={experienceRef}
                portfolioRef={portfolioRef}
                contactRef={contactRef}
            />
            
        </header>
    );
};


export default Header;
