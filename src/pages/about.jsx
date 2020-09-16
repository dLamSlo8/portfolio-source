import React from 'react';
import { ReactComponent as PersonIcon } from '../../static/user.svg';
import Navbar from '../components/Navbar';

export default function About() {
    return (
        <div className="page">
            <div className="page__navbar">
            </div>
            <div className="header">
                <div className="icon-wrapper">
                    <div className="icon">
                        <PersonIcon />
                    </div>
                </div>
                <h1 className="heading heading--xl heading--primary">About Me</h1>
            </div>
            <div className="about-body">
                <section className="about-body__description">
                    <p>
                        Hi! I'm Derek, a <strong>frontend developer</strong> based in <strong>Los Angeles, CA</strong>, and recent <strong>Computer Science graduate</strong> from California Polytechnic State University - San Luis Obispo. 
                        I am passionate about creating <strong>pixel-perfect user experiences</strong> and transforming designs into <strong>performant and responsive applications.</strong>
                    </p>
                    <p>
                        As a developer, I'm constantly trying to improve upon my current skills while learning new ones. Currently, I have professional work experience with <strong>HTML, CSS, JS/TS, ReactJS, Bootstrap, and jQuery.</strong> As for new skills, I'm not only learning new technologies like <strong>TailwindCSS</strong> and <strong>GatsbyJS</strong>, 
                        but also learning to be better equipped for creating accessible experiences, and for better performance in my React applications.
                    </p>
                    <p>
                        The following is a list of technologies that I currently work with for personal and freelance projects, and also ones that I've had 
                        varying levels of experience with and would be willing to pick up again whether for a personal or work-related project.                    
                    </p>
                </section>
                <section className="about-body__skills">
                    <h2 className="heading about-body__skills-heading">Technologies I Currently Use</h2>
                    <div className="about-body__skills-content">
                        <div className="about-body__skills-subsection">
                            <ul className="list about-body__list">
                                <li className="about-body__list-item">HTML</li>
                                <li className="about-body__list-item">CSS</li>
                                <li className="about-body__list-item">JavaScript (ES6)</li>
                            </ul>
                        </div>
                        <div className="about-body__skills-subsection">
                            <ul className="list about-body__list">
                                <li className="about-body__list-item">TailwindCSS</li>
                                <li className="about-body__list-item">Sass</li>
                                <li className="about-body__list-item">ReactJS</li>
                                <li className="about-body__list-item">GatsbyJS</li>
                            </ul>
                        </div>
                    </div>
                    <h2 className="heading about-body__skills-heading">Other Technologies I've Learned</h2>
                    <div className="about-body__skills-content">
                        <div className="about-body__skills-subsection">
                            <h3 className="heading heading--sm heading--space-b">Frontend</h3>
                            <ul className="list about-body__list">
                                <li className="about-body__list-item">Typescript</li>
                                <li className="about-body__list-item">Bootstrap</li>
                                <li className="about-body__list-item">jQuery</li>
                            </ul>
                        </div>
                        <div className="about-body__skills-subsection">
                            <h3 className="heading heading--sm heading--space-b">Backend</h3>
                            <ul className="list about-body__list">
                                <li className="about-body__list-item">NodeJS</li>
                                <li className="about-body__list-item">Express</li>
                                <li className="about-body__list-item">MongoDB</li>
                            </ul>
                        </div> 
                    </div>
                </section>
            </div>


        </div>
    )
}