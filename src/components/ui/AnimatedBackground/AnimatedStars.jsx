import React from 'react';
import styles from './AnimatedStars.module.css';

const AnimatedStars = () => {
  return (
    <div className={styles.starfield}>
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      
    </div>
  );
};

export default AnimatedStars;