import React from 'react';
import { ReactComponent as PersonIcon } from '../../static/user.svg';
import { ReactComponent as ProjectIcon } from '../../static/code.svg';
import { ReactComponent as LinkIcon } from '../../static/link.svg';
import { Link } from 'gatsby';

function NavbarItem({ icon, text }) {
    return (
        <li className="navbar__item">
            <Link to={`/${text}`} className="navbar__link">
                <div className="navbar__icon">
                    {icon}
                </div>
                {text}
            </Link>
        </li>
    )
}

export default function Navbar() {
    return (
        <nav className="navbar" role="navigation">
            <ul className="navbar__items">
                <NavbarItem icon={<PersonIcon />} text="about" />
                <NavbarItem icon={<ProjectIcon />} text="projects" />
                <NavbarItem icon={<LinkIcon />} text="links" />
            </ul>
        </nav>
    )
}