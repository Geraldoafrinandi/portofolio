import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>&copy; 2025 Geraldo Afrinandi Persada. All Rights Reserved.</p>
                <div className={styles.socialLinks}>
                    <a href="https://github.com/Geraldoafrinandi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/geraldoafrinandi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://instagram.com/geraldoafrinandi_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;