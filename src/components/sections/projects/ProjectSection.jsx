import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionLayout from '../../layouts/SectionLayout';
import Project from './Project';

import ProjectMedia from './ProjectMedia';
import Tooltip from '../../Tooltip';

import { ReactComponent as ProjectIcon } from '../../../media/icons/code.svg';



export default function ProjectSection() {
    const { projects: { edges: projects } } = useStaticQuery(graphql`
        query {
            projects: allMarkdownRemark {
            edges {
                node {
                frontmatter {
                    external
                    github
                    title
                    stack
                    desktop_cover {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    desktop_alt
                    mobile_cover {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    mobile_alt
                    learned 
                }
                html
                }
            }
            }
        }
    `);

    console.log(projects);

    return (
        <SectionLayout 
        id="projects" 
        icon={<ProjectIcon />} 
        title="Projects"
        bodyClass="projects-body">
        {
            projects.map(({ node }) => (
                <Project projectInfo={node} />
            ))
    
        }
        </SectionLayout>
    )
}

