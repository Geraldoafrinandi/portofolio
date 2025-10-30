import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', onClick, href }) => {
    const className = `${styles.button} ${styles[variant]}`;
    
    if (href) {
        return <a href={href} className={className}>{children}</a>;
    }

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;