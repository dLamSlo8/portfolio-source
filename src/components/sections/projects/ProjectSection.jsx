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
        <SectionLayout id="projects" icon={<ProjectIcon />} title="Projects">
            <div className="projects-body">
            {
                projects.map(({ node }) => (
                    <Project projectInfo={node} />
                ))
        
            }
                    {/* <div className="projects-body__slide-controls">
                        <div className="projects-body__slide-control">
                            <button 
                            className="projects-body__slide-control-button"
                            aria-labelledby="left-control-label"
                            aria-describedby="left-control-title"
                            onClick={(e) => projectIdx !== 0 && setProjectIdx(projectIdx - 1)}>
                                <span className="projects-body__slide-control-name projects-body__slide-control-name--left" id="left-control-label">Previous Project</span>
                                <div className="icon-wrapper icon-wrapper--transition projects-body__slide-control-icon-wrapper">
                                    <LeftIcon aria-hidden="true" />
                                </div>
                            </button>
                            {projectIdx !== 0 && <Tooltip id="left-control-title" position="bottom" align="right">{projects[projectIdx - 1].node.frontmatter.title}</Tooltip>}
                        </div>
                        <div className="projects-body__slide-control">
                            <button 
                            className="projects-body__slide-control-button" 
                            aria-describedby="right-control-title"
                            onClick={(e) => projectIdx !== projects.length - 1 && setProjectIdx(projectIdx + 1)}>
                                <div className="icon-wrapper icon-wrapper--transition projects-body__slide-control-icon-wrapper">
                                    <RightIcon aria-hidden="true" />
                                </div>
                                <span className="projects-body__slide-control-name">Next Project</span>
                            </button>
                            
                            {projectIdx !== projects.length - 1 && <Tooltip id="right-control-title" position="bottom">{projects[projectIdx + 1].node.frontmatter.title}</Tooltip>}
                        </div>
                    </div> */}



            </div>
        </SectionLayout>
    )
}

