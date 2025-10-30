import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const [activeSection, setActiveSection] = useState('home');
    const sectionsRef = useRef({}); 

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); 

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                sectionsRef.current[id] = element;
                observer.observe(element);
            }
        });

        return () => {
            Object.values(sectionsRef.current).forEach(element => {
                if (element) observer.unobserve(element);
            });
        };
    }, []); 

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const getLinkClass = (id) => {
        return activeSection === id ? `${styles.activeLink}` : '';
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <nav className={`${styles.navbar} container`}>
                <a href="#home" className={styles.navLogo}>Portfolio.</a>
                
                <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
                    <li><a onClick={() => handleNavClick('home')} className={getLinkClass('home')}>Home</a></li>
                    <li><a onClick={() => handleNavClick('about')} className={getLinkClass('about')}>About</a></li>
                    <li><a onClick={() => handleNavClick('skills')} className={getLinkClass('skills')}>Tech & Skills</a></li>
                    <li><a onClick={() => handleNavClick('projects')} className={getLinkClass('projects')}>Project</a></li>
                    <li><a onClick={() => handleNavClick('contact')} className={getLinkClass('contact')}>Contact</a></li>
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