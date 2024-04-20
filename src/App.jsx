import React, { useRef, useState } from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { scrollToSection, toggleTheme } from './utils/helpers';


const App = () => {
    const [theme, setTheme] = useState('dark');

    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    // allow user to toggle light or dark theme

    return (
        <div className={theme}>
            <Header
                scrollToSection={scrollToSection}
                aboutMeRef={aboutRef}
                portfolioRef={portfolioRef}
                contactRef={contactRef}
                resumeRef={experienceRef}
            />
            <main>
                <section ref={aboutRef}><About /></section>
                <section ref={experienceRef}><Experience /></section>
                <section ref={portfolioRef}><Portfolio /></section>
                <section ref={contactRef}><Contact /></section>
            </main>
            <Footer />
            <button onClick={toggleTheme(setTheme)}>Toggle Theme</button>
        </div>
    );
}

export default App;