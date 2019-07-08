import React from 'react';
import { get } from 'lodash';
import { graphql, useStaticQuery } from 'gatsby';

import FoundersComponent from './Founders';

const Founders = () => {
  const data = useStaticQuery(graphql`
    query FoundersQuery {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___position] }
        filter: { frontmatter: { templateKey: { eq: "founder" } } }
      ) {
        edges {
          node {
            frontmatter {
              image
              position
              jobTitle
              title
            }
          }
        }
      }
    }
  `);

  const founders = get(data, 'allMarkdownRemark.edges', [])
    .map((founder) => founder.node.frontmatter)
    .sort((a, b) => a.position - b.position);

  return <FoundersComponent founders={founders} />;
};

export default Founders;