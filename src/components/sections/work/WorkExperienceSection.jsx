import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionLayout from '../../layouts/SectionLayout';
import WorkExperience from './WorkExperience';
import { ReactComponent as BriefcaseIcon } from '../../../media/icons/briefcase.svg';
export default function WorkExperienceSection() {
    const { work: { edges: work } } = useStaticQuery(graphql`
        query {
            work: allMarkdownRemark(
                filter: {
                    fileAbsolutePath: { regex: "/work/" }
                },
                sort: { 
                    fields: [frontmatter___order],
                    order: ASC
                }
            ) {
            edges {
                node {
                frontmatter {
                    workplace
                    role
                    timeWorked
                }
                html
                }
            }
            }
        }
    `);

    return (
        <SectionLayout
        id="work"
        icon={<BriefcaseIcon />}
        title="Work Experience"
        bodyClass="work-body">
            <p className="work-body__description">Below is a list of where I've worked as well as a synopsis of what I gained from the experiences. More 
            information is available on my resume (also linked in the 'My Links' section!)</p>
        {
            work.map(({ node: { frontmatter: { workplace, role, timeWorked }, html: body } }) => (
                <WorkExperience
                workplace={workplace}
                role={role}
                timeWorked={timeWorked}
                body={body} />
            ))
        }
        </SectionLayout>
    )
}