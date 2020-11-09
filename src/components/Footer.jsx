import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__description">Developed using</p>
            <p className="footer__stack">SASS, GatsbyJS, and Feather Icons</p>
            <a 
            className="footer__link" 
            href="https://github.com/dLamSlo8/portfolio-source" 
            target="_blank" 
            rel="noreferrer noopener">View Source Code</a>
        </footer>
    )
}