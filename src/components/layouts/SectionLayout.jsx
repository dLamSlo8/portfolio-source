import React from 'react';

export default function SectionLayout({ id, icon, title, children }) {
    return (
        <section id={id} className="section-layout">
            <header className="section-layout__header">
                <div className="icon-wrapper icon-wrapper--primary icon-wrapper--space-r">
                    <div className="icon icon--secondary">{icon}</div>
                </div>
                <h1 className="heading heading--xxl heading--primary">{title}</h1>
            </header>
            {children}
        </section>
    )
}