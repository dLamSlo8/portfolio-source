import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Files() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    
    return (
        <div>Hello files!</div>
    )
}