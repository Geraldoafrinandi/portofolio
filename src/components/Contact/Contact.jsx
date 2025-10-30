import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button/Button';
import styles from './Contact.module.css';

const Contact = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Di sini Anda bisa menambahkan logika untuk mengirim email
        // Misalnya menggunakan EmailJS, Formspree, atau backend sendiri
        alert(`Terima kasih ${formData.name}, pesan Anda telah terkirim! (Ini hanyalah demo)`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className={`section-padding ${inView ? 'animate-fade-in' : ''}`} ref={ref}>
            <div className="container">
                <h2 className="section-title">Hubungi Saya</h2>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Nama Lengkap" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email Anda" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Pesan Anda" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                    <Button type="submit">Kirim Pesan</Button>
                </form>
            </div>
        </section>
    );
};

export default Contact;