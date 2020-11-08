import React from 'react';

export default function NavbarLayout({ rootClass, ariaLabel, children }) {
    return (
        <nav 
        className={`navbar ${rootClass ?? ''}`}
        {...(ariaLabel && {
            "aria-label": ariaLabel
        })}>
            <ul className="navbar__items">
                {children}
            </ul>
        </nav>
    )
}