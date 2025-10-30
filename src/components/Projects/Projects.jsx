import React from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '../ui/Card/Card.jsx';
import Button from '../ui/Button/Button.jsx';
import styles from './Projects.module.css';

const projectData = [
    { id: 1, title: 'Proyek E-Commerce', tech: 'React, Node.js', image: '/images/project1.jpg', liveUrl: '#', githubUrl: '#' },
    { id: 2, title: 'Aplikasi Cuaca', tech: 'HTML, CSS, JS', image: '/images/project2.jpg', liveUrl: '#', githubUrl: '#' },
    { id: 3, title: 'Dashboard Admin', tech: 'React, Material-UI', image: '/images/project3.jpg', liveUrl: '#', githubUrl: '#' },
];

const Projects = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section id="projects" className={`section-padding ${inView ? 'animate-fade-in' : ''}`} ref={ref}>
            <div className="container">
                <h2 className="section-title">Proyek Saya</h2>
                <div className={styles.projectsGrid}>
                    {projectData.map(project => (
                        <Card key={project.id} className={styles.projectCard}>
                            <img src={project.image} alt={project.title} className={styles.projectImage} />
                            <div className={styles.projectInfo}>
                                <h3>{project.title}</h3>
                                <p>{project.tech}</p>
                                <div className={styles.projectLinks}>
                                    <Button href={project.liveUrl}>Lihat Demo</Button>
                                    <Button variant="secondary" href={project.githubUrl}>GitHub</Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;