import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleNavClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <nav className={`${styles.navbar} container`}>
                <a href="#home" className={styles.navLogo}>Portfolio.</a>
                <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
                    <li><a onClick={() => handleNavClick('home')}>Beranda</a></li>
                    <li><a onClick={() => handleNavClick('about')}>Tentang</a></li>
                    <li><a onClick={() => handleNavClick('skills')}>Keahlian</a></li>
                    <li><a onClick={() => handleNavClick('projects')}>Proyek</a></li>
                    <li><a onClick={() => handleNavClick('contact')}>Kontak</a></li>
                </ul>
                <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;