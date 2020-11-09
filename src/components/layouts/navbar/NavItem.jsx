import React from 'react';

export default function NavItem({ icon, text, linkProps, rootClass, ...rest }) {
    return (
        <li className={`navbar__item ${rootClass ? rootClass : ''}`} {...rest}>
            <a className="navbar__link" {...linkProps}>
                {
                    icon && (
                        <div className="icon icon--xs navbar__icon">
                            {icon}
                        </div>
                    )
                }
                {text}
            </a>
        </li>
    )
}