import React, { FC, useEffect } from "react";
import { graphql } from "gatsby";
import { ReactNodeArray } from "react";

interface PageTemplateProps {
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
                author: {
                    name: string;
                    url: string;
                };
            };
        };
        markdownRemark: {
            html: string;
            excerpt: string;
            frontmatter: {
                projectName: string;
                link: string;
                technologies: string[];
                image: {
                  publicURL: string;
                };
            };
        };
    };
    children: ReactNodeArray;
}

const PageTemplate: FC<PageTemplateProps> = ({ data }: PageTemplateProps) =>  {
    useEffect(() => {
        location.assign(data.markdownRemark.frontmatter.link);
    });

    return <p>Redirecting...</p>;
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
        excerpt
        frontmatter {
            projectName
            technologies
            link
            image {
                publicURL
            }
        }
    }
  }
`;
