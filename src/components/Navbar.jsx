import React, { useEffect } from 'react';
import { ReactComponent as PersonIcon } from '../media/icons/user.svg';
import { ReactComponent as ProjectIcon } from '../media/icons/code.svg';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';
import NavItem from './layouts/navbar/NavItem';



export default function Navbar({ inView }) {
    return (
        <nav className={`navbar navbar--main ${!inView && 'navbar--scrolled'}`} role="navigation">
            <ul className="navbar__items">
                <NavItem icon={<PersonIcon />} text="about me" linkProps={{ href: '#about' }} />
                <NavItem icon={<ProjectIcon />} text="projects" linkProps={{ href: '#projects' }} />
                <NavItem icon={<LinkIcon />} text="my links" linkProps={{ href: '#links '}} />
            </ul>
        </nav>
    )
}