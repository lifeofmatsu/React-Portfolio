// scroll behavior when Nav link is clicked
export const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
};

// allow user to toggle light or dark theme
export const toggleTheme = (setTheme) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
}

// Email validation function
export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};