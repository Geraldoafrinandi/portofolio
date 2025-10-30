import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './About.jsx';

const About = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section id="about" className={`section-padding ${inView ? 'animate-fade-in' : ''}`} ref={ref}>
            <div className="container">
                <h2 className="section-title">Tentang Saya</h2>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <p>Saya adalah seorang developer yang passionate dengan teknologi web dan desain. Dengan pengalaman dalam membangun berbagai aplikasi web, saya berkomitmen untuk menghasilkan kode yang bersih, efisien, dan mudah dirawat.</p>
                        <p>Saya percaya bahwa kombinasi antara desain yang intuitif dan teknologi yang kuat dapat menciptakan produk digital yang luar biasa. Selalu siap untuk belajar hal baru dan menghadapi tantangan baru.</p>
                    </div>
                    <div className={styles.aboutInfo}>
                        <p><strong>Nama:</strong> Nama Lengkap Anda</p>
                        <p><strong>Email:</strong> email@example.com</p>
                        <p><strong>Lokasi:</strong> Kota Anda, Negara</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;