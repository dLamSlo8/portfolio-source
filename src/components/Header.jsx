import React from 'react';
import { useInView } from 'react-intersection-observer';
import NavbarLayout from './layouts/navbar/NavbarLayout';
import Hero from './Hero';
import { ReactComponent as DownIcon } from '../media/icons/chevron-down.svg';
import { ReactComponent as PersonIcon } from '../media/icons/user.svg';
import { ReactComponent as ProjectIcon } from '../media/icons/code.svg';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';
import NavItem from './layouts/navbar/NavItem';

export default function Home() {
    const { ref: heroForwardRef, inView, entry } = useInView({
        threshold: 1.0,
    });

    return (
        <header className="header" ref={heroForwardRef}>
            <NavbarLayout
            rootClass={`navbar--main ${!inView ? 'navbar--scrolled' : ''}`}>
                <NavItem icon={<PersonIcon />} text="About Me" linkProps={{ href: '#about' }} />
                <NavItem icon={<ProjectIcon />} text="Projects" linkProps={{ href: '#projects' }} />
                <NavItem icon={<LinkIcon />} text="My Links" linkProps={{ href: '#links '}} />
            </NavbarLayout>
            <Hero />
            <div className="header__learn-more">
                <p>Learn more about me</p>
                <a className="icon-wrapper icon-wrapper--transition icon-wrapper--hover" href="#about">
                    <DownIcon className="icon" />
                </a>
            </div>
        </header>
    )
}