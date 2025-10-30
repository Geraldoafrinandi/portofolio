import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';
import SkillCard from './SkillCard/SkilCard'; 


const skillsData = [
    { id: 1, name: 'HTML5', icon: 'fab fa-html5' },
    { id: 2, name: 'CSS3', icon: 'fab fa-css3-alt' },
    { id: 3, name: 'JavaScript', icon: 'fab fa-js-square' },
    { id: 4, name: 'React', icon: 'fab fa-react' },
    { id: 5, name: 'Node.js', icon: 'fab fa-node-js' },
    { id: 6, name: 'Git', icon: 'fab fa-git-alt' },
];

const Skills = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section id="skills" className={`section-padding ${inView ? 'animate-fade-in' : ''}`} ref={ref}>
            <div className="container">
                <h2 className="section-title">Keahlian Saya</h2>
                <div className={styles.skillsGrid}>
                    {skillsData.map(skill => (
                        <SkillCard key={skill.id} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;