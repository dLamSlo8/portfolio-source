import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Hero() {
    return (
        <section className="hero">
            <h1 className="hero__name">Hi, I'm <strong>Derek Lam</strong>.
            <CSSTransition in={true} classNames="hand" appear timeout={500}>
                <span className="hero__hand-emoji" aria-hidden="true">👋</span>
            </CSSTransition>
            </h1>
            <h2 className="hero__description">I’m a <strong>frontend developer</strong> who enjoys bringing concepts to life with <strong>impactful websites</strong> and <strong>web apps</strong>.</h2>
        </section>
    )
}