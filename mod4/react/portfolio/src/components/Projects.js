import React from 'react';
import Project from './Project'

function Projects(props) {
    const projects = [
        {
            title: "Ugly-Things",
            description: "To-do like app made in React as a practice assignment.",
            imgUrl: "https://cdn.dribbble.com/users/3885607/screenshots/9171750/desktop_-_2_2x.png",
            link: "",
            tech: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            title: "Ugly-Things",
            description: "To-do like app made in React as a practice assignment.",
            imgUrl: "https://cdn.dribbble.com/users/3885607/screenshots/9171750/desktop_-_2_2x.png",
            link: "",
            tech: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            title: "Ugly-Things",
            description: "To-do like app made in React as a practice assignment.",
            imgUrl: "https://cdn.dribbble.com/users/3885607/screenshots/9171750/desktop_-_2_2x.png",
            link: "",
            tech: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            title: "Ugly-Things",
            description: "To-do like app made in React as a practice assignment.",
            imgUrl: "https://cdn.dribbble.com/users/3885607/screenshots/9171750/desktop_-_2_2x.png",
            link: "",
            tech: ["HTML", "CSS", "JavaScript", "React"]
        }
    ]
    return (
        <section id="projects">
            <h1 className="title">PROJECTS</h1>
            {projects.map(project => <Project key={project.title} project={project}/>)}
        </section>
    );
}

export default Projects;