import React from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '../ui/Card/Card.jsx';
import Button from '../ui/Button/Button.jsx';
import styles from './Projects.module.css';
import klinikImage from '../../assets/images/klinik.png';
import capstone from '../../assets/images/capstone.png';
import PBL from '../../assets/images/PBL.png';
import perpus from '../../assets/images/perpus.png';

const projectData = [
    { id: 1, title: 'Sistem Klinik Sejahtera', tech: 'Flutter, PHP', image: klinikImage, liveUrl: '#', githubUrl: 'https://github.com/Geraldoafrinandi/project-mobile.git' },
    { id: 2, title: 'NutriVision', tech: 'Flutter , Node Js', image: capstone, liveUrl: '#', githubUrl: 'https://github.com/Geraldoafrinandi/capstone.git' },
    { id: 3, title: 'Sistem Penjadwalan Sidang Tugas Akhir', tech: 'Laravel, Bootsrap', image: PBL, liveUrl: '#', githubUrl: 'https://github.com/Geraldoafrinandi/jadwal-sidang.git' },
    { id: 4, title: 'PerpusKita', tech: 'Node Js, Vue', image: perpus, liveUrl: '#', githubUrl: 'https://github.com/Geraldoafrinandi/perpus-topsus.git' },
];

const Projects = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section id="projects" className={`section-padding ${inView ? 'animate-fade-in' : ''}`} ref={ref}>
            <div className="container">
                <h2 className="section-title">My Project</h2>
                <div className={styles.projectsGrid}>
                    {projectData.map(project => (
                        <Card key={project.id} className={styles.projectCard}>
                            <img src={project.image} alt={project.title} className={styles.projectImage} />
                            <div className={styles.projectInfo}>
                                <h3>{project.title}</h3>
                                <p>{project.tech}</p>
                                <div className={styles.projectLinks}>
                                    {/* <Button href={project.liveUrl}>Lihat Demo</Button> */}
                                    {/* <Button variant="secondary" href={project.githubUrl}>GitHub</Button> */}
                                    <Button href={project.githubUrl}>GitHub</Button>
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