import React from "react"
import { Link, graphql } from 'gatsby';
import Header from '../components/Header';
import AboutSection from '../components/sections/about/AboutSection';
import ProjectSection from '../components/sections/projects/ProjectSection';
import LinkSection from '../components/sections/links/LinkSection';

export default function Home({ data }) {
    return (
        <div style={{scrollBehavior: 'smooth'}}>
            <Header />
            <AboutSection />
            <ProjectSection />
            <LinkSection />
        </div>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
