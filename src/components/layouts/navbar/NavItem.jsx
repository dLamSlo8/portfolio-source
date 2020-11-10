import React from 'react';
import { Link } from 'gatsby';

export default function NavItem({ icon, text, linkProps, isNativeLink=true, rootClass, ...rest }) {
    return (
        <li className={`navbar__item ${rootClass ? rootClass : ''}`} {...rest}>
            {
                isNativeLink
                ?
                (
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
                )
                :
                (
                    <Link className="navbar__link" {...linkProps}>
                    {
                        icon && (
                            <div className="icon icon--xs navbar__icon">
                                {icon}
                            </div>
                        )
                    }
                    {text}
                </Link>
                )
            }

        </li>
    )
}