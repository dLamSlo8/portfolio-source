import React from 'react';
import PageTransition from './PageTransition';
import Navbar from './Navbar';
import { Link } from 'gatsby';
import { ReactComponent as LeftArrowIcon } from '../../static/left-arrow.svg';

export default function Layout({ location, children }) {
    console.log(location.pathname);
    return (
        <div className="layout">
            <div className={`layout__navbar ${location.pathname === '/' ? 'layout__navbar--disabled' : ''}`}>
                <div className="layout__go-home">
                    <Link to="/" className="layout__go-home-content">
                        <div className="icon layout__icon">
                            <LeftArrowIcon />
                        </div>
                        <span className="layout__go-home-text">GO HOME</span>
                    </Link>

                </div>
                <Navbar />
            </div>
            <PageTransition location={location}>
                {children}
            </PageTransition>
        </div>
    )
}