import React from 'react';

const AboutMe = () => {
    return (
        <section className="about-me">
            <h2>About Me</h2>
            <img src="public/profile_pic.jpeg" alt="Jus' Profile Photo"/>
            <p>
                My name is Justin (Jus) Ferrell, they/them. I have two dreams:
                one is to know the feeling of earning $200k/year, and the other
                is to author my own manga. You're probably here in relation to
                my first dream, to which I'm sure I'll spare no effort in
                achieving. While I did take an interesting detour through
                academia, I've always held an interest in programming. From
                2016-2017, I worked at the Navy Medical Center in Balboa as a
                Front-End Web Dev Intern, where I worked on styling (vanilla,
                Bootstrap), simple JavaScript interactivity (such as event
                listeners), and code documentation. Tech Stacks: JavaScript,
                React, MySQL, NoSQL, React, GraphQL, Java.
            </p>
        </section>
    );
};

export default AboutMe;