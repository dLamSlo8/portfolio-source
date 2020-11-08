import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import NavbarLayout from '../../layouts/navbar/NavbarLayout';
import NavItem from '../../layouts/navbar/NavItem';
import { ReactComponent as LinkIcon } from '../../../media/icons/link.svg';
import { ReactComponent as EmailIcon } from '../../../media/icons/mail.svg';
import { ReactComponent as DocumentIcon } from '../../../media/icons/document.svg';
import { ReactComponent as GithubIcon } from '../../../media/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../../../media/icons/linkedin.svg';
import Resume from '../../../media/files/resume.pdf';
export default function LinkSection() {
    return (
        <SectionLayout 
        id="links" 
        icon={<LinkIcon />} 
        title="My Links"
        bodyClass="links-body section-layout__body--short">
            <h2 className="heading heading--lg mt-0 mb-2">Here's where you can find more information about me.</h2>
            <NavbarLayout
            rootClass="mb-2" 
            ariaLabel="Info Links">
                <NavItem icon={<DocumentIcon />} text="Resume" rootClass="navbar__item--links" linkProps={{ href: Resume }} />
                <NavItem icon={<GithubIcon />} text="GitHub" rootClass="navbar__item--links" linkProps={{ href: 'https://www.github.com/dLamSlo8' }} />
                <NavItem icon={<LinkedInIcon />} text="LinkedIn™" rootClass="navbar__item--links" linkProps={{ href: 'https://www.linkedin.com/in/derek-lam-slo8/' }} />
            </NavbarLayout>
            <h2 className="heading heading--lg">Here's where you can contact me.</h2>
            <p className="links-body__sub-text">I'm actively looking for job opportunities as a frontend developer, so if I piqued your interest, feel free to reach out!</p>
            <NavbarLayout ariaLabel="Contact Links">
                <NavItem icon={<EmailIcon />} text="Email" rootClass="navbar__item--links" linkProps={{ href: 'mailto:dereklam67@gmail.com' }} />
                <NavItem icon={<LinkedInIcon />} text="LinkedIn™" rootClass="navbar__item--links" linkProps={{ href: 'https://www.linkedin.com/in/derek-lam-slo8/' }} />
            </NavbarLayout>
        </SectionLayout>
    )
}