import React from 'react';
import styles from './SkillCard.module.css'; 

const SkillCard = ({ name, icon }) => {
    return (
        <div className={styles.skillCard}>
            <i className={`${icon} ${styles.skillIcon}`}></i>
            <h3>{name}</h3>
        </div>
    );
};

export default SkillCard;