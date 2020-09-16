import React, { useState } from 'react';
import { ReactComponent as ProjectIcon } from '../../static/code.svg';
import { graphql } from 'gatsby';
import SwipeableViews from 'react-swipeable-views';
import ProjectMedia from '../components/ProjectMedia';
import { ReactComponent as GithubIcon } from '../../static/github.svg';
import { ReactComponent as LinkIcon } from '../../static/external-link.svg';

export default function Projects({ data: { projects: { edges: projects } } }) {
    const [projectIdx, setProjectIdx] = useState(0);
    const [projectLayoutMode, setProjectLayoutMode] = useState('linear');

    return (
        <div className="page">
            <div className="header">
                <div className="icon-wrapper">
                    <div className="icon">
                        <ProjectIcon />
                    </div>
                </div>
                <h1 className="heading heading--xl heading--primary">Projects</h1>
            </div>
            <div className={`projects-body projects-body--${projectLayoutMode}`}>
                {
                    projectLayoutMode === 'linear'
                    ?
                    (
                        <>
                            <SwipeableViews
                            className="projects-body__project-info projects-body__project-info--swipeable"
                            index={projectIdx}
                            onChangeIndex={(idx) => {
                                if (projectIdx !== idx) { 
                                    setProjectIdx(idx);
                                }
                            }}
                            enableMouseEvents>
                            {
                                projects.map(({ node: { frontmatter: { title, external, github, stack }, html: bodyContent }}) => (
                                    <div className="projects-body__project-info-content">
                                        <div className="header projects-body__project-header">
                                            <h2 className="heading heading--lg">{title}</h2>

                                        </div>
                                        <div className="projects-body__body-content" dangerouslySetInnerHTML={{__html: bodyContent}}></div>
                                        <div className="projects-body__stack-info">
                                            <span className="projects-body__emphasis-text">Built with: </span>
                                            <ul className="list list--horizontal projects-body__stack-list">
                                            {
                                                stack.map((tech) => (
                                                    <li className="projects-body__stack-item">{tech}</li>
                                                ))
                                            }
                                            </ul>
                                        </div>
                                        <div className="projects-body__project-links">
                                            <span className="projects-body__emphasis-text">Links: </span>
                                        {
                                            github && <a className="projects-body__project-link" href={github} target="_blank" rel="noreferrer"><GithubIcon className="icon icon--small" /></a>
                                        }
                                        {
                                            external && <LinkIcon />
                                        }
                                        </div>
                                    </div>
                                ))
                        
                            }
                            </SwipeableViews>
                            <ProjectMedia />
                        </>
                    )
                    :
                    (
                        <></>
                    )
                }

            </div>
        </div>
    )
}

export const projectQuery = graphql`
query {
    projects: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            external
            github
            title
            stack
          }
          html
        }
      }
    }
  }
`;