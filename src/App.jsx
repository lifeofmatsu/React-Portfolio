import React, { useState, useRef } from 'react';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
    const aboutMeRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);
    const resumeRef = useRef(null);

    const scrollToSection = (sectionRef) => {
        if (sectionRef && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Header
                scrollToSection={scrollToSection}
                aboutMeRef={aboutMeRef}
                portfolioRef={portfolioRef}
                contactRef={contactRef}
                resumeRef={resumeRef}
            />
            <main>
                <section ref={aboutMeRef}><AboutMe /></section>
                <section ref={portfolioRef}><Portfolio /></section>
                <section ref={contactRef}><Contact /></section>
                <section ref={resumeRef}><Resume /></section>
            </main>
            <Footer />
        </>
    );
}

export default App;