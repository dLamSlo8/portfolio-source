import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import NavbarLayout from './layouts/navbar/NavbarLayout';
import Hero from './Hero';
import { ReactComponent as DownIcon } from '../media/icons/chevron-down.svg';
import { ReactComponent as PersonIcon } from '../media/icons/user.svg';
import { ReactComponent as BriefcaseIcon } from '../media/icons/briefcase.svg';
import { ReactComponent as ProjectIcon } from '../media/icons/code.svg';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';
import { ReactComponent as HamburgerIcon } from '../media/icons/menu.svg';
import NavItem from './layouts/navbar/NavItem';

export default function Home() {
    const { ref: heroForwardRef, inView } = useInView({
        threshold: 1.0,
        initialInView: true
    });
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const handleOpenMenu = (e) => {
        document.body.style.overflowY = 'hidden';

        setMobileMenuOpen(true);
    }

    const handleCloseMenu = (e) => {
        if (mobileMenuOpen) { 
            document.body.style.overflowY = '';
            
            setMobileMenuOpen(false);
        }
    }

    return (
        <header className="header" ref={heroForwardRef}>
            <button 
            className="navbar__hamburger"
            onClick={handleOpenMenu}>
                <HamburgerIcon />
            </button>
            <div 
            aria-hidden="true"
            className={`navbar__backdrop ${mobileMenuOpen ? 'navbar__backdrop--active' : ''}`} 
            onClick={handleCloseMenu} />
            <NavbarLayout
            rootClass={`navbar--main ${mobileMenuOpen ? 'navbar--main--mobile-active' : ''} ${!inView ? 'navbar--scrolled' : ''}`}
            listClass="navbar__items--main">
                <NavItem icon={<PersonIcon />} text="About" linkProps={{ href: '#about' }} rootClass="navbar__item--main" onClick={handleCloseMenu} />
                <NavItem icon={<BriefcaseIcon />} text="Work" linkProps={{ href: '#work' }} rootClass="navbar__item--main" onClick={handleCloseMenu} />
                <NavItem icon={<ProjectIcon />} text="Projects" linkProps={{ href: '#projects' }} rootClass="navbar__item--main" onClick={handleCloseMenu} />
                <NavItem icon={<LinkIcon />} text="Links" linkProps={{ href: '#links '}} rootClass="navbar__item--main" onClick={handleCloseMenu} />
            </NavbarLayout>
            <Hero />
            <div className="header__learn-more">
                <p className="header__learn-more-text mt-0">Learn more about me</p>
                <a className="icon-wrapper icon-wrapper--transition icon-wrapper--hover" href="#about">
                    <DownIcon className="icon" />
                </a>
            </div>
        </header>
    )
}