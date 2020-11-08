import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import { ReactComponent as DownIcon } from '../media/icons/chevron-down.svg';
import { useInView } from 'react-intersection-observer';

export default function Home() {
    const { ref: heroForwardRef, inView, entry } = useInView({
        threshold: 1.0,
    });

    useEffect(() => {
        console.log(inView);
        console.log(entry);
    }, [inView, entry]);

    return (
        <header className="header" ref={heroForwardRef}>
            <Navbar inView={inView} />
            <Hero />
            <div className="header__learn-more">
                <p>Learn more about me</p>
                <a className="icon-wrapper icon-wrapper--transition icon-wrapper--hover" href="#about">
                    <DownIcon className="icon" />
                </a>
            </div>
            {/* Insert left and right menus here */}
        </header>
    )
}