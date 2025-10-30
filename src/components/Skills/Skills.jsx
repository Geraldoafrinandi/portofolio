import React from 'react';
import SkillCard from './SkillCard/SkilCard';
import './Skills.css'; 

import { FaReact, FaVuejs, FaFigma, FaNodeJs, FaLaravel } from 'react-icons/fa';
import { SiFlutter, SiMysql, SiNextdotjs } from 'react-icons/si';
import { DiLaravel, DiMysql } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { FaJava } from 'react-icons/fa6';

const skillsData = [
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <FaLaravel />, name: "Laravel" },
  { icon: <GrMysql />, name: "MySQL" },
  { icon: <FaVuejs />, name: "Vue.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaFigma />, name: "Figma" },
//   { icon: <FaReact />, name: "React" },
//   { icon: <FaJava />, name: "Java" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Tech & Development</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              delay={index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;