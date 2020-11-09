import React from 'react';
import { useInView } from 'react-intersection-observer';
import NavbarLayout from './layouts/navbar/NavbarLayout';
import Hero from './Hero';
import { ReactComponent as DownIcon } from '../media/icons/chevron-down.svg';
import { ReactComponent as PersonIcon } from '../media/icons/user.svg';
import { ReactComponent as BriefcaseIcon } from '../media/icons/briefcase.svg';
import { ReactComponent as ProjectIcon } from '../media/icons/code.svg';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';
import NavItem from './layouts/navbar/NavItem';

export default function Home() {
    const { ref: heroForwardRef, inView } = useInView({
        threshold: 1.0,
        initialInView: true
    });

    return (
        <header className="header" ref={heroForwardRef}>
            <NavbarLayout
            rootClass={`navbar--main ${!inView ? 'navbar--scrolled' : ''}`}
            listClass="navbar__items--main">
                <NavItem icon={<PersonIcon />} text="About" linkProps={{ href: '#about' }} rootClass="navbar__item--main" />
                <NavItem icon={<BriefcaseIcon />} text="Work" linkProps={{ href: '#work' }} rootClass="navbar__item--main" />
                <NavItem icon={<ProjectIcon />} text="Projects" linkProps={{ href: '#projects' }} rootClass="navbar__item--main" />
                <NavItem icon={<LinkIcon />} text="Links" linkProps={{ href: '#links '}} rootClass="navbar__item--main" />
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