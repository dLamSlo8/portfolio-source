import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

export default function PageTransition({ location, children }) {
    return (
        <SwitchTransition mode="out-in">
            <CSSTransition 
            key={location.pathname}
            classNames="page"
            timeout={300}>
                <div>
                    {children}
                </div>
            </CSSTransition>
        </SwitchTransition>
    )
}