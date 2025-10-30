import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button/Button';
import AnimatedBackground from '../ui/AnimatedBackground/AnimatedBackground'; // <-- IMPOR
import styles from './Hero.module.css';

const Hero = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section id="home" className={`${styles.hero} ${inView ? 'animate-fade-in' : ''}`} ref={ref}>
            <AnimatedBackground /> {/* <-- TAMBAHKAN DI SINI */}
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Halo, Saya <span>Nama Anda</span></h1>
                <p className={styles.heroSubtitle}>Web Developer & UI/UX Enthusiast</p>
                <p className={styles.heroDescription}>Saya menciptakan pengalaman digital yang indah dan fungsional.</p>
                <div className={styles.heroButtons}>
                    <Button href="#projects">Lihat Proyek Saya</Button>
                    <Button variant="secondary" href="#contact">Hubungi Saya</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;