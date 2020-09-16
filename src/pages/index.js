import React from "react"
import { Link, graphql } from 'gatsby';
import Header from '../components/Header';

export default function Home({ data }) {
  return <Header />
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
