import React from 'react';
import NavItem from './NavItem';
import { ReactComponent as EmailIcon } from '../media/icons/mail.svg';
import { ReactComponent as DocumentIcon } from '../media/icons/document.svg';
import { ReactComponent as GithubIcon } from '../media/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../media/icons/linkedin.svg';
import Resume from '../files/resume.pdf';

export default function Links({ scrolled }) {
    return (
        <section className={`section contact-links ${scrolled && 'contact-links--vertical'}`}>
            <nav className={`navbar ${scrolled && 'navbar--vertical'}`} aria-label="My Links">
                <ul className={`navbar__items ${scrolled && 'navbar__items--vertical'}`}>
                    <NavItem icon={<EmailIcon />} text="email me" rootClass={`navbar__item--primary navbar__item--links ${scrolled && ''}`} linkProps={{ href: 'mailto:dereklam67@gmail.com' }} />
                    <NavItem icon={<DocumentIcon />} text="view resume" rootClass="navbar__item--links" linkProps={{ href: Resume }} />
                    <NavItem icon={<GithubIcon style={{width: '100%', height: '100%'}} />} text="github" rootClass="navbar__item--links" linkProps={{ href: 'https://www.github.com/dLamSlo8' }} />
                    <NavItem icon={<LinkedInIcon style={{width: '100%', height: '100%'}} />} text="linkedin" rootClass="navbar__item--links" linkProps={{ href: 'https://www.linkedin.com/in/derek-lam-slo8/' }} />
                </ul>
            </nav>
        </section>
    )
}