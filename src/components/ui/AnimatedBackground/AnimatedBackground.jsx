import React, { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
    const backgroundRef = useRef(null);

    useEffect(() => {
        const shapes = [];
        const shapeCount = 15; // Jumlah bentuk yang diinginkan

        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            shape.className = styles.shape;

            // Posisi acak
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            shape.style.left = `${x}%`;
            shape.style.top = `${y}%`;

            // Ukuran acak
            const size = Math.random() * 60 + 20; // Antara 20px dan 80px
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;

            // Durasi animasi acak
            const duration = Math.random() * 20 + 10; // Antara 10s dan 30s
            shape.style.animationDuration = `${duration}s`;

            // Delay animasi acak
            const delay = Math.random() * 5; // Antara 0s dan 5s
            shape.style.animationDelay = `${delay}s`;
            
            shapes.push(shape);
        }

        if (backgroundRef.current) {
            shapes.forEach(shape => backgroundRef.current.appendChild(shape));
        }

        // Cleanup
        return () => {
            if (backgroundRef.current) {
                shapes.forEach(shape => backgroundRef.current.removeChild(shape));
            }
        };
    }, []);

    return <div ref={backgroundRef} className={styles.background}></div>;
};

export default AnimatedBackground;